import LogoKdesktopFooter from '../../assets/images/logoKDesktopFooter.svg';
import LogoMaisonDesktopFooter from '../../assets/images/logoMaisonDesktopFooter.svg';
import LogoSDesktopFooter from '../../assets/images/logoSDesktopFooter.svg';
import LogoADesktopFooter from '../../assets/images/logoADesktopFooter.svg';

export default function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footerWrapper__logoWrapper">
        <img src={LogoKdesktopFooter} alt="logoKasa" />
        <img src={LogoMaisonDesktopFooter} alt="logoKasa" />
        <img src={LogoSDesktopFooter} alt="logoKasa" />
        <img src={LogoADesktopFooter} alt="logoKasa" />
      </div>
      <p className="footerWrapper__copyright">
        © 2020 Kasa. All rights reserved
      </p>
    </div>
  );
}
