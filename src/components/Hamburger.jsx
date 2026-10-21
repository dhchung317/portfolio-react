import close from '../img/close.svg';
import hamburger from '../img/list.svg';

export default function Hamburger({ isOpen }) {
  return (
    <>
      <img className={isOpen ? 'close-icon' : 'hide-icon'} src={close} alt="" />
      <img
        className={!isOpen ? 'hamburger-icon' : 'hide-icon'}
        src={hamburger}
        alt=""
      />
    </>
  );
}
