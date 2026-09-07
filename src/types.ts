export type Language = 'en' | 'bn';

export interface MenuItem {
  id: string;
  name: string;
  nameBn: string;
  price: number;
  isFree?: boolean;
  category: string;
  categoryBn: string;
  description: string;
  descriptionBn: string;
  image: string;
  badge?: string;
  badgeBn?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface OrderDetails {
  name: string;
  phone: string;
  address: string;
  specialInstructions: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedItems?: MenuItem[];
  showDirections?: boolean;
}

export interface GalleryItem {
  id: string;
  category: string;
  categoryBn: string;
  title: string;
  titleBn: string;
  image: string;
}

export interface OfferItem {
  id: string;
  title: string;
  titleBn: string;
  tag: string;
  tagBn: string;
  description: string;
  descriptionBn: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  textBn: string;
  tag: string;
}

export interface RestaurantConfig {
  restaurantName: string;
  restaurantNameBn: string;
  tagline: string;
  taglineBn: string;
  location: string;
  locationBn: string;
  fullAddress: string;
  fullAddressBn: string;
  cuisine: string;
  cuisineBn: string;
  phone: string;
  whatsappUrl: string;
  foodpandaUrl: string;
  pathaoUrl: string;
  googleMapsUrl: string;
}
