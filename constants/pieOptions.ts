import { EChartsOption } from "echarts";

export const pieOptions: EChartsOption = {
  color: ["#6B42E9", "#F2399A", "#F1EFFC"],
  tooltip: {
    trigger: "item",
    align: "center",
  },
  backgroundColor: "#FDFDFF",
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "68%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 0,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        scale: true,
        label: {
          show: true,
          fontSize: 12,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 850,
          name: `65% total\n new customers`,
        },
        {
          value: 200,
          name: `25% total\n new customers`,
        },
        {
          value: 280,
          name: `25% total \nnew customers`,
        },
      ],
    },
  ],
};
