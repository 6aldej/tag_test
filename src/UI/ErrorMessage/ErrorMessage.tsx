import styles from './ErrorMessage.module.css';

export function ErrorMessage({ error }:{ error:string }) {
  return (
    <div className={styles.error_message_wrapper}>
      <h1>{error}</h1>
      <button
        type="button"
        onClick={() => window.location.reload()}
      >
        Обновить страницу
      </button>
    </div>
  );
}
