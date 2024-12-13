import React from 'react';
import { MenuItem } from '../../utils/types';

interface MenuItemFormProps {
  item?: MenuItem;
  categories: string[];
  onSubmit: (item: Omit<MenuItem, 'id'>) => void;
  onCancel: () => void;
}

export function MenuItemForm({ item, categories, onSubmit, onCancel }: MenuItemFormProps) {
  const [formData, setFormData] = React.useState({
    name: item?.name || '',
    description: item?.description || '',
    price: item?.price || '',
    category: item?.category || categories[0] || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-300 mb-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-[#0f0014] border border-pink-500/20 rounded p-2 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Description</label>
        <textarea
          value={formData.description}
          onChange={e => setFormData({ ...formData, description: e.target.value })}
          className="w-full bg-[#0f0014] border border-pink-500/20 rounded p-2 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Price</label>
        <input
          type="text"
          value={formData.price}
          onChange={e => setFormData({ ...formData, price: e.target.value })}
          className="w-full bg-[#0f0014] border border-pink-500/20 rounded p-2 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Category</label>
        <select
          value={formData.category}
          onChange={e => setFormData({ ...formData, category: e.target.value })}
          className="w-full bg-[#0f0014] border border-pink-500/20 rounded p-2 text-white"
          required
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
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
          {item ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  );
}