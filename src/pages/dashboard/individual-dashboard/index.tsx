import Card from '@/components/card';
import Faq from '@/pages/sys/others/Faq';
import IndividualBannerCard from '@/pages/sys/others/IndividaulBannerCard';
import IndStatCard from '@/pages/sys/others/IndStatCards';
import { TrialLinkCard } from '@/pages/sys/others/trialLinkCard';

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
