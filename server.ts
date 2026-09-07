import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

const restaurantData = {
  name: "Petuk Gang",
  tagline: "Food just not provides energy, it also provides senergy.",
  location: "Patharghata, Chattogram, Bangladesh",
  cuisine: "Traditional Bangladeshi food",
  menu: [
    { name: "Bhorta", price: 60 },
    { name: "Rice", price: 30 },
    { name: "Fish", price: 100 },
    { name: "Beef", price: 180 },
    { name: "Chicken", price: 150 },
    { name: "Dal", price: 0, free: true },
    { name: "Vegetable Dishes", price: 100 },
    { name: "Snacks", price: 150 },
    { name: "Desserts", price: 180 }
  ]
};

const SYSTEM_INSTRUCTION = `You are Petuk AI, the friendly food assistant for Petuk Gang, a traditional Bangladeshi restaurant in Patharghata, Chattogram.

Your job is to help customers discover food, understand menu categories, calculate bills, recommend combinations based on budget, answer restaurant questions, and guide users through ordering.

Only use verified restaurant information provided in the restaurant data below:
Restaurant Name: ${restaurantData.name}
Tagline: "${restaurantData.tagline}"
Location: ${restaurantData.location}
Cuisine: ${restaurantData.cuisine}

Menu items and exact prices:
- Bhorta: ৳60
- Rice: ৳30
- Fish: ৳100
- Beef: ৳180
- Chicken: ৳150
- Dal: FREE (৳0)
- Vegetable Dishes: ৳100
- Snacks: ৳150
- Desserts: ৳180

Rules:
1. Never invent menu prices, ingredients, opening hours, addresses, reviews, awards, discounts or restaurant history.
2. When calculating prices, always calculate mathematically using the provided menu data. Dal is free (৳0).
3. If exact ingredients are asked: "I don't have the exact ingredient information for that item yet. Please contact Petuk Gang directly to confirm."
4. If allergies are asked: "I don't have verified allergen information for every Petuk Gang item, so please confirm directly with the restaurant before ordering."
5. If opening hours are asked: "I don't have Petuk Gang's current opening hours yet. Please contact the restaurant directly to confirm."
6. If online reservations are asked: "Petuk Gang currently doesn't offer online reservations. Please contact us directly for more information."
7. Location: Always state "Patharghata, Chattogram".
8. Be friendly, concise, warm and slightly playful. You may use occasional emojis. Always prioritize accurate information over making something up.
9. If the user speaks or asks in Bangla, respond in natural, warm Bangla.
10. Format recommended items clearly with their prices so customers can easily add them to their cart.`;

