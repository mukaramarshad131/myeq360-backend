import { Layout, Typography} from "antd";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from '../Layouts/Sidebar'
import Navbar from "../Layouts/Navbar";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import { Breadcrumb as Bc } from "antd";
import { useAppSelector } from "@hooks/reduxHook";
const { Content, Footer } = Layout;

export default function Authenticated({
	children,
	title,
	breadcrumb,
}: {
	children: ReactNode;
	title?: string | ReactNode;
	breadcrumb?: BreadcrumbItemType[];
}) {
	const navigate = useNavigate();
	const auth = useAppSelector((state) => state.auth);
	useEffect(() => {
		if (!auth.isAuthenticated) {
			navigate("/login", { replace: true });
		}
	}, [auth.isAuthenticated, navigate]);

	// const {
	// 	token: { colorBgContainer, borderRadiusLG },
	// } = theme.useToken();

	return (
		<Layout >
			<Sidebar />
			<Layout>
				<Navbar />
				<Content style={{ margin: "0 16px" }}>
					<div style={{ margin: "16px 0" }}>
						<Bc items={breadcrumb}/>
					</div>
					<div
						style={{
							padding: 24,
							// height: "100%",
							// background: colorBgContainer,
							// borderRadius: borderRadiusLG,
						}}
					>
						<Typography.Title level={2} style={{ marginTop: "-6px" }}>
							{title}
						</Typography.Title>
						{children}
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					MyEQ360 ©{new Date().getFullYear()} Using Ant Design
				</Footer>
			</Layout>
		</Layout>
	);
}
