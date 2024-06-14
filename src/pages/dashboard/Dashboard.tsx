import Authenticated from "@pages/layouts/Authenticated";
import { ChartsSection } from "../../../src/components/Dashboard/ChartsSection";
import { StatCardSection } from "../../../src/components/Dashboard/StatsSection";
import { TableSection } from "../../../src/components/Dashboard/TableSection";

export default function Dashboard() {
	return (
		<Authenticated
			title="Dashboard"
			breadcrumb={[{ title: "Dashboard" }, { title: "User" }]}
		>
			<StatCardSection />
			<ChartsSection />
			<TableSection />
		{import.meta.env.VITE_API_URL}
		</Authenticated>
	);
}