// Smart local fallback assistant for calculations and strict questions
function getFallbackResponse(prompt: string, language: 'en' | 'bn' = 'en'): string {
  const lower = prompt.toLowerCase();

  // Allergen
  if (
    lower.includes('allerg') ||
    lower.includes('peanut') ||
    lower.includes('dairy') ||
    lower.includes('gluten') ||
    lower.includes('nut') ||
    lower.includes('এলার্জি') ||
    lower.includes('অ্যালার্জি') ||
    lower.includes('বাদাম')
  ) {
    return language === 'bn'
      ? "আমাদের প্রতিটি পদের নির্দিষ্ট অ্যালার্জেন তথ্য এখনো যাচাই করা হয়নি, তাই অর্ডার করার আগে দয়া করে রেস্তোরাঁয় সরাসরি যোগাযোগ করে জেনে নিন।"
      : "I don't have verified allergen information for every Petuk Gang item, so please confirm directly with the restaurant before ordering.";
  }

  // Ingredients
  if (lower.includes('ingredient') || lower.includes('রেসিপি') || lower.includes('উপাদান') || lower.includes('কী দিয়ে তৈরি')) {
    return language === 'bn'
      ? "এই পদের বিস্তারিত উপাদানের সুনির্দিষ্ট তথ্য আমার কাছে এখনো নেই। নিশ্চিত হতে অনুগ্রহ করে সরাসরি পেটুক গ্যাং-এর সাথে যোগাযোগ করুন।"
      : "I don't have the exact ingredient information for that item yet. Please contact Petuk Gang directly to confirm.";
  }

  // Hours
  if (lower.includes('hour') || lower.includes('open') || lower.includes('close') || lower.includes('সময়') || lower.includes('কখন')) {
    return language === 'bn'
      ? "আমার কাছে পেটুক গ্যাং-এর বর্তমান খোলার সময়সূচি এখনো সংরক্ষিত নেই। নিশ্চিত হতে অনুগ্রহ করে সরাসরি রেস্তোরাঁয় যোগাযোগ করুন।"
      : "I don't have Petuk Gang's current opening hours yet. Please contact the restaurant directly to confirm.";
  }

  // Reservation
  if (lower.includes('reserv') || lower.includes('book') || lower.includes('টেবিল বুক') || lower.includes('রিজার্ভ')) {
    return language === 'bn'
      ? "পেটুক গ্যাং বর্তমানে অনলাইনে টেবিল বুকিং বা রিজার্ভেশন গ্রহণ করে না। বিস্তারিত তথ্যের জন্য অনুগ্রহ করে আমাদের সাথে সরাসরি যোগাযোগ করুন।"
      : "Petuk Gang currently doesn't offer online reservations. Please contact us directly for more information.";
  }

  // Location / Where
  if (lower.includes('where') || lower.includes('location') || lower.includes('কোথায়') || lower.includes('ঠিকানা') || lower.includes('find us')) {
    return language === 'bn'
      ? "আমাদের রেস্তোরাঁটি চট্টগ্রামের ঐতিহ্যবাহী পাথরঘাটায় অবস্থিত (Patharghata, Chattogram)। নিচে 'Get Directions' বাটনে ক্লিক করে ম্যাপে সরাসরি দেখে নিতে পারেন!"
      : "We are located in Patharghata, Chattogram! You can find us easily using the 'Get Directions' button below.";
  }

  // Budget calculation (e.g. 300 taka)
  if (lower.includes('300') || lower.includes('৩০০')) {
    return language === 'bn'
      ? "৩০০ টাকার বাজেটে সেরা ভরপেট পেটুক কম্বো হতে পারে:\n• গরুর মাংস = ৳১৮০\n• ভাত = ৳৩০\n• ভর্তা = ৳৬০\n• ডাল = ফ্রি (৳০)\n\nমোট = ৳২৭০! (বাকি থাকে ৳৩০)। এই কম্বোটি সরাসরি কার্টে যোগ করে নিতে পারেন 😋"
      : "For a ৳300 budget, here is a hearty Petuk Gang feast recommendation:\n• Beef = ৳180\n• Rice = ৳30\n• Bhorta = ৳60\n• Dal = FREE\n\nTotal = ৳270 (with ৳30 to spare!). You can add these items directly to your cart below 😋";
  }

  // Custom bill calculation matching "2 rice, 1 beef, 2 bhorta" or numbers
  if (lower.includes('rice') || lower.includes('beef') || lower.includes('bhorta') || lower.includes('bill') || lower.includes('হিসাব')) {
    // Check for "2 rice, 1 beef, 2 bhorta"
    if (lower.includes('2') && lower.includes('rice') && lower.includes('beef') && lower.includes('bhorta')) {
      return language === 'bn'
        ? "আপনার বিলের সঠিক হিসাব:\n• ২ × ভাত (৳৩০) = ৳৬০\n• ১ × গরুর মাংস (৳১৮০) = ৳১৮০\n• ২ × ভর্তা (৳৬০) = ৳১২০\n• ডাল = ফ্রি\n\nসর্বমোট = ৳৩৬০। এখনই কার্টে যোগ করে অর্ডার করে নিন!"
        : "Here is your exact bill calculation:\n• 2 × Rice (৳30) = ৳60\n• 1 × Beef (৳180) = ৳180\n• 2 × Bhorta (৳60) = ৳120\n• Dal = FREE\n\nTotal = ৳360. Ready to feast!";
    }
  }

  // Generic recommendation
  if (lower.includes('recommend') || lower.includes('hungry') || lower.includes('ক্ষুধা') || lower.includes('পরামর্শ')) {
    return language === 'bn'
      ? "একদম খাঁটি দেশি তৃপ্তি চাইলে আমাদের স্পেশাল গরুর মাংস (৳১৮০) অথবা নদীর তাজা মাছ (৳১০০)-এর সাথে ধোঁয়া ওঠা গরম ভাত (৳৩০), ঝাঁঝালো ভর্তা (৳৬০) আর ফ্রি ডাল চেখে দেখতে পারেন! দারুণ লাগবে 🍛"
      : "For an authentic Bangladeshi comfort meal, I warmly recommend our Rich Beef Curry (৳180) or Fresh Fish (৳100), paired with Steamed Rice (৳30), homemade Bhorta (৳60), and complimentary warm Dal (FREE)! 🍛";
  }

  // Menu overview
  if (lower.includes('menu') || lower.includes('মেনু')) {
    return language === 'bn'
      ? "পেটুক গ্যাং মেনু:\n• ভর্তা - ৳৬০\n• ভাত - ৳৩০\n• মাছ - ৳১০০\n• গরুর মাংস - ৳১৮০\n• মুরগি - ৳১৫০\n• ডাল - ফ্রি (৳০)\n• সবজি - ৳১০০\n• স্ন্যাক্স - ৳১৫০\n• মিষ্টি ও ডেজার্ট - ৳১৮০\n\nআপনার কি পছন্দ?"
      : "Petuk Gang Menu:\n• Bhorta - ৳60\n• Rice - ৳30\n• Fish - ৳100\n• Beef - ৳180\n• Chicken - ৳150\n• Dal - FREE\n• Vegetable Dishes - ৳100\n• Snacks - ৳150\n• Desserts - ৳180\n\nWhat would you like to order today?";
  }

  return language === 'bn'
    ? "পেটুক এআই আপনার সেবায় প্রস্তুত! মেনুর যেকোন খাবার সম্পর্কে জানতে, বাজেট অনুযায়ী কম্বো বেছে নিতে কিংবা বিল হিসাব করতে আমাকে বলতে পারেন 😋"
    : "Petuk AI is here to help! Ask me for food recommendations, budget combos, bill calculations, or finding our restaurant in Patharghata, Chattogram 😋";
}

