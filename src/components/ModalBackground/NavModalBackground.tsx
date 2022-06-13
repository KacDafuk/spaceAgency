import styles from "./ModalBackground.module.css";
import useModalBackground from "./useNavModalBackground";
type NavModalBackgroundProps = {
  navVisible: boolean;
};
const NavModalBackground = ({ navVisible }: NavModalBackgroundProps) => {
  return (
    <>
      {navVisible && <div className={navVisible && styles.modalBackground} />}
    </>
  );
};

export default NavModalBackground;
