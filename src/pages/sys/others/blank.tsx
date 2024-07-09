import Card from '@/components/card';
import Analysis from '@/pages/dashboard/analysis';

import Faq from './Faq';
import IndividualBannerCard from './IndividaulBannerCard';
import { TrialLinkCard } from './TrialLinkCard';

export default function BlankPage() {
  return (
    <Card className="flex flex-col">
      <div className="flex flex-row gap-2 max-lg:flex-col">
        <TrialLinkCard />
        <IndividualBannerCard />
      </div>
      <Analysis />
      <Faq />
    </Card>
  );
}
