import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => (
  <div className="p-6 font-sans space-y-4">
    <h1 className="text-3xl font-bold text-center">🎬 SHADE Demo with TailwindCSS</h1>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      <div className="bg-gray-800 p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Sample Video 1</h2>
        <video controls className="w-full rounded">
          <source src="/public/videos/demo1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="bg-gray-800 p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Sample Video 2</h2>
        <video controls className="w-full rounded">
          <source src="/public/videos/demo2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
