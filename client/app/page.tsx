// @ts-nocheck
// app/page.tsx
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/projects';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
