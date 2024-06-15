import Authenticated from "@pages/layouts/Authenticated";
import { ChartsSection } from "../../../src/components/Dashboard/ChartsSection";
import { StatCardSection } from "../../../src/components/Dashboard/StatsSection";
import { TableSection } from "../../../src/components/Dashboard/TableSection";
import SelectAccount from '../../components/AccountsType/SelectAccount'

export default function Dashboard() {
	return (
		<Authenticated
			title="Dashboard"
			breadcrumb={[{ title: "Dashboard" }, { title: "User" }]}
		>
			<StatCardSection />
			<ChartsSection />
			<TableSection />
			<SelectAccount/>
		{import.meta.env.VITE_API_URL}
		</Authenticated>
	);
}
