import Chart from '@/components/chart/chart';
import useChart from '@/components/chart/useChart';

import { ChartInterface } from '#/entity';

export default function ChartRadial({ series, dataLable, height, width }: ChartInterface) {
  const chartOptions = useChart({
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    labels: dataLable,
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '40%',
        },
        dataLabels: {
          show: true,
          value: {
            show: true,
            fontSize: '14px',
          },
          total: {
            show: true,
            fontSize: '14px',
          },
        },
      },
    },
  });

  return (
    <Chart
      type="radialBar"
      series={series}
      options={chartOptions}
      height={height || 320}
      width={width || '100%'}
    />
  );
}
