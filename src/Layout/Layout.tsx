import styles from "./Layout.module.css";
import useLayout from "./useLayout";

import Loading from "./Loading/Loading";
type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: LayoutProps) => {
  const { srcSetData, loading, layoutRef } = useLayout();
  return (
    // <div
    //   className={`${styles.layout} ${currentPageStyle}`}
    //   ref={layoutRef}
    // ></div>
    <>
      <Loading isLoading={loading} />
      <img
        ref={layoutRef}
        style={{ display: `${loading ? "none" : "inline-block"}` }}
        srcSet={srcSetData}
        className={styles.layout}
      />
    </>
  );
};

export default Layout;
