// App.jsx
import React from 'react';
import './App.css';

function App() {

  const folds = 5;

  const panoramas = [
    'https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBhbm9yYW1hfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1519113617265-336e60587f81?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHBhbm9yYW1hfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1499336315816-097655dcfbda?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHBhbm9yYW1hc3xlbnwwfHwwfHx8MA%3D%3D'
  ]

  return (
    <div className="App">


      {panoramas.map((pano) => (
        <div className='scrunchContainer'>
          <div className="card-container">
            {Array.from({ length: folds }).map((_, index) => (
              <div
                key={index}
                className="fold"
                style={{
                  backgroundPosition: `${(index / (folds - 1)) * 100}%`,
                  backgroundImage: `url(${pano})`
                }}
              />
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}

export default App;
