import React, { useState } from 'react';
import { AdminNavbar } from '../../components/admin/AdminNavbar';
import { CategoryForm } from '../../components/admin/CategoryForm';
import { CategoryList } from '../../components/admin/CategoryList';
import { useCategories } from '../../utils/hooks/useCategories';
import { store } from '../../utils/store';
import { Category } from '../../utils/types';
import { PlusCircle, Wine, Calendar } from 'lucide-react';

export function CategoryManagement() {
  const categories = useCategories();
  const [isEditing, setIsEditing] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const handleSubmit = (categoryData: Omit<Category, 'id'>) => {
    if (editingCategory) {
      store.updateCategory(editingCategory.id, { ...categoryData, id: editingCategory.id });
    } else {
      store.addCategory({ ...categoryData, id: Date.now().toString() });
    }
    setIsEditing(false);
    setEditingCategory(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this category?')) {
      store.deleteCategory(id);
    }
  };

  const drinkCategories = categories.filter(cat => cat.type === 'drink');
  const eventCategories = categories.filter(cat => cat.type === 'event');

  return (
    <div className="min-h-screen gradient-bg">
      <AdminNavbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white neon-text">Category Management</h1>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              Add Category
            </button>
          )}
        </div>

        {isEditing && (
          <div className="mb-8">
            <CategoryForm
              category={editingCategory || undefined}
              onSubmit={handleSubmit}
              onCancel={() => {
                setIsEditing(false);
                setEditingCategory(null);
              }}
            />
          </div>
        )}

        <div className="space-y-8">
          <div>
            <div className="flex items-center mb-4">
              <Wine className="h-5 w-5 text-pink-500 mr-2" />
              <h2 className="text-xl font-semibold text-white">Drink Categories</h2>
            </div>
            <CategoryList
              categories={drinkCategories}
              onEdit={(category) => {
                setEditingCategory(category);
                setIsEditing(true);
              }}
              onDelete={handleDelete}
            />
          </div>

          <div>
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-pink-500 mr-2" />
              <h2 className="text-xl font-semibold text-white">Event Categories</h2>
            </div>
            <CategoryList
              categories={eventCategories}
              onEdit={(category) => {
                setEditingCategory(category);
                setIsEditing(true);
              }}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}