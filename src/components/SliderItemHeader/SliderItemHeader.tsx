import styles from "./SliderItemHeader.module.css";
import useSliderItemHeader from "./useSliderItemHeader.ts";
type SliderItemHeaderProps = {
  HeaderText: string;
};
const SliderItemHeader = ({ HeaderText }: SliderItemHeaderProps) => {
  const {} = useSliderItemHeader();
  return <h1>{HeaderText}</h1>;
};

export default SliderItemHeader;
