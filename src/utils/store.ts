import { MenuItem, Event, Category } from './types';

// Initialize with some default menu items
const defaultMenuItems: MenuItem[] = [
  {
    id: '1',
    name: "Pink Paradise",
    description: "Vodka, strawberry liqueur, rose water, prosecco",
    price: "$16",
    category: "cocktails"
  },
  {
    id: '2',
    name: "Neon Dreams",
    description: "Gin, elderflower, butterfly pea flower, citrus",
    price: "$15",
    category: "cocktails"
  },
  {
    id: '3',
    name: "Retro Fizz",
    description: "Japanese whiskey, yuzu, honey, soda",
    price: "$16",
    category: "cocktails"
  },
  {
    id: '4',
    name: "Electric Avenue",
    description: "Tequila, dragonfruit, lime, agave, pink salt",
    price: "$14",
    category: "cocktails"
  }
];

// Initialize with some default events
const defaultEvents: Event[] = [
  {
    id: '1',
    title: "Synthwave Night",
    description: "Live retro electronic music",
    schedule: "Every Thursday",
    icon: "music",
    category: "music"
  },
  {
    id: '2',
    title: "Karaoke Night",
    description: "Sing your favorite retro hits",
    schedule: "Every Tuesday",
    icon: "mic",
    category: "entertainment"
  },
  {
    id: '3',
    title: "Neon Mixology",
    description: "Create glowing cocktails",
    schedule: "First Saturday Monthly",
    icon: "wine",
    category: "workshop"
  }
];

// Initialize with default categories
const defaultCategories: Category[] = [
  { id: '1', name: 'Cocktails', type: 'drink' },
  { id: '2', name: 'Wine', type: 'drink' },
  { id: '3', name: 'Beer', type: 'drink' },
  { id: '4', name: 'Soft Drinks', type: 'drink' },
  { id: '5', name: 'Music', type: 'event' },
  { id: '6', name: 'Entertainment', type: 'event' },
  { id: '7', name: 'Workshop', type: 'event' }
];

// Use localStorage to persist data
const loadData = <T>(key: string, defaultData: T[]): T[] => {
  const stored = localStorage.getItem(key);
  if (stored) {
    return JSON.parse(stored);
  }
  localStorage.setItem(key, JSON.stringify(defaultData));
  return defaultData;
};

const saveData = <T>(key: string, data: T[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Initialize data
let menuItems = loadData<MenuItem>('menuItems', defaultMenuItems);
let events = loadData<Event>('events', defaultEvents);
let categories = loadData<Category>('categories', defaultCategories);

export const store = {
  // Menu Items
  getMenuItems: () => [...menuItems],
  addMenuItem: (item: MenuItem) => {
    menuItems.push(item);
    saveData('menuItems', menuItems);
    return item;
  },
  updateMenuItem: (id: string, item: MenuItem) => {
    menuItems = menuItems.map(i => i.id === id ? item : i);
    saveData('menuItems', menuItems);
    return item;
  },
  deleteMenuItem: (id: string) => {
    menuItems = menuItems.filter(i => i.id !== id);
    saveData('menuItems', menuItems);
  },

  // Events
  getEvents: () => [...events],
  addEvent: (event: Event) => {
    events.push(event);
    saveData('events', events);
    return event;
  },
  updateEvent: (id: string, event: Event) => {
    events = events.map(e => e.id === id ? event : e);
    saveData('events', events);
    return event;
  },
  deleteEvent: (id: string) => {
    events = events.filter(e => e.id !== id);
    saveData('events', events);
  },

  // Categories
  getCategories: () => [...categories],
  getDrinkCategories: () => categories.filter(c => c.type === 'drink'),
  getEventCategories: () => categories.filter(c => c.type === 'event'),
  addCategory: (category: Category) => {
    categories.push(category);
    saveData('categories', categories);
    return category;
  },
  updateCategory: (id: string, category: Category) => {
    categories = categories.map(c => c.id === id ? category : c);
    saveData('categories', categories);
    return category;
  },
  deleteCategory: (id: string) => {
    categories = categories.filter(c => c.id !== id);
    saveData('categories', categories);
  }
};