import React, { useState } from 'react';
import { AdminNavbar } from '../../components/admin/AdminNavbar';
import { MenuItemForm } from '../../components/admin/MenuItemForm';
import { MenuItem } from '../../utils/types';
import { store } from '../../utils/store';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';

export function MenuManagement() {
  const [items, setItems] = useState<MenuItem[]>(store.getMenuItems());
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

  const handleSubmit = (item: Omit<MenuItem, 'id'>) => {
    if (editingItem) {
      const updated = store.updateMenuItem(editingItem.id, { ...item, id: editingItem.id });
      setItems(store.getMenuItems());
      setEditingItem(null);
    } else {
      const newItem = store.addMenuItem({ ...item, id: Date.now().toString() });
      setItems(store.getMenuItems());
    }
    setIsFormOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      store.deleteMenuItem(id);
      setItems(store.getMenuItems());
    }
  };

  return (
    <div className="min-h-screen gradient-bg">
      <AdminNavbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white neon-text">Menu Management</h1>
          <button
            onClick={() => {
              setEditingItem(null);
              setIsFormOpen(true);
            }}
            className="flex items-center px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            Add Item
          </button>
        </div>

        {isFormOpen && (
          <div className="mb-8 bg-[#1a0426] p-6 rounded-lg border border-pink-500/20">
            <h2 className="text-xl font-semibold text-white mb-4">
              {editingItem ? 'Edit Item' : 'Add New Item'}
            </h2>
            <MenuItemForm
              item={editingItem || undefined}
              categories={['cocktails', 'wine', 'beer', 'snacks']}
              onSubmit={handleSubmit}
              onCancel={() => {
                setIsFormOpen(false);
                setEditingItem(null);
              }}
            />
          </div>
        )}

        <div className="grid gap-6">
          {items.map(item => (
            <div
              key={item.id}
              className="bg-[#1a0426] p-6 rounded-lg border border-pink-500/20 flex justify-between items-start"
            >
              <div>
                <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                <p className="text-gray-400 mt-1">{item.description}</p>
                <p className="text-pink-500 mt-2">{item.price}</p>
                <span className="text-gray-500 text-sm mt-1 block">{item.category}</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setEditingItem(item);
                    setIsFormOpen(true);
                  }}
                  className="p-2 text-gray-300 hover:text-pink-500"
                >
                  <Pencil className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 text-gray-300 hover:text-pink-500"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}