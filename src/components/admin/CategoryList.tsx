import React from 'react';
import { Category } from '../../utils/types';
import { Pencil, Trash2 } from 'lucide-react';

interface CategoryListProps {
  categories: Category[];
  onEdit: (category: Category) => void;
  onDelete: (id: string) => void;
}

export function CategoryList({ categories, onEdit, onDelete }: CategoryListProps) {
  return (
    <div className="grid gap-4">
      {categories.map(category => (
        <div
          key={category.id}
          className="bg-[#1a0426] p-6 rounded-lg border border-pink-500/20 flex justify-between items-center"
        >
          <span className="text-xl text-white">{category.name}</span>
          <div className="flex space-x-2">
            <button
              onClick={() => onEdit(category)}
              className="p-2 text-gray-300 hover:text-pink-500"
            >
              <Pencil className="h-5 w-5" />
            </button>
            <button
              onClick={() => onDelete(category.id)}
              className="p-2 text-gray-300 hover:text-pink-500"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}