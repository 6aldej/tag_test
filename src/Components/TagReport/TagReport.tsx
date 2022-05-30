import table from './data.json';
import styles from './TagReport.module.css';

export function TagReport() {
  const rows = {};
  function returnBody() {
    for (let i = 0; i < Object.keys(table.data).length; i += 1) {
      const date = Object.keys(table.data)[i];
      for (let j = 0; j < table.data[date].length; j += 1) {
        const user = table.data[date][j];
        if (rows?.[user.userId]) {
          rows[user.userId].data = [...rows[user.userId].data, user];
        } else {
          rows[user.userId] = {
            data: [user],
            name: user.name,
            id: user.userId,
          };
        }
      }
    }
    return rows;
  }

  returnBody();

  return (
    <div className={styles.table_wrapper}>
      <table>
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              ФИО
            </th>
            {
                Object.keys(table.data).map((item) => (
                  <th key={item}>{item}</th>
                ))
              }
          </tr>
        </thead>
        <tbody>
          {
              Object.keys(rows).map((user) => (
                <tr key={user}>
                  <td>
                    {rows[user].id}
                  </td>
                  <td>
                    {rows[user].name}
                  </td>
                  {
                    rows[user].data.map((item) => (
                      <td key={Math.random()}>{item.active ? '✅' : '❌'}</td>
                    ))
                  }
                </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  );
}
