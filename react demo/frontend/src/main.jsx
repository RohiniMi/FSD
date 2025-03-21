import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Counter from './Counter.jsx';

const root1 = ReactDOM.createRoot(document.getElementById('root'));
root1.render(<App/>);

// const root2 = ReactDOM.createRoot(document.getElementById('login'));
// root2.render(<Counter/>);

// createRoot(document.getElementById('root')).render(<Counter/>);
// createRoot(document.getElementById('login')).render(<Counter></Counter>);
