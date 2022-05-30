import ReactDOM from 'react-dom/client';
import './index.css';
import 'moment/locale/ru';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<App />);
