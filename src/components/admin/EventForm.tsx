import React from 'react';
import { Event } from '../../utils/types';

interface EventFormProps {
  event?: Event;
  onSubmit: (event: Omit<Event, 'id'>) => void;
  onCancel: () => void;
}

export function EventForm({ event, onSubmit, onCancel }: EventFormProps) {
  const [formData, setFormData] = React.useState({
    title: event?.title || '',
    description: event?.description || '',
    schedule: event?.schedule || '',
    icon: event?.icon || 'music'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-300 mb-2">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })}
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
        <label className="block text-gray-300 mb-2">Schedule</label>
        <input
          type="text"
          value={formData.schedule}
          onChange={e => setFormData({ ...formData, schedule: e.target.value })}
          className="w-full bg-[#0f0014] border border-pink-500/20 rounded p-2 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Icon</label>
        <select
          value={formData.icon}
          onChange={e => setFormData({ ...formData, icon: e.target.value as Event['icon'] })}
          className="w-full bg-[#0f0014] border border-pink-500/20 rounded p-2 text-white"
          required
        >
          <option value="music">Music</option>
          <option value="mic">Microphone</option>
          <option value="wine">Wine</option>
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
          {event ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  );
}