# PETUK GANG — PERMANENT DEVELOPMENT INSTRUCTIONS

## IMPORTANT

This is an EXISTING production website for Petuk Gang.

You are modifying an existing website, NOT creating a new website.

Your highest priority is to preserve the existing website structure, visual design, functionality and user experience.

Always work in:

# SURGICAL EDITING MODE

Make the smallest possible change required to fulfill the user's request.

NEVER rebuild the website unless the user explicitly asks you to rebuild it.

NEVER redesign unrelated parts of the website.

NEVER make improvements that the user did not request.

---

# 1. PRESERVE THE EXISTING WEBSITE

Unless the user explicitly asks for a change, preserve:

* Overall website structure
* Page structure
* Section order
* Hero section
* Navigation
* Footer
* Menu section
* Food cards
* Gallery
* Reviews
* Offers
* Contact section
* Cart
* Checkout
* AI chatbot
* Buttons
* Colors
* Typography
* Fonts
* Spacing
* Borders
* Shadows
* Animations
* Scroll animations
* Responsive behavior
* Desktop layout
* Tablet layout
* Mobile layout
* Existing functionality
* Existing components

Do not change any of these simply because you think they could be improved.

---

# 2. BEFORE MAKING ANY CHANGE

First inspect the existing project.

Identify:

1. Which file contains the requested content/functionality.
2. Which component controls it.
3. Whether the requested information already exists in a centralized data/configuration file.
4. Whether the change can be made without touching unrelated components.

Then make the smallest possible modification.

---

# 3. TEXT CHANGES

If the user asks to change text:

ONLY change the requested text.

Example:

User:
"Change senergy to synergy."

Correct behavior:

Change:

"Food just not provides energy it also provides senergy."

to:

"Food just not provides energy it also provides synergy."

Do NOT change:

* Font
* Font size
* Color
* Position
* Animation
* Hero layout
* Spacing
* Other text
* Other components

If the same text appears in multiple language/data files, update only the relevant copies necessary to keep the website consistent.

---

# 4. PRICE CHANGES

If the user asks to change a price:

ONLY update the relevant menu data.

Example:

"Change Bhorta from ৳60 to ৳70."

Update the centralized menu data.

Do NOT redesign the menu cards.

Do NOT change the menu layout.

Do NOT modify unrelated prices.

Make sure the cart and AI chatbot use the updated price if they share the same menu data.

---

# 5. IMAGE CHANGES

If the user asks to replace an image:

ONLY replace the requested image.

Preserve:

* Image dimensions
* Position
* Border radius
* Animation
* Hover effect
* Layout
* Spacing

Do not redesign the surrounding section.

---

# 6. COLOR CHANGES

If the user asks to change a color:

ONLY change the requested color.

Do not automatically create a new color palette.

Do not change unrelated colors.

---

# 7. FONT/TYPOGRAPHY CHANGES

If the user asks to change a font:

ONLY change the requested typography.

Do not redesign the page.

Preserve existing sizes, spacing and layout unless specifically requested.

---

# 8. ANIMATION CHANGES

If the user asks to change an animation:

ONLY modify the requested animation.

Preserve all other animations.

Do not remove scroll animations or transitions unless explicitly requested.

---

# 9. CHATBOT CHANGES

If the user asks to modify Petuk AI:

ONLY modify chatbot-related functionality/components unless another file must technically be changed.

Do not redesign the rest of the website.

Do not modify:

* Hero
* Menu
* Gallery
* Navigation
* Footer
* Cart
* Offers
* Reviews

unless explicitly requested.

The chatbot should use the centralized restaurant/menu data rather than creating duplicate menu information.

---

# 10. MENU DATA

Keep restaurant/menu information centralized whenever possible.

The menu currently contains:

Bhorta — ৳60
Rice — ৳30
Fish — ৳100
Beef — ৳180
Chicken — ৳150
Dal — FREE
Vegetable Dishes — ৳100
Snacks — ৳150
Desserts — ৳180

If a price or menu item changes, update the centralized source of truth.

Do not duplicate prices unnecessarily across components.

---

# 11. RESTAURANT INFORMATION

Current verified information:

Restaurant:
Petuk Gang

Tagline:
"Food just not provides energy, it also provides synergy."

