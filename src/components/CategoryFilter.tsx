import React from 'react';
import { useCategories } from '../utils/hooks/useCategories';

interface CategoryFilterProps {
  type: 'drink' | 'event';
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ type, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories = useCategories(type);

  return (
    <div className="flex space-x-4 mb-8">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-full transition-colors ${
          selectedCategory === 'all'
            ? 'bg-pink-500 text-white'
            : 'border border-pink-500/20 text-gray-300 hover:border-pink-500'
        }`}
      >
        All
      </button>
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.name.toLowerCase())}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedCategory === category.name.toLowerCase()
              ? 'bg-pink-500 text-white'
              : 'border border-pink-500/20 text-gray-300 hover:border-pink-500'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}