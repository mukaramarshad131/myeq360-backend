import { CSSProperties, ReactNode } from 'react';

type Props = {
  cover: string;
  subtitle: string;
  title: ReactNode;
  style?: CSSProperties;
};

export default function AnalysisCard({ cover, subtitle, title, style }: Props) {
  return (
    <div
      className="flex flex-col items-center justify-between rounded-2xl py-8"
      style={{
        ...style,
        padding: '24px 20px',
        height: '100%',
      }}
    >
      <img src={cover} alt="" />
      <span className="text-3xl font-bold">{title}</span>
      <span className=" text-sm">{subtitle}</span>
    </div>
  );
}