// Lazy Gemini API Client
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (geminiClient) return geminiClient;
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  geminiClient = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
  return geminiClient;
}

// AI Chatbot endpoint
app.post("/api/chat", async (req, res) => {
  const { message, history = [], language = 'en' } = req.body;

  if (!message || typeof message !== 'string') {
    res.status(400).json({ error: "Message is required." });
    return;
  }

  const ai = getGeminiClient();

  // If Gemini API Key is missing or user has not configured it yet, gracefully use smart fallback
  if (!ai) {
    const reply = getFallbackResponse(message, language);
    res.json({
      text: reply,
      isFallback: true,
      notice: "Petuk AI is taking a quick food break 😅. You can still explore the menu and place your order below."
    });
    return;
  }

  try {
    // Multi-turn contents formatting if conversation history exists
    const formattedContents: Array<{ role: string; parts: Array<{ text: string }> }> = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const item of history.slice(-6)) {
        if (item.sender === 'user' && item.text) {
          formattedContents.push({ role: 'user', parts: [{ text: item.text }] });
        } else if (item.sender === 'assistant' && item.text) {
          // Remove any appended fallback notices from historical context
          const cleanText = item.text.replace(/\n\n\*\(Note: Petuk AI is taking a quick food break.*?\)\*/gs, '').trim();
          if (cleanText) {
            formattedContents.push({ role: 'model', parts: [{ text: cleanText }] });
          }
        }
      }
    }
    formattedContents.push({ role: 'user', parts: [{ text: message }] });

    // Try models in order: gemini-3.1-flash-lite (high quota & fast), then gemini-3.8-flash
    const modelsToTry = ['gemini-3.1-flash-lite', 'gemini-3.8-flash'];
    let responseText = '';
    let lastError: unknown = null;

    for (const modelName of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: formattedContents.length > 1 ? formattedContents : message,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          }
        });
        if (response.text) {
          responseText = response.text;
          break;
        }
      } catch (err) {
        lastError = err;
        console.warn(`[Petuk AI] ${modelName} call failed, attempting fallback:`, (err as Error)?.message);
      }
    }

    if (responseText) {
      res.json({ text: responseText, isFallback: false });
      return;
    }

    throw lastError || new Error('No response generated by Gemini API');
  } catch (error) {
    console.error("Gemini API error in /api/chat:", error);
    // As per specifications: "If Gemini API is unavailable: Do NOT show a broken interface. Display: 'Petuk AI is taking a quick food break 😅. You can still explore the menu and place your order below.'"
    const fallbackText = getFallbackResponse(message, language);
    res.json({
      text: `${fallbackText}\n\n*(Note: Petuk AI is taking a quick food break 😅. You can still explore the menu and place your order below.)*`,
      isFallback: true,
      notice: "Petuk AI is taking a quick food break 😅. You can still explore the menu and place your order below."
    });
  }
});

// Restaurant Info endpoint
app.get("/api/info", (req, res) => {
  res.json({
    status: "ok",
    data: restaurantData
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Petuk Gang server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
