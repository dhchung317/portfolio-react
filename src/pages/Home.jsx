import Logo from '../components/Logo';
import AboutMe from '../components/AboutMe';
export default function Home() {
  return (
    <section className="home-hero" aria-label="Introduction">
      <Logo />
      <AboutMe />
    </section>
  );
}
