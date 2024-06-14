import { Layout, Menu, MenuProps, theme } from "antd";
import * as Icons from "@ant-design/icons";
import { ReactElement, createElement, useEffect, useState } from "react";
import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@hooks/reduxHook";

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
		token: { colorBgContainer, colorText },
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
					icon: "VideoCameraOutlined",
					label: "Videos",
				},
				{
					url: "/uploads",
					icon: "UploadOutlined",
					label: "Uploads",
					children: [
						{
							url: "/uploads/sub1",
							label: "Sub menu 1",
							icon: "QrcodeOutlined",
							children: [
								{
									url: "/uploads/sub1/item1",
									label: "Item 1",
									icon: "TruckOutlined",
								},
							],
						},
					],
				},
				{
					url: "/group",
					type: "group",
					label: "Group",
					children: [
						{
							url: "/group/item1",
							icon: "UserOutlined",
							label: "Group Item 1",
						},
						{
							url: "/group/item2",
							icon: "VideoCameraOutlined",
							label: "Group Item 2",
						},
					],
				},
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
				<div style={{ fontSize: "4rem", padding: 12, color: colorText }}>
					{collapsed ? "L" : "Logo"}
				</div>
				<Menu
					mode="inline"
					defaultSelectedKeys={["/dashboard"]}
					items={menuItems}
					onClick={handleMenuClick}
				/>
			</Layout.Sider>
		</>
	);
}
