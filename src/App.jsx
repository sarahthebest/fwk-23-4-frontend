import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { LoginForm, RegisterForm } from '@daniellaalolo/fwk-23-4-components';
import ToDoPage from './pages/ToDoPage';
import Landing from './pages/Landing';
import SettingsPage from './pages/SettingsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="dashboard" element={<ToDoPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
