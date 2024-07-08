import Card from '@/components/card';

import Faq from './Faq';
import IndividualBannerCard from './IndividaulBannerCard';
import { TrialLinkCard } from './trialLinkCard';

export default function BlankPage() {
  return (
    <Card className="flex flex-col items-start justify-start">
      <div className="flex flex-row gap-2 max-lg:flex-col">
        <IndividualBannerCard />
        <TrialLinkCard />
      </div>
      <Faq />
    </Card>
  );
}
