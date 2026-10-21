import ContactItem from './ContactItem';
export default function ContactItemList({ items }) {
  return (
    <div className="contact-list">
      {items.map((item) => (
        <ContactItem key={item.id} item={item} />
      ))}
    </div>
  );
}
