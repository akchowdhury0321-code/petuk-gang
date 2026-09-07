import { OfferItem, ReviewItem } from '../types';

export const OFFERS_DATA: OfferItem[] = [
  {
    id: 'offer-1',
    title: 'Petuk Combo Value Box',
    titleBn: 'পেটুক কম্বো ভ্যালু বক্স',
    tag: 'Petuk Deal #1',
    tagBn: 'পেটুক ডিল ১',
    description: 'Special offer coming soon. Check back shortly for our limited-time dining specials.',
    descriptionBn: 'স্পেশাল অফার খুব শীঘ্রই আসছে। আমাদের নতুন ডিল জানতে সাথে থাকুন।'
  },
  {
    id: 'offer-2',
    title: 'Student & Youth Feast Pack',
    titleBn: 'স্টুডেন্ট অ্যান্ড ইয়ুথ ফিস্ট প্যাক',
    tag: 'Petuk Deal #2',
    tagBn: 'পেটুক ডিল ২',
    description: 'Special offer coming soon. Fresh deals tailored for groups and hearty appetites.',
    descriptionBn: 'স্পেশাল অফার খুব শীঘ্রই আসছে। আড্ডা ও ভরপেট খাবারের জন্য আকর্ষণীয় আয়োজন।'
  },
  {
    id: 'offer-3',
    title: 'Weekend Traditional Spread',
    titleBn: 'উইকেন্ড ট্র্যাডিশনাল স্প্রেড',
    tag: 'Petuk Deal #3',
    tagBn: 'পেটুক ডিল ৩',
    description: 'Special offer coming soon. Our special celebratory weekend combos.',
    descriptionBn: 'স্পেশাল অফার খুব শীঘ্রই আসছে। ছুটির দিনের বিশেষ আয়োজনের সাথে।'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Patharghata Food Lover',
    rating: 5,
    tag: 'Dine-In Customer',
    text: 'Customer review will appear here.',
    textBn: 'গ্রাহকের রিভিউ এখানে প্রদর্শিত হবে।'
  },
  {
    id: 'rev-2',
    author: 'Local Petuk Member',
    rating: 5,
    tag: 'Frequent Visitor',
    text: 'Customer review will appear here.',
    textBn: 'গ্রাহকের রিভিউ এখানে প্রদর্শিত হবে।'
  },
  {
    id: 'rev-3',
    author: 'Chattogram Food Explorer',
    rating: 5,
    tag: 'Delivery Order',
    text: 'Customer review will appear here.',
    textBn: 'গ্রাহকের রিভিউ এখানে প্রদর্শিত হবে।'
  }
];
