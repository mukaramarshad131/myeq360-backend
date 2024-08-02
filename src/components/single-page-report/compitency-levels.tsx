import { Props } from '../skill-assessment-result/progress-indicator';

function CompitencyLevels({ item }: Props) {
  return (
    <div className="flex gap-8" key={item.id}>
      <div className="text-nowrap text-lg font-bold text-[#505050]">
        {item.title} ({item.abbrevation})
      </div>
      <div className="text-lg">- {item.info}</div>
    </div>
  );
}

export default CompitencyLevels;
