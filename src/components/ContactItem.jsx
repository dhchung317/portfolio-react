export default function ContactItem({ item }) {
  return (
    <a
      className="contact-item"
      href={item.name === 'E-Mail' ? `mailto:${item.link}` : item.link}
    >
      <img src={item.icon} alt="" />
      <span>{item.name}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
