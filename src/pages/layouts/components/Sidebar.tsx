import { Layout, Menu, MenuProps, theme } from "antd";
import * as Icons from "@ant-design/icons";
import { ReactElement, createElement, useEffect, useState } from "react";
import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@hooks/reduxHook";
import logo from "../../../assets/img/logo_img.png";

type IconMap = {
	[key: string]: ReactElement;
};

// Mapping antd-icons
const iconMap: IconMap = Object.keys(Icons).reduce((acc, key) => {
	const IconComponent = (Icons as any)[
		key
	] as React.ComponentType<AntdIconProps>;
	if (IconComponent) {
		acc[key] = createElement(IconComponent);
	}
	return acc;
}, {} as IconMap);

interface MenuItem {
	url: string;
	icon?: string;
	label: string;
	type?: "group";
	children?: MenuItem[];
}

// Transform API data
const transformData = (items: MenuItem[]): MenuProps["items"] => {
	return items.map((item) => {
		if (item.type === "group") {
			return {
				type: "group",
				key: item.url,
				label: item.label,
				children: item.children ? transformData(item.children) : undefined,
			};
		} else {
			return {
				key: item.url,
				icon: item.icon ? iconMap[item.icon] : undefined,
				label: item.label,
				children: item.children ? transformData(item.children) : undefined,
			};
		}
	});
};

export default function Sidebar() {
	const { collapsed } = useAppSelector((state) => state.menu);
	const navigate = useNavigate();

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const [menuItems, setMenuItems] = useState<MenuProps["items"]>([]);

	useEffect(() => {
		// Simulating an API call
		const fetchData = async () => {
			const data: MenuItem[] = [
				{
					url: "/dashboard",
					icon: "UserOutlined",
					label: "Dashboard",
				},
				{
					url: "/videos",
					icon: "FileTextOutlined",
					label: "Assessment",
					children: [
						{
							url: "/uploads/sub1",
							label: "Assessment Results",
							// icon: "QrcodeOutlined",
						},
						{
							url: "/uploads/sub1",
							label: "Add Questions",
							// icon: "QrcodeOutlined",
						},
					],
				},
				{
					url: "/uploads",
					icon: "FileDoneOutlined",
					label: "Self Assessment",
					children: [
						{
							url: "/uploads/sub1",
							label: "Self Assessment",
							icon: "QrcodeOutlined",
						},
					],
				},
				{
					url: "/uploads",
					icon: "TeamOutlined",
					label: "Manage User",
					children: [
						{
							url: "/uploads/sub1",
							label: "Manage User",
							icon: "QrcodeOutlined",
						},
					],
				},
				{
					url: "/uploads",
					icon: "UserOutlined",
					label: "Manage Teacher",
					children: [
						{
							url: "/uploads/sub1",
							label: "Manage Teachers",
							icon: "QrcodeOutlined",
						},
					],
				},
				{
					url: "/uploads",
					icon: "UserOutlined",
					label: "Manage Students",
					children: [
						{
							url: "/uploads/sub1",
							label: "Manage Students",
							icon: "QrcodeOutlined",
						},
					],
				},
				{
					url: "/dashboard",
					icon: "SettingOutlined",
					label: "Setting",
				},
				// {
				// 	url: "/group",
				// 	icon: "SettingOutlined",
				// 	type: "group",
				// 	label: "Setting",
				// 	children: [
				// 		{
				// 			url: "/group/item1",
				// 			icon: "SettingOutlined",
				// 			label: "Group Item 1",
				// 		},
				// 		{
				// 			url: "/group/item2",
				// 			icon: "VideoCameraOutlined",
				// 			label: "Group Item 2",
				// 		},
				// 	],
				// },
			];

			setMenuItems(transformData(data));
		};

		fetchData();
	}, []);

	const handleMenuClick = (e: any) => {
		navigate(e.key);
	};

	return (
		<>
			<Layout.Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				style={{ background: colorBgContainer }}
			>
				<div
					style={{
						fontSize: "1.5rem",
						fontWeight: "bolder",
						padding: 7,
						color: "green",
						marginTop: "1rem",
					}}
				>
					{collapsed ? (
						<img
							src={logo}
							alt="logo"
							height={"auto"}
							width={"60px"}
							style={{ margin: "auto" }}
						/>
					) : (
						<img
							src={logo}
							alt="logo"
							height={"auto"}
							width={"90px"}
							style={{ margin: "auto" }}
						/>
					)}
				</div>
				<Menu
					className="font-sans h-10"
					mode="inline"
					defaultSelectedKeys={["/dashboard"]}
					items={menuItems}
					onClick={handleMenuClick}
				/>
			</Layout.Sider>
		</>
	);
}
