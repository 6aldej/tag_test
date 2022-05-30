import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';

export function ChartLine(
  { data }
  :{ data: { counter: number, date_hour: string }[] },
) {
  const seriesData:(string | number)[][] = [];
  for (let i = 0; i < data.length; i += 1) {
    const value = [moment.utc(data[i].date_hour).valueOf(), data[i].counter];
    seriesData.push(value);
  }

  const options = {
    chart: {
      type: 'line',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Количество меток в час',
    },
    legend: false,
    yAxis: { title: { text: 'Количество меток' } },
    xAxis: { type: 'datetime' },

    series: [
      {
        data: [...seriesData],
        name: 'Количество меток',
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{
        style: {
          height: '100%',
          width: '100%',
        },
      }}
    />
  );
}
