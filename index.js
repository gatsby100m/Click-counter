mkdir -p src
cat > src/index.js <<'EOF'
imp
ort { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
EOF
