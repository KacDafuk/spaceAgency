import styles from "./Planet.module.css";
import { PlanetData } from "../../../sharedTypes/sharedPlanet";
import { PLANET_LIST } from "../Destination";
import { SliderFunctions } from "../../../sharedTypes/sharedSlider";
import SliderBtns from "../../../components/SliderBtns/SliderBtns";
type PlanetProps = {
  Planet: PlanetData;
  SliderFunctions: SliderFunctions;
  planetIdx: number;
};

const Planet = ({
  Planet: { description, name, travelTime, distance, imageSrc },
  SliderFunctions: { getPrevSlide, getNextSlide, getClickedSlide },
  planetIdx,
}: PlanetProps) => {
  return (
    <article className={styles.planetWrapper}>
      <SliderBtns getNextSlide={getNextSlide} getPrevSlide={getPrevSlide} />
      <article className={styles.planet}>
        <section className={styles.imageWrapper}>
          <section
            className={styles.planetImage}
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
        </section>

        <section className={styles.planetAbout}>
          <ul className={styles.planetList}>
            {PLANET_LIST.map((planetName, itemIdx) => (
              <li
                onClick={() => getClickedSlide(itemIdx)}
                className={planetIdx === itemIdx && styles.activePlanet}
              >
                {planetName}
              </li>
            ))}
          </ul>
          <h2 className={styles.planetHeader}>{name}</h2>
          <p className={styles.planetDescription}>{description}</p>
          <ul className={styles.planetInfoList}>
            <li>
              <div>AVG. DISTANCE</div>
              <div>{distance}</div>
            </li>
            <li>
              <div>EST. TRAVEL TIME</div>
              <div>{travelTime}</div>
            </li>
          </ul>
        </section>
      </article>
    </article>
  );
};

export default Planet;
