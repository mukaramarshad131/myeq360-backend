import Chart from '@/components/chart/chart';
import useChart from '@/components/chart/useChart';

import { ChartConfig } from '#/entity';

export default function ChartLine({ series, dataLable, width, height }: ChartConfig) {
  const chartOptions = useChart({
    xaxis: {
      categories: dataLable,
    },
    tooltip: {
      x: {
        show: true,
      },
      marker: { show: true },
    },
  });

  return (
    <Chart
      type="line"
      series={series}
      options={chartOptions}
      height={height || 220}
      width={width || '100%'}
    />
  );
}
