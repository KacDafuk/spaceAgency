import styles from "./Crew.module.css";
import douglasSrc from "../../assets/crew/image-douglas-hurley.png";
import shuttleworthSrc from "../../assets/crew/image-mark-shuttleworth.png";
import gloverSrc from "../../assets/crew/image-victor-glover.png";
import ansariSrc from "../../assets/crew/image-anousheh-ansari.png";
import { Crew as CrewData } from "../../sharedTypes/sharedCrew";
import CrewMember from "./CrewMember/CrewMember";
import useSlider from "../../hooks/useSlider";
const CREW_DATA: CrewData = [
  {
    name: "Douglas Hurley",
    position: "COMMANDER",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    imageSrc: douglasSrc,
  },
  {
    name: "Mark shuttleworth",
    position: "MISSION SPECIALIST",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    imageSrc: shuttleworthSrc,
  },
  {
    name: "VICTOR GLOVER",
    position: "PILOT",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    imageSrc: gloverSrc,
  },
  {
    name: "ANOUSHEH ANSARI",
    position: "FLIGHT ENGINNER",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    imageSrc: ansariSrc,
  },
];

const Crew = () => {
  const { getNextSlide, getPrevSlide, getClickedSlide, sliderPosition } =
    useSlider(CREW_DATA.length);
  return (
    <main
      className={styles.crewSlider}
      style={{ left: `${sliderPosition * 100}%` }}
    >
      {CREW_DATA.map((crewMember, idx) => (
        <CrewMember
          CrewMember={crewMember}
          SliderFunctions={{ getNextSlide, getPrevSlide, getClickedSlide }}
          memberIdx={idx}
          CrewData={CREW_DATA}
        />
      ))}
    </main>
  );
};

export default Crew;
