import {
	LogoutOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	MoonOutlined,
	SunOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHook";
import { logout } from "@redux/slices/authSlice";
import { setCollapsed } from "@redux/slices/menuSlices";
import { setIsDarkMode } from "@redux/slices/themeSlice";
import {
	Avatar,
	Button,
	Dropdown,
	Layout,
	MenuProps,
	Space,
	Switch,
	theme,
} from "antd";

export default function Navbar() {
	const auth = useAppSelector((state) => state.auth);
	const themeState = useAppSelector((state) => state.theme);
	const menuState = useAppSelector((state) => state.menu);
	const dispatch = useAppDispatch();

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const items: MenuProps["items"] = [
		{
			key: "1",
			label: "Profile",
			icon: <UserOutlined />,
		},
		{
			key: "2",
			danger: true,
			label: "Logout",
			onClick: () => dispatch(logout()),
			icon: <LogoutOutlined />,
		},
	];
	return (
		<Layout.Header
			style={{
				padding: 0,
				background: colorBgContainer,
				display: "flex",
				justifyContent: "space-between",
				paddingLeft: "1rem",
				paddingRight: "1rem",
			}}
		>
			<Space>
				<Button
					type="text"
					icon={
						menuState.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
					}
					onClick={() => dispatch(setCollapsed())}
					style={{
						fontSize: "16px",
						width: 64,
						height: 64,
					}}
				/>
				<Switch
					checkedChildren={<MoonOutlined />}
					unCheckedChildren={<SunOutlined />}
					checked={themeState.isDarkMode}
					onClick={() => dispatch(setIsDarkMode())}
				/>
			</Space>
			<Space>
				<Dropdown menu={{ items }}>
					<Space style={{ cursor: "pointer" }}>
						{auth.user?.email}
						<Avatar>
							{auth.user?.email ? auth.user.email.charAt(0).toUpperCase() : ""}
						</Avatar>
					</Space>
				</Dropdown>
			</Space>
		</Layout.Header>
	);
}
