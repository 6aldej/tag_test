import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export function ChartPie(
  { data }
  :{ data: { counter: number, cleaned_id: string }[] },
) {
  const seriesData:{ y: number, name: string }[] = [];
  for (let i = 0; i < data.length; i += 1) {
    const value = { y: data[i].counter, name: data[i].cleaned_id };
    seriesData.push(value);
  }

  const options = {
    chart: {
      type: 'pie',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Типы меток',
    },
    xAxis: { type: 'datetime' },

    series: [
      {
        data: [...seriesData],
        name: 'Количество',
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