Location:
Patharghata, Chattogram, Bangladesh

Cuisine:
Traditional Bangladeshi food

Do not invent:

* Exact street address
* Phone number
* Opening hours
* Restaurant history
* Founder
* Awards
* Customer reviews
* Ingredients
* Allergens
* Discounts

unless the user provides them.

---

# 12. AI CHATBOT

Petuk AI should behave as a natural restaurant assistant.

It should:

* Understand English
* Understand Bangla
* Understand Banglish
* Remember the current conversation
* Recommend food
* Recommend meals by budget
* Calculate bills
* Explain available menu categories
* Help users order
* Use the actual menu prices
* Avoid inventing information

When the user changes menu prices, the chatbot must use the updated centralized data.

---

# 13. LANGUAGE

The website supports:

English

and

বাংলা

Do not break the language switcher.

If the user asks to change English text, do not unnecessarily change Bangla translations.

If a change logically requires both languages to remain consistent, update the corresponding translation only.

---

# 14. RESPONSIVE DESIGN

Never break:

* Mobile layout
* Tablet layout
* Desktop layout

After making changes, verify that the requested modification does not create:

* Horizontal scrolling
* Overlapping elements
* Broken buttons
* Broken navigation
* Broken chatbot
* Broken cart

---

# 15. EXISTING COMPONENTS

Prefer modifying an existing component rather than creating duplicate components.

Do not replace an existing component with a newly generated version unless necessary.

Do not create duplicate:

* Navbar
* Hero
* Menu
* Cart
* Chatbot
* Footer

---

# 16. NO UNSOLICITED IMPROVEMENTS

This is extremely important.

If the user asks:

"Change the tagline."

DO NOT:

* Improve the hero
* Change animations
* Change colors
* Rewrite other text
* Change fonts
* Redesign buttons
* Change spacing

Only change the tagline.

If the user asks:

"Fix the chatbot."

Only fix the chatbot.

---

# 17. WHEN THE USER REQUESTS A NEW FEATURE

If the user asks for a new feature:

1. Preserve all existing features.
2. Add the new feature with the smallest possible change.
3. Match the existing design.
4. Do not redesign unrelated sections.
5. Reuse existing components/styles where possible.

---

# 18. WHEN THE USER REQUESTS A DESIGN REDESIGN

Only perform a broader redesign if the user explicitly uses language such as:

* redesign
* completely redesign
* change the entire look
* rebuild the section
* create a new layout
* overhaul the website

Otherwise remain in surgical editing mode.

---

# 19. CODE SAFETY

Before editing:

Inspect the relevant files.

After editing:

Check for:

* TypeScript errors
* Build errors
* Broken imports
* Broken routes
* Broken components
* Broken state
* Broken API calls

Do not modify unrelated code simply to "clean it up."

---

# 20. GITHUB / NETLIFY SAFETY

This project is connected to GitHub and deployed through Netlify.

Do not:

* Create a new project
* Create a new website
* Create a new repository
* Replace the repository
* Change deployment configuration

unless the user explicitly requests it.

The existing project/repository should remain the source of truth.

---

# 21. BEFORE FINALIZING ANY CHANGE

Verify:

✓ Existing website structure remains intact.

✓ Existing sections remain intact.

✓ Existing navigation remains intact.

✓ Existing animations remain intact.

✓ Existing responsive behavior remains intact.

✓ Existing menu remains intact.

✓ Existing cart remains intact.

✓ Existing chatbot remains intact unless it was the requested change.

✓ No unrelated content was modified.

✓ No unrelated styling was modified.

✓ No unnecessary files were rewritten.

---

# 22. CHANGE SUMMARY

After completing a request, briefly report:

"Changed:

* [exact thing requested]

Preserved:

* Existing website structure
* Existing design
* Existing animations
* Existing functionality"

Do not claim that something was preserved unless you actually verified it.

---

# FINAL RULE

The user's request defines the scope of the change.

Do not expand the scope.

If the requested change can be completed by changing one line, change one line.

If it can be completed by changing one component, change one component.

If you are unsure whether another part should be changed:

DO NOT CHANGE IT.

Always prioritize:

1. User's explicit request
2. Existing website preservation
3. Minimal code changes
4. Functional correctness
5. Visual consistency
