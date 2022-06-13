import styles from "./TechnologyItem.module.css";
import useTechnologyItem from "./useTechnologyItem.ts";
import {
  Technology,
  Technologies,
} from ".././../../sharedTypes/sharedTechnology";
type TechnologyItemProps = {
  technology: Technology;
  data: Technologies;
  itemIdx: number;
  setCurTechnologyIdx: React.Dispatch<React.SetStateAction<number>>;
};
const TechnologyItem = ({
  technology: { name, description },
  data,
  itemIdx,
  setCurTechnologyIdx,
}: TechnologyItemProps) => {
  return (
    <article className={styles.technologyItem}>
      <section className={styles.technologyInfo}>
        <ul className={styles.technologyNavigation}>
          {data.map((item, idx) => (
            <li
              onClick={() => {
                setCurTechnologyIdx(idx);
              }}
              className={`${itemIdx === idx && styles.itemActive} ${
                styles.navigationBtn
              }`}
            >
              {idx + 1}
            </li>
          ))}
        </ul>
        <section className={styles.technologyText}>
          <h2 className={styles.technologyHeader}>
            The terminology <span>{name}</span>
          </h2>
          <p className={styles.technologyDescription}>{description}</p>
        </section>
      </section>
      <section className={styles.technologyImage} data-technology={name} />
    </article>
  );
};

export default TechnologyItem;
