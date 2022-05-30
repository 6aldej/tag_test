import Paper from 'UI/Paper';

import styles from './TableFilter.module.css';

export function TableFilter(
  {
    value, setValue, numbers, resetCounter,
  } :
  { value:string,
    setValue: Function,
    numbers: {
      active_number: string | number | null,
      read_number: string | number | null,
      read_per_min: string | number | null,
    }
    resetCounter: Function
  },
) {
  function changeValue(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <Paper>
        <div className={styles.board_wrapper}>
          <div className={styles.table_filter}>
            <div className={styles.radio_inputs}>
              <label htmlFor="read_tag">
                <input
                  type="radio"
                  name="radio"
                  value="read_table"
                  id="read_tag"
                  checked={value === 'read_table'}
                  onChange={changeValue}
                />
                Считанные метки
              </label>
              <label htmlFor="active_tag">
                <input
                  type="radio"
                  name="radio"
                  value="active_table"
                  id="active_tag"
                  checked={value === 'active_table'}
                  onChange={changeValue}
                />
                Активные метки
              </label>
              <label
                htmlFor="unique_tag"
              >
                <input
                  type="radio"
                  name="radio"
                  value="uniq_table"
                  id="unique_tag"
                  checked={value === 'uniq_table'}
                  onChange={changeValue}
                />
                Уникальные метки
              </label>
            </div>
            <button
              type="button"
              className={styles.button_reset_counter}
              onClick={() => resetCounter()}
            >
              Сброс счетчика
            </button>
          </div>
          <div className={styles.board_info}>
            <p>
              Активных меток:
              {' '}
              <span>{numbers?.active_number}</span>
            </p>
            <p>
              Меток считано:
              {' '}
              <span>{numbers?.read_number}</span>
            </p>
            <p>
              Меток считывается в минуту:
              {' '}
              <span>{numbers?.read_per_min}</span>
            </p>
          </div>
        </div>

      </Paper>
    </div>
  );
}
