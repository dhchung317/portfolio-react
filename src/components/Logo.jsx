import logo from '../img/logo_small.png';
import underline from '../img/logo_small_under.png';
export default function Logo() {
  return (
    <div className="logo-container" aria-hidden="true">
      <img className="logo-underline" src={underline} alt="" />
      <img className="logo-art" src={logo} alt="" />
    </div>
  );
}
