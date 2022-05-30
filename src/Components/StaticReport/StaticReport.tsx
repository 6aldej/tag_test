import ChartLine from 'Components/ChartLine';
import ChartPie from 'Components/ChartPie';
import Paper from 'UI/Paper';
import styles from './StaticReport.module.css';

export function StaticReport({ chartData } : { chartData:{
  line_graph:any
  pie_chart:any
} }) {
  return (
    <Paper>
      <div className={styles.charts}>
        <div>
          {
            chartData && chartData.line_graph && (
              <ChartLine data={chartData.line_graph} />
            )
          }
        </div>
        <div>
          {
            chartData && chartData.pie_chart && (
              <ChartPie data={chartData.pie_chart} />
            )
          }
        </div>
      </div>
    </Paper>
  );
}
