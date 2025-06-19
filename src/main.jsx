
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const App = () => (
  <div className="min-h-screen bg-gray-900 text-white p-4">
    <h1 className="text-3xl font-bold mb-6 text-center">🏐 SHADE Haikyuu Streaming</h1>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-gray-800 p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Haikyuu!! S2 - Episode 2</h2>
        <video controls className="w-full rounded-lg">
          <source src="https://archive.org/download/haikyuu-s2-dub/Haikyuu%20temporada%202/Haikyuu!!%20Second%20Season%20(Dub)%20Episode%202.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="bg-gray-800 p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Haikyuu!! S2 - Episode 3</h2>
        <video controls className="w-full rounded-lg">
          <source src="https://archive.org/download/haikyuu-s2-dub/Haikyuu%20temporada%202/Haikyuu!!%20Second%20Season%20(Dub)%20Episode%203.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
