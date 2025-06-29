export interface User {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'wholesaler' | 'retailer' | 'civilian' | 'admin';
  location: string;
  phone: string;
  registrationDate: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  price: number;
  wholesalePrice: number;
  governmentPrice: number;
  sellerId: string;
  sellerName: string;
  sellerType: 'farmer' | 'wholesaler';
  location: string;
  quality: 'premium' | 'standard' | 'economy';
  availableUntil: string;
  image: string;
}

export interface PriceComparison {
  productName: string;
  region: string;
  retailPrice: number;
  wholesalePrice: number;
  governmentPrice: number;
  inflationRate: number;
}

export interface Complaint {
  id: string;
  userId: string;
  uniqueId: string;
  title: string;
  description: string;
  category: 'pricing' | 'quality' | 'service' | 'fraud' | 'other';
  status: 'pending' | 'investigating' | 'resolved' | 'closed';
  createdAt: string;
}

export interface Order {
  id: string;
  buyerId: string;
  sellerId: string;
  products: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  orderType: 'bulk' | 'retail';
  createdAt: string;
}