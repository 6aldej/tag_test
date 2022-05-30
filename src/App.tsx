import { useState } from 'react';
import { useRequest } from 'Hooks/useRequest';
import Header from 'Components/Header';
import moment from 'moment';
import styles from 'App.module.css';
import data from 'data/data.json';

import ErrorMessage from 'UI/ErrorMessage';
import PageMain from 'Pages';

function App() {
  const [timestamp, setTimestamp] = useState<string | null>(null);

  const dataApi = useRequest({
    url: timestamp
      ? `http://localhost:5000/?time_reset=${timestamp}`
      : 'http://localhost:5000',
  }, timestamp);

  console.log(dataApi);

  return (
    <div className={styles.App}>
      <Header loading={dataApi.loading} />
      {
        dataApi.error ? (
          <ErrorMessage error={dataApi.error.message} />
        ) : (
          <PageMain
            data={data}
            resetCounter={() => setTimestamp(moment().format('yyyy-MM-DD HH:mm:ss.SSS'))}
          />
        )
      }
    </div>
  );
}

export default App;
