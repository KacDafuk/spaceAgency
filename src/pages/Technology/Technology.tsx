import React, { useState } from "react";
import styles from "./Technology.module.css";
import {
  Technologies,
  Technology as TechnologyType,
} from "../../sharedTypes/sharedTechnology";
import TechnologyItem from "./TechnologyItem/TechnologyItem";
const TECHNOLOGY_DATA: Technologies = [
  {
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "SPACE PORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
const Technology = () => {
  const [curTechnologyIdx, setCurTechnologyIdx] = useState(0);
  function getCurrentTechnology() {
    return TECHNOLOGY_DATA.find(
      (item, idx) => idx === curTechnologyIdx
    ) as TechnologyType;
  }
  return (
    <main className={styles.technologyList}>
      <TechnologyItem
        technology={getCurrentTechnology()}
        data={TECHNOLOGY_DATA}
        itemIdx={curTechnologyIdx}
        setCurTechnologyIdx={setCurTechnologyIdx}
      />
    </main>
  );
};

export default Technology;
