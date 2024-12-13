import { useState, useEffect } from 'react';
import { Category } from '../types';
import { store } from '../store';

export function useCategories(type?: Category['type']) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Initial load
    const loadCategories = () => {
      const allCategories = store.getCategories();
      setCategories(type ? allCategories.filter(c => c.type === type) : allCategories);
    };

    loadCategories();

    // Poll for updates
    const interval = setInterval(loadCategories, 1000);
    return () => clearInterval(interval);
  }, [type]);

  return categories;
}