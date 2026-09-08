import { RestaurantConfig } from '../types';

export const config: RestaurantConfig = {
  restaurantName: "Petuk Gang",
  restaurantNameBn: "পেটুক গ্যাং",
  tagline: "Food just not provides energy, it also provides synergy.",
  taglineBn: "খাবার শুধু এনার্জি দেয় না, এটি সিনার্জিও দেয়।",
  location: "Patharghata, Chattogram",
  locationBn: "পাথরঘাটা, চট্টগ্রাম",
  fullAddress: "Patharghata, Chattogram, Bangladesh",
  fullAddressBn: "পাথরঘাটা, চট্টগ্রাম, বাংলাদেশ",
  cuisine: "Traditional Bangladeshi food",
  cuisineBn: "ঐতিহ্যবাহী বাংলাদেশি খাবার",

  // Central configurable links (empty string or defaults as requested)
  phone: "+880 1800-000000",
  whatsappUrl: "https://wa.me/?text=",
  foodpandaUrl: "https://www.foodpanda.com.bd",
  pathaoUrl: "https://pathao.com/food",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Patharghata,+Chattogram,+Bangladesh"
};

export const restaurantData = {
  name: "Petuk Gang",
  tagline: "Food just not provides energy, it also provides synergy.",
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
