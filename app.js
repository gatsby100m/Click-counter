cat > src/App.js <<'EOF'
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Click Counter</h1>
      <p style={{ fontSize: '3em' }}>{count}</p>
      <button 
        onClick={() => setCount(c => c + 1)}
        style={{ padding: '10px 20px', margin: '5px' }}
      >
        Increase
      </button>
      <button
        onClick={() => setCount(c => c > 0 ? c - 1 : 0)}
        style={{ 
          padding: '10px 20px', 
          margin: '5px',
          backgroundColor: count === 0 ? '#ddd' : '#ff6b6b'
        }}
        disabled={count === 0}
      >
        Decrease
      </button>
      {count >= 10 && <p style={{ color: 'red' }}>Maximum reached!</p>}
    </div>
  );
}
EOF
