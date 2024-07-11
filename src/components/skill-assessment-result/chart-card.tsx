import { CardProps } from '#/entity';

function ChartCard({
  title,
  children,
  titleBorderWidth,
  titleBorderColor,
  titleCenter,
  titleSize,
}: CardProps) {
  return (
    <div className="h-full border-[1px] border-t-0 border-[#d3d3d3] drop-shadow-lg">
      <div
        className={`py1 border-t-[${titleBorderWidth || '12px'}] text-[${
          titleSize || '14px'
        }] border-t-${titleBorderColor || 'themeGreen'} bg-[#c0d1bc] px-2 text-${
          titleCenter ? 'center' : 'left'
        }`}
      >
        {title}
      </div>
      <div className="px-5">{children}</div>
    </div>
  );
}

export default ChartCard;
