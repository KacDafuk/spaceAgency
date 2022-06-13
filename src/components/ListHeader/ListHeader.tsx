import styles from "./H1.module.css";
import useListHeader from "./useListHeader.ts";
type H1Props = {
  text: string;

  pageNumber: "01" | "02" | "03";
};
const H1 = ({ text, pageNumber }: H1Props) => {
  return <h1>{text}</h1>;
};

export default H1;
