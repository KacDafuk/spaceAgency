import styles from "./Loading.module.css";
import useLoading from "./useLoading.ts";
const Loading = ({ isLoading }: { isLoading: boolean }) => {
  const {} = useLoading();

  return (
    <>
      {isLoading ? (
        <div className={styles.loadingWrapper}>
          <div className={styles.loading} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loading;
