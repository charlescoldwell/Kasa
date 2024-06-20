import { Link } from 'react-router-dom';
import LogoKdesktop from '../../assets/images/logoKDesktop.svg';
import LogoMaisonDesktop from '../../assets/images/logoMaisonDesktop.svg';
import LogoSDesktop from '../../assets/images/logoSDesktop.svg';
import LogoADesktop from '../../assets/images/logoADesktop.svg';

export default function Header() {
  return (
    <div className="headerWrapper">
      <div className="headerWrapper__logoWrapper">
        <img src={LogoKdesktop} alt="logoKasa" />
        <img src={LogoMaisonDesktop} alt="logoKasa" />
        <img src={LogoSDesktop} alt="logoKasa" />
        <img src={LogoADesktop} alt="logoKasa" />
      </div>
      <nav className="headerWrapper__navWrapper">
        <Link to="/">Accueil</Link>
        <Link to="/About/">A Propos</Link>
      </nav>
    </div>
  );
}
