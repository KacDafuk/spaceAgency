import styles from "./CrewMember.module.css";
import { SliderFunctions } from "../../../sharedTypes/sharedSlider";
import { CrewMemberData } from "../../../sharedTypes/sharedCrew";
import SliderBtns from "../../../components/SliderBtns/SliderBtns";
import { Crew } from "../../../sharedTypes/sharedCrew";
type CrewMemberProps = {
  CrewMember: CrewMemberData;
  SliderFunctions: SliderFunctions;
  memberIdx: number;
  CrewData: Crew;
};

const CrewMember = ({
  CrewMember: { name, position, imageSrc, description },
  SliderFunctions: { getClickedSlide, getNextSlide, getPrevSlide },
  memberIdx,
  CrewData,
}: CrewMemberProps) => {
  console.log(name, description, "TEST");
  return (
    <article className={styles.crewMemberWrapper}>
      <SliderBtns getNextSlide={getNextSlide} getPrevSlide={getPrevSlide} />
      <article className={styles.crewMember}>
        <section className={styles.crewMemberInfo}>
          <h3 className={styles.crewMemberPosition}>{position}</h3>
          <h2 className={styles.crewMemberName}>{name}</h2>
          <p className={styles.crewMemberDescription}>{description}</p>
          <ul className={styles.crewNavigation}>
            {CrewData.map((data, itemIdx) => (
              <li
                className={`${styles.sliderNavigationBtn} ${
                  memberIdx === itemIdx && styles.sliderNavigationBtnActive
                }`}
                onClick={() => getClickedSlide(itemIdx)}
              />
            ))}
          </ul>
        </section>
        <section
          className={styles.crewMemberImage}
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      </article>
    </article>
  );
};

export default CrewMember;
