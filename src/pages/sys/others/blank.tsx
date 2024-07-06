import Card from '@/components/card';

import IndividualBannerCard from './IndividaulBannerCard';
import { TrialLinkCard } from './trialLinkCard';

export default function BlankPage() {
  return (
    <Card className="flex flex-row gap-2 max-lg:flex-col">
      <IndividualBannerCard />
      <TrialLinkCard />
    </Card>
  );
}
