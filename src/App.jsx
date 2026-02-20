import { Routes, Route } from 'react-router-dom';
import Landing from './landing_page/landing';
import About from './about/about';
import Blog from './blog/blog';
import Contact from './contact/contact';
import Donate from './donate/donate';
import Volunteer from './volunteer/volunteer';
import Login from './onboarding/login/login';
import Signup from './onboarding/signup/signup';
import Project from './project/project';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;