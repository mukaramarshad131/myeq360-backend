import { CSSProperties, ReactNode } from 'react';

type Props = {
  subtitle: any;
  title: ReactNode;
  style?: CSSProperties;
};

export default function AnalysisCard({ subtitle, title, style }: Props) {
  return (
    <div
      className="flex flex-col items-center justify-between rounded-2xl py-8 "
      style={{
        ...style,
        padding: '24px 20px',
        height: '100%',
      }}
    >
      <span className="font-base text-3xl">{title}</span>
      <span className=" text-sm">{subtitle}</span>
    </div>
  );
}
