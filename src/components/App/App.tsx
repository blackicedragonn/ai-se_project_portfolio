import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { Projects } from "../Projects/Projects";
import { Skills } from "../Skills/Skills";
import { Footer } from "../Footer/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}
