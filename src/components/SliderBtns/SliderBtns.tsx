import styles from "./SliderBtns.module.css";
import useSliderBtns from "./useSliderBtns.ts";
import { SliderNextPrevActions } from "../../sharedTypes/sharedSlider";
const SliderBtns = ({ getNextSlide, getPrevSlide }: SliderNextPrevActions) => {
  const {} = useSliderBtns();
  return (
    <>
      <i
        className={`fa-solid fa-arrow-left ${styles.sliderBtnPrev}`}
        onClick={getPrevSlide}
      />
      ;
      <i
        className={`fa-solid fa-arrow-right ${styles.sliderBtnNext}`}
        onClick={getNextSlide}
      />
    </>
  );
};

export default SliderBtns;
