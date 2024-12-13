import React, { useState } from 'react';
import { AdminNavbar } from '../../components/admin/AdminNavbar';
import { EventForm } from '../../components/admin/EventForm';
import { Event } from '../../utils/types';
import { store } from '../../utils/store';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';

export function EventManagement() {
  const [events, setEvents] = useState<Event[]>(store.getEvents());
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const handleSubmit = (event: Omit<Event, 'id'>) => {
    if (editingEvent) {
      const updated = store.updateEvent(editingEvent.id, { ...event, id: editingEvent.id });
      setEvents(store.getEvents());
      setEditingEvent(null);
    } else {
      const newEvent = store.addEvent({ ...event, id: Date.now().toString() });
      setEvents(store.getEvents());
    }
    setIsFormOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this event?')) {
      store.deleteEvent(id);
      setEvents(store.getEvents());
    }
  };

  return (
    <div className="min-h-screen gradient-bg">
      <AdminNavbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white neon-text">Event Management</h1>
          <button
            onClick={() => {
              setEditingEvent(null);
              setIsFormOpen(true);
            }}
            className="flex items-center px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            Add Event
          </button>
        </div>

        {isFormOpen && (
          <div className="mb-8 bg-[#1a0426] p-6 rounded-lg border border-pink-500/20">
            <h2 className="text-xl font-semibold text-white mb-4">
              {editingEvent ? 'Edit Event' : 'Add New Event'}
            </h2>
            <EventForm
              event={editingEvent || undefined}
              onSubmit={handleSubmit}
              onCancel={() => {
                setIsFormOpen(false);
                setEditingEvent(null);
              }}
            />
          </div>
        )}

        <div className="grid gap-6">
          {events.map(event => (
            <div
              key={event.id}
              className="bg-[#1a0426] p-6 rounded-lg border border-pink-500/20 flex justify-between items-start"
            >
              <div>
                <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                <p className="text-gray-400 mt-1">{event.description}</p>
                <p className="text-pink-500 mt-2">{event.schedule}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setEditingEvent(event);
                    setIsFormOpen(true);
                  }}
                  className="p-2 text-gray-300 hover:text-pink-500"
                >
                  <Pencil className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
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