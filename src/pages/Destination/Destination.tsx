import styles from "./Destination.module.css";
import Planet from "./Planet/Planet";
import europaSrc from "../../assets/destination/image-europa.png";
import moonSrc from "../../assets/destination/image-moon.png";
import marsSrc from "../../assets/destination/image-mars.png";
import titanSrc from "../../assets/destination/image-titan.png";
import { PlanetData } from "../../sharedTypes/sharedPlanet";
import useSlider from "../../hooks/useSlider";
const PLANETS_DATA: PlanetData[] = [
  {
    name: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    travelTime: "3 DAYS",
    distance: "384,400 km",
    imageSrc: moonSrc,
  },
  {
    name: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    travelTime: "9 MONTHS",
    distance: "255 MIL. KM",
    imageSrc: marsSrc,
  },
  {
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    travelTime: "3 YEARS",
    distance: "628 MIL. KM",
    imageSrc: europaSrc,
  },
  {
    name: "TITAN",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    travelTime: "6 YEARS",
    distance: "1.6 BIL. KM",
    imageSrc: titanSrc,
  },
];
export const PLANET_LIST = PLANETS_DATA.map((planet) => planet.name);
const Destination = () => {
  const { sliderPosition, getNextSlide, getPrevSlide, getClickedSlide } =
    useSlider(PLANET_LIST.length);
  return (
    <main
      className={styles.planetsSlider}
      style={{ left: `${sliderPosition * 100}%` }}
    >
      {PLANETS_DATA.map((planet, idx) => (
        <Planet
          Planet={{ ...planet }}
          key={planet.name}
          SliderFunctions={{ getPrevSlide, getClickedSlide, getNextSlide }}
          planetIdx={idx}
        />
      ))}
    </main>
  );
};

export default Destination;
