export type StoreStatus = 'pending' | 'approved' | 'rejected';

export interface Store {
  id: string;
  name: string;
  ownerName: string;
  email: string;
  phone: string;
  description: string;
  category: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  website?: string;
  registrationDate: string;
  status: StoreStatus;
  revenue?: number;
  productsCount?: number;
  logo?: string;
}

export interface StoreStats {
  totalStores: number;
  pendingApplications: number;
  approvedStores: number;
  rejectedStores: number;
  totalRevenue: number;
  totalProducts: number;
}
