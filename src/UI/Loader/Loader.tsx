import LoaderIcon from 'Assets/Img/loader.svg';
import styles from './Loader.module.css';

export function Loader() {
  return (
    <div className={styles.lds_roller}>
      <img
        alt="loader"
        src={LoaderIcon}
      />
    </div>
  );
}
