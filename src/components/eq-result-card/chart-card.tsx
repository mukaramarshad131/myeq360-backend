import { ChartCardInterface } from '#/entity';

function ChartCard({ title, children }: ChartCardInterface) {
  return (
    <div className="border-[1px] border-t-0 border-[#d3d3d3] drop-shadow-lg">
      <div className="py1 border-t-[12px] border-t-themeGreen bg-[#c0d1bc] px-2">{title}</div>
      <div className="px-5">{children}</div>
    </div>
  );
}

export default ChartCard;
