import { useEffect, useState } from 'react';
import Table from 'Components/Table';
import TableFilter from 'Components/TableFilter';
import StaticReport from 'Components/StaticReport';
import AdditionalInformation from 'Components/AdditionalInformation';
import TagReport from 'Components/TagReport';
import ReportWrapper from 'UI/ReportWrapper';

import styles from './PageMain.module.css';

export function PageMain(
  { data, resetCounter } :
  { data:any, resetCounter: Function },
) {
  const [additionalInfo, setAdditionalInfo] = useState(null);
  const [tableFilter, setTableFilter] = useState('read_table');
  const [tableContent, setTableContent] = useState([]);

  useEffect(() => {
    setTableContent(data?.[tableFilter]);
    setAdditionalInfo(null);
  }, [tableFilter]);

  function returnReport() {
    if (additionalInfo && tableFilter !== 'uniq_table') {
      return (
        <ReportWrapper
          onClose={() => setAdditionalInfo(null)}
        >
          <AdditionalInformation
            info={additionalInfo}
          />
        </ReportWrapper>
      );
    }
    if (additionalInfo && tableFilter === 'uniq_table') {
      return (
        <ReportWrapper
          onClose={() => setAdditionalInfo(null)}
        >
          <TagReport />
        </ReportWrapper>
      );
    }
    return (
      <StaticReport
        chartData={{
          line_graph: data?.line_graph,
          pie_chart: data?.pie_chart,
        }}
      />
    );
  }

  return (
    <main className={styles.main}>
      <Table
        data={tableContent}
        setAdditionalInfo={setAdditionalInfo}
        filter={tableFilter}
      />
      <div className={styles.two_block}>
        <TableFilter
          value={tableFilter}
          setValue={setTableFilter}
          numbers={data?.numbers?.[0]}
          resetCounter={() => resetCounter()}
        />
        {returnReport()}
      </div>
    </main>
  );
}
