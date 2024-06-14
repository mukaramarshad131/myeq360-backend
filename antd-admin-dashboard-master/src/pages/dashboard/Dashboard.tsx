import Authenticated from "@pages/layouts/Authenticated";

export default function Dashboard() {
	return (
		<Authenticated
			title="Dashboard"
			breadcrumb={[{ title: "Dashboard" }, { title: "User" }]}
		>
			Dashboard {import.meta.env.VITE_API_URL}
		</Authenticated>
	);
}
