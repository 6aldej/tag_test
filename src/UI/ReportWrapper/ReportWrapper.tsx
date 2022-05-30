import Paper from 'UI/Paper';
import styles from './ReportWrapper.module.css';

export function ReportWrapper({ onClose, children }:
{ onClose: Function, children: React.ReactNode }) {
  return (
    <div className={styles.report_wrapper}>
      <Paper>
        <button
          type="button"
          onClick={() => onClose()}
          className={styles.button_close_board}
        >
          &times;
        </button>
        <div className={styles.report_wrapper_main}>
          {children}
        </div>
      </Paper>
    </div>
  );
}
