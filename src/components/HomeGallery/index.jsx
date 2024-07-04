import { Link } from 'react-router-dom';
import Logements from '../../assets/json/logements.json';
import homeGallery__banner from '../../assets/images/main__banner.png';

export default function HomeGallery() {
  return (
    <div className="homeGallery">
      <section
        className="homeGallery__banner"
        style={{ backgroundImage: `url(${homeGallery__banner})` }}
      >
        <h1 className="homeGallery__banner_title">
          Chez vous, partout et ailleurs
        </h1>
      </section>
      <div className="homeGallery__gallery">
        {Logements.map((logement) => (
          <div key={logement.id} className="card">
            <Link to={`/location/${logement.id}`}>
              <img src={logement.cover} alt={logement.title} />
              <h2>{logement.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
