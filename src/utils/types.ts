export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  schedule: string;
  icon: 'music' | 'mic' | 'wine';
  category: string;
}

export interface Category {
  id: string;
  name: string;
  type: 'drink' | 'event';
}