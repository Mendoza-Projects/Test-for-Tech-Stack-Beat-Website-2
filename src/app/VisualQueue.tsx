// /VisualQueue.tsx
'use client';

import React from 'react';

type VisualQueueProps = {
  itemsCount: number;  // This prop will determine how many skeleton loaders to show
};

const VisualQueue: React.FC<VisualQueueProps> = ({ itemsCount }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: itemsCount }).map((_, index) => (
        <div key={index} className="bg-gray-300 animate-pulse h-48 rounded-lg"></div>
      ))}
    </div>
  );
};

export default VisualQueue;
