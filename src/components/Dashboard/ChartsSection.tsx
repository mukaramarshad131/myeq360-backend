import ReactECharts from "echarts-for-react";
import { useState } from "react";
import { durationOptions } from "../../../constants";
import { barOptions } from "../../../constants/barOptions";
import { pieOptions } from "../../../constants/pieOptions";
import SectionHeading from "../ui/SectionHeading";
import SelectComponent from "../ui/SelectComponent";

export function ChartsSection() {
  const [duration, setDuration] = useState(durationOptions[0]);
  // console.log(duration);
  return (
    <section className="h-full grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-8 lg:max-h-[350px] max-h-fit">
      <div className="rouded md:col-span-1 rounded-xl gap-2 lg:col-span-2 bg-white border flex justify-center p-4 flex-col h-full">
        <div className="flex justify-between">
          <div>
            <SectionHeading className="text-xl text-gray-900 font-bold pb-1">
              Overview
            </SectionHeading>
            <p className="text-slate-400 text-sm">Monthly Earning</p>
          </div>
          <SelectComponent
            value={duration}
            onChange={setDuration}
            selectOptions={durationOptions}
          />
        </div>
        <ReactECharts
          style={{ width: "100%", height: "100%", maxHeight: "250px" }}
          option={barOptions}
          lazyUpdate={true}
        />
      </div>
      <div className="border h-full bg-white overflow-clip gap-2 rounded-xl p-4 pb-0">
        <div>
          <SectionHeading className="text-xl text-gray-900 font-bold pb-1">
            Customers
          </SectionHeading>
          <p className="text-slate-400 text-sm">Customer that buy products</p>
        </div>
        <ReactECharts
          style={{ width: "100%", height: "100%", maxHeight: "250px" }}
          option={pieOptions}
          lazyUpdate={true}
        />
      </div>
    </section>
  );
}
