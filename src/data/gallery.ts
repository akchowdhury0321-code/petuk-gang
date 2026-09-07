import { GalleryItem } from '../types';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    category: 'atmosphere',
    categoryBn: 'রেস্তোরাঁর পরিবেশ',
    title: 'Warm Wooden Interior & Cozy Lights',
    titleBn: 'কাঠের আসবাব ও স্নিগ্ধ আলো',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'g2',
    category: 'bhorta',
    categoryBn: 'ভর্তা',
    title: 'Traditional Bangladeshi Bhorta Feast',
    titleBn: 'ঐতিহ্যবাহী মুখরোচক ভর্তার সমাহার',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'g3',
    category: 'beef',
    categoryBn: 'গরুর মাংস',
    title: 'Hearty Spiced Beef Curry',
    titleBn: 'কষা ঝাল গরুর মাংস ভুনা',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'g4',
    category: 'fish',
    categoryBn: 'মাছ',
    title: 'Seafood & River Fish Preparation',
    titleBn: 'দেশি স্বাদে রান্না করা মাছ',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'g5',
    category: 'rice',
    categoryBn: 'ভাত',
    title: 'Freshly Steamed White Rice & Dal',
    titleBn: 'গরম ধোঁয়া ওঠা সাদা ভাত ও ডাল',
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'g6',
    category: 'chicken',
    categoryBn: 'মুরগি',
    title: 'Flavorful Tender Chicken Gravy',
    titleBn: 'সুস্বাদু ঘরোয়া চিকেন কারি',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'g7',
    category: 'vegetables',
    categoryBn: 'সবজি',
    title: 'Traditional Seasonal Vegetables',
    titleBn: 'তাজা রঙিন দেশি সবজি',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'g8',
    category: 'snacks',
    categoryBn: 'নাস্তা',
    title: 'Crispy Street-Side Evening Snacks',
    titleBn: 'গরম মুচমুচে সন্ধ্যার নাস্তা',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'g9',
    category: 'desserts',
    categoryBn: 'মিষ্টি',
    title: 'Sweet Delicacies to Complete the Meal',
    titleBn: 'ভোজন শেষে ঐতিহ্যবাহী মিষ্টি',
    image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'g10',
    category: 'atmosphere',
    categoryBn: 'রেস্তোরাঁর পরিবেশ',
    title: 'Chattogram Street-Side Warmth & Hospitality',
    titleBn: 'চট্টগ্রামের আন্তরিক আতিথেয়তা ও রঙিন আবহ',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80'
  }
];

export const GALLERY_CATEGORIES = [
  { id: 'all', name: 'All Photos', nameBn: 'সব ছবি' },
  { id: 'atmosphere', name: 'Restaurant Atmosphere', nameBn: 'রেস্তোরাঁর পরিবেশ' },
  { id: 'bhorta', name: 'Bhorta', nameBn: 'ভর্তা' },
  { id: 'rice', name: 'Rice', nameBn: 'ভাত' },
  { id: 'beef', name: 'Beef', nameBn: 'গরুর মাংস' },
  { id: 'chicken', name: 'Chicken', nameBn: 'মুরগি' },
  { id: 'fish', name: 'Fish', nameBn: 'মাছ' },
  { id: 'vegetables', name: 'Vegetables', nameBn: 'সবজি' },
  { id: 'snacks', name: 'Snacks', nameBn: 'স্ন্যাক্স' },
  { id: 'desserts', name: 'Desserts', nameBn: 'ডেজার্ট' }
];
