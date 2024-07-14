import { CardProps } from '#/entity';

function ChartCard({
  title,
  children,
  borderWidth,
  borderColor,
  titleCenter,
  titleSize,
  borderBottom,
  borderNone,
  bottomLine,
}: CardProps) {
  return (
    <div
      className={`h-full ${
        !borderNone && 'border-[1px]'
      } border-t-0 border-[#d3d3d3] drop-shadow-lg`}
      style={{
        borderTopWidth: borderWidth || '12px',
        fontSize: titleSize || '14px',
        borderTopColor: borderColor || '#50a870',
        borderBottom: borderBottom ? `${borderWidth} solid ${borderColor}` : '',
      }}
    >
      <div className={`bg-[#c0d1bc] px-2 ${titleCenter ? 'text-center' : 'text-left'}`}>
        {title}
      </div>
      <div className={`${title && 'px-5'}`}>{children}</div>
      {bottomLine && <div className="h-3 rounded-md bg-themeGreen" />}
    </div>
  );
}

export default ChartCard;
