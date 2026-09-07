import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'bhorta',
    name: 'Bhorta',
    nameBn: 'ভর্তা',
    price: 60,
    category: 'bhorta',
    categoryBn: 'ভর্তা',
    description: 'Authentic Bangladeshi comfort with bold homemade flavor.',
    descriptionBn: 'ঘরোয়া ঝাঁঝালো স্বাদে তৈরি খাঁটি বাংলাদেশি ভর্তা।',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    badge: 'Popular',
    badgeBn: 'জনপ্রিয়'
  },
  {
    id: 'rice',
    name: 'Rice',
    nameBn: 'ভাত',
    price: 30,
    category: 'rice',
    categoryBn: 'ভাত',
    description: 'Simple, warm and made for a proper meal.',
    descriptionBn: 'ধোঁয়া ওঠা তাজা সাদা ভাত, ভরপেট খাবারের মূল সঙ্গী।',
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fish',
    name: 'Fish',
    nameBn: 'মাছ',
    price: 100,
    category: 'fish',
    categoryBn: 'মাছ',
    description: 'Classic Bangladeshi-style comfort from the sea.',
    descriptionBn: 'দেশি কায়দায় ঝোল ও মশলায় রান্না করা সুস্বাদু মাছ।',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    badge: 'Fresh Catch',
    badgeBn: 'তাজা মাছ'
  },
  {
    id: 'beef',
    name: 'Beef',
    nameBn: 'গরুর মাংস',
    price: 180,
    category: 'beef',
    categoryBn: 'গরু',
    description: 'Rich, hearty and made for serious hunger.',
    descriptionBn: 'ঘন মশলায় কষা লোভনীয় স্পেশাল গরুর মাংস।',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    badge: 'Chef Choice',
    badgeBn: 'স্পেশাল'
  },
  {
    id: 'chicken',
    name: 'Chicken',
    nameBn: 'মুরগি',
    price: 150,
    category: 'chicken',
    categoryBn: 'মুরগি',
    description: 'Comforting, flavorful and satisfying.',
    descriptionBn: 'ঘরোয়া মসলায় ভুনা করা লোভনীয় নরম মুরগির মাংস।',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dal',
    name: 'Dal',
    nameBn: 'ডাল',
    price: 0,
    isFree: true,
    category: 'dal',
    categoryBn: 'ডাল',
    description: 'Warm, comforting and complimentary.',
    descriptionBn: 'ভাতের সাথে ফ্রি পরিবেশিত গরম ও মুখরোচক ডাল।',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    badge: 'FREE',
    badgeBn: 'ফ্রি'
  },
  {
    id: 'vegetable-dishes',
    name: 'Vegetable Dishes',
    nameBn: 'সবজি পদ',
    price: 100,
    category: 'vegetables',
    categoryBn: 'সবজি',
    description: 'Traditional vegetables prepared for a wholesome meal.',
    descriptionBn: 'মৌসুমি তাজা সবজির সমন্বয়ে তৈরি পুষ্টিকর নিরামিষ পদ।',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'snacks',
    name: 'Snacks',
    nameBn: 'স্ন্যাক্স',
    price: 150,
    category: 'snacks',
    categoryBn: 'নাস্তা',
    description: "Something delicious for when you're feeling peckish.",
    descriptionBn: 'মুচমুচে সুস্বাদু ঐতিহ্যবাহী হালকা নাস্তা ও চাট।',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    nameBn: 'মিষ্টি ও ডেজার্ট',
    price: 180,
    category: 'desserts',
    categoryBn: 'মিষ্টি',
    description: 'A sweet ending to your Petuk Gang feast.',
    descriptionBn: 'ভোজন শেষে তৃপ্তিদায়ক মিষ্টি ও ঐতিহ্যবাহী ডেজার্ট।',
    image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=800&q=80',
    badge: 'Sweet Finish',
    badgeBn: 'মিষ্টি শেষ'
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Categories', nameBn: 'সব খাবার' },
  { id: 'bhorta', name: 'Bhorta', nameBn: 'ভর্তা' },
  { id: 'rice', name: 'Rice', nameBn: 'ভাত' },
  { id: 'beef', name: 'Beef', nameBn: 'গরুর মাংস' },
  { id: 'chicken', name: 'Chicken', nameBn: 'মুরগি' },
  { id: 'fish', name: 'Fish', nameBn: 'মাছ' },
  { id: 'dal', name: 'Dal', nameBn: 'ডাল (ফ্রি)' },
  { id: 'vegetables', name: 'Vegetables', nameBn: 'সবজি' },
  { id: 'snacks', name: 'Snacks', nameBn: 'স্ন্যাক্স' },
  { id: 'desserts', name: 'Desserts', nameBn: 'ডেজার্ট' }
];
