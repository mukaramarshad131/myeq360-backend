import Chart from '@/components/chart/chart';
import useChart from '@/components/chart/useChart';

import { ChartConfig } from '#/entity';

export default function ChartDonut({ series, dataLable, height, width }: ChartConfig) {
  const chartOptions = useChart({
    labels: dataLable,
    stroke: {
      show: false,
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
    },
    tooltip: {
      fillSeriesColor: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            show: true,
            value: {
              show: true,
              fontSize: '16px',
            },
            total: {
              show: true,
              fontSize: '16px',
            },
          },
        },
      },
    },
  });

  return (
    <Chart
      type="donut"
      series={series}
      options={chartOptions}
      height={height || 320}
      width={width || '100%'}
    />
  );
}
