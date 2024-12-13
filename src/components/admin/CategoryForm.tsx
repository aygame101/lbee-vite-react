import React from 'react';
import { Category } from '../../utils/types';

interface CategoryFormProps {
  category?: Category;
  onSubmit: (category: Omit<Category, 'id'>) => void;
  onCancel: () => void;
}

export function CategoryForm({ category, onSubmit, onCancel }: CategoryFormProps) {
  const [formData, setFormData] = React.useState({
    name: category?.name || '',
    type: category?.type || ('drink' as Category['type'])
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#1a0426] p-6 rounded-lg border border-pink-500/20">
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Category Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-[#0f0014] border border-pink-500/20 rounded p-2 text-white"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Category Type</label>
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value as Category['type'] })}
          className="w-full bg-[#0f0014] border border-pink-500/20 rounded p-2 text-white"
          required
        >
          <option value="drink">Drink</option>
          <option value="event">Event</option>
        </select>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-pink-500/20 text-gray-300 rounded hover:border-pink-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
        >
          {category ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  );
}