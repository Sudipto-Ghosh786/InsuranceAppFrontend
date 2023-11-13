import React from 'react'

export default function PolicyCard({ title, description, imageUrl }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          {imageUrl && (
            <img
              className="w-full h-32 object-cover"
              src={imageUrl}
              alt={title}
            />
          )}
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>
        </div>
      );
}
