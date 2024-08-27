import Card from '@/components/card';
import IndividualBannerCard from '@/pages/dashboard/individual-dashboard/IndividaulBannerCard';

import Faq from './Faq';
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
