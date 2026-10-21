import { contacts } from '../data/portfolio.json';
import ContactItemList from '../components/ContactItemList';
export default function Contact() {
  return (
    <section className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">Say hello</p>
        <h1>Get in touch</h1>
      </header>
      <ContactItemList items={contacts} />
    </section>
  );
}
