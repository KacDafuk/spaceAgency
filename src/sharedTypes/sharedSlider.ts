export type SliderNextPrevActions = {
  getNextSlide: () => void;
  getPrevSlide: () => void;
};
export type SliderFunctions = {
  getClickedSlide: (itemIdx: number) => void;
} & SliderNextPrevActions;
