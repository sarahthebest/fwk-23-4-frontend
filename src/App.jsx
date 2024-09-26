import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { LoginForm, RegisterForm } from '@sarahthebest/fwk-23-4-components';
import ToDoPage from './pages/ToDoPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<ToDoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
