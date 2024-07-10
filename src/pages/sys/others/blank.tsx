import Card from '@/components/card';

import Faq from './Faq';
import IndividualBannerCard from './IndividaulBannerCard';
import IndStatCard from './IndStatCards';
import { TrialLinkCard } from './TrialLinkCard';

export default function IndividualDashboard() {
  return (
    <Card className="flex w-full flex-col gap-10">
      <div className="flex flex-row gap-2 max-lg:flex-col">
        <TrialLinkCard />
        <IndividualBannerCard />
      </div>
      <IndStatCard />
      <Faq />
    </Card>
  );
}
