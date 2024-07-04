import Authenticated from '../../Errors/Authenticated'
import { ChartsSection } from './ChartsSection'
import { StatCardSection } from "./StatsSection";
import SelectAccount from '../../components/SelectAccount'
import EducatorsAccounts from '../../components/EducatorsAccounts'



export default function Dashboard() {
	return (
		<Authenticated
			title="Dashboard"
			breadcrumb={[{ title: "Dashboard" }, { title: "User" }]}
		>
			<StatCardSection />
			<ChartsSection />
			{/* <TableSection /> */}
			<SelectAccount/>
			<EducatorsAccounts/>
		
		{import.meta.env.VITE_API_URL}
		</Authenticated>
	);
}
