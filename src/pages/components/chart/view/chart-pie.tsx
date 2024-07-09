import Chart from '@/components/chart/chart';
import useChart from '@/components/chart/useChart';

import { ChartInterface } from '#/entity';

export default function ChartPie({ series, dataLable, height, width }: ChartInterface) {
  const chartOptions = useChart({
    labels: dataLable,
    legend: {
      horizontalAlign: 'center',
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false,
      },
    },
    tooltip: {
      fillSeriesColor: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
  });

  return (
    <Chart
      type="pie"
      series={series}
      options={chartOptions}
      height={height || 320}
      width={width || 320}
    />
  );
}
