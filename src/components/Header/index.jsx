import { Link, useLocation } from 'react-router-dom';

import LogoKdesktop from '../../assets/images/logoKDesktop.svg';
import LogoMaisonDesktop from '../../assets/images/logoMaisonDesktop.svg';
import LogoSDesktop from '../../assets/images/logoSDesktop.svg';
import LogoADesktop from '../../assets/images/logoADesktop.svg';

import LogoKmobile from '../../assets/images/logoKmobile.svg';
import LogoMaisonmobile from '../../assets/images/logoMaisonmobile.svg';
import LogoSmobile from '../../assets/images/logoSmobile.svg';
import LogoAmobile from '../../assets/images/logoAmobile.svg';

export default function Header() {
  const location = useLocation();
  return (
    <div className="headerWrapper">
      <div className="headerWrapper__desktopLogoWrapper">
        <img src={LogoKdesktop} alt="logoKasa" />
        <img src={LogoMaisonDesktop} alt="logoKasa" />
        <img src={LogoSDesktop} alt="logoKasa" />
        <img src={LogoADesktop} alt="logoKasa" />
      </div>
      <div className="headerWrapper__mobileLogoWrapper">
        <img src={LogoKmobile} alt="logoKasa" />
        <img src={LogoMaisonmobile} alt="logoKasa" />
        <img src={LogoSmobile} alt="logoKasa" />
        <img src={LogoAmobile} alt="logoKasa" />
      </div>
      <nav className="headerWrapper__navWrapper">
        <Link
          style={{
            textDecoration: location.pathname === '/' ? 'underline' : 'none',
          }}
          to="/"
        >
          Accueil
        </Link>
        <Link
          style={{
            textDecoration:
              location.pathname === '/About/' ? 'underline' : 'none',
          }}
          to="/About/"
        >
          A Propos
        </Link>
      </nav>
    </div>
  );
}
