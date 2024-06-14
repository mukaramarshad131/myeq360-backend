import { EChartsOption } from "echarts";

export const barOptions: EChartsOption = {
  xAxis: {
    type: "category",
    data: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      show: false,
    },
  },
  tooltip:{
    trigger: 'item',
  },
  series: [
    {
      name: "Customers",
      emphasis: {
        itemStyle: {
          shadowBlur: 5,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
          color: "#5A32EA",
        },
      },
      itemStyle: {
        borderRadius: 10,
      },
      tooltip: {
        trigger: "item",

        align: "left",
      },
      data: [1200, 800, 600, 680, 1010, 500, 800, 1000, 600, 680, 1010, 500],
      type: "bar",
    },
  ],
  color: ["#F2EFFF"],
  backgroundColor: "#fff",
  angleAxis: {
    show: false,
  },

  grid: {
    containLabel: true,
    show: false,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};
