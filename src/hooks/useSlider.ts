import React, { useState } from "react";

const useSlider = (sliderItemsCount: number) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  function getNextSlide() {
    if (sliderPosition - 1 === -sliderItemsCount) return;
    setSliderPosition((prevSliderPos) => prevSliderPos - 1);
  }
  function getPrevSlide() {
    if (sliderPosition === 0) return;
    setSliderPosition((prevSliderPos) => prevSliderPos + 1);
  }
  function getClickedSlide(itemIdx: number) {
    setSliderPosition(-itemIdx);
  }
  return { sliderPosition, getNextSlide, getPrevSlide, getClickedSlide };
};

export default useSlider;
