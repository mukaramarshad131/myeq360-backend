// import { stats } from "../../../constants";
import { stats } from '../../../constants'
import { StatCard } from "./StatCard";

export function StatCardSection() {
  return (
    <section className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </section>
  );
}