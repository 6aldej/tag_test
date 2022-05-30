import Logo from 'Assets/Img/logo.png';
import Loader from 'UI/Loader';
import styles from './Header.module.css';

export function Header({ loading }:{ loading:boolean }) {
  return (
    <header className={styles.header}>
      <img
        src={Logo}
        alt="Business&Decision logo"
      />

      {
        loading && (
          <Loader />
        )
      }
    </header>
  );
}
