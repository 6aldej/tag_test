import moment from 'moment';
import Paper from 'UI/Paper';

import styles from './Table.module.css';

export function Table(
  { setAdditionalInfo, filter, data } :
  {
    setAdditionalInfo:Function,
    filter:string
    data: {
      active_flag: string | null,
      department: string,
      holder_name: string,
      id: string,
      id_desc: string,
      rep_dttm: string,
      id_type: string,
      ver_date: string
    }[],
  },
) {
  let title = '';

  switch (filter) {
    case 'read_table':
      title = 'Список считанных меток';
      break;
    case 'active_table':
      title = 'Список уникальных меток';
      break;
    case 'uniq_table':
      title = 'Список активных меток';
      break;
    default:
      break;
  }

  return (
    <Paper>
      <div className={styles.table}>
        <p className={styles.table_title}>
          {title}
          :
        </p>
        <div className={styles.table_wrapper}>
          <table>
            <thead>
              <tr>
                <th>
                  №
                </th>
                <th>
                  ID метки
                </th>
                <th>
                  Тип метки
                </th>
                <th>
                  Дата считывания
                </th>
                <th>
                  Описание
                </th>
                <th>
                  Активность
                </th>
              </tr>
            </thead>

            <tbody>
              {
              data && data.length !== 0 && (
                data.map((row, index) => (
                  <tr
                    key={row.id + row.rep_dttm}
                    onClick={() => setAdditionalInfo(row)}
                  >
                    <td>{index + 1}</td>
                    <td>{row.id}</td>
                    <td>{row.id_type}</td>
                    <td>
                      {moment.utc(row.rep_dttm).format('L')}
                      {' '}
                      {moment.utc(row.rep_dttm).format('LTS')}
                    </td>
                    <td>{row.id_desc}</td>
                    <td>
                      {
                          row.active_flag ? (
                            <p className={styles.is_active}>
                              &#10003;
                            </p>
                          ) : (
                            <p className={styles.not_active}>
                              &times;
                            </p>
                          )
                        }
                    </td>
                  </tr>
                ))
              )
            }
            </tbody>
          </table>
        </div>
      </div>
    </Paper>
  );
}
