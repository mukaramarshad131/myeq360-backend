import { useAppSelector } from "@hooks/reduxHook";

import Login from "@pages/auth/Login";
// import SignUp from "@pages/auth/SignUp";

import Dashboard from "@pages/dashboard/Dashboard";
import ErrorPage from "@pages/layouts/errors/ErrorPage";
import NotFound from "@pages/layouts/errors/NotFound";
import { ConfigProvider, theme } from "antd";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import AdminDashboard from "./components/Admin/Admin";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/dashboard" />,
		errorElement: <ErrorPage />
	},
	{
		path: "/login",
		element: <Login/>,
		errorElement: <ErrorPage />
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
		errorElement: <ErrorPage />
	},
	{
		path: "/admin",
		element: <AdminDashboard />,
		errorElement: <ErrorPage />
	},
	{
		path: "*",
		element: <NotFound />
	}
]);

export default function Routes() {
	const themeState = useAppSelector((state) => state.theme);
	const { defaultAlgorithm, darkAlgorithm } = theme;

	return (
		<ConfigProvider
			theme={{
				algorithm: themeState.isDarkMode ? darkAlgorithm : defaultAlgorithm,
				token: {
					// colorPrimary: "#722ed1",
					// colorInfo: "#722ed1",
					borderRadius: 4,
					wireframe: false,
				},
			}}
		>
			<RouterProvider router={routes} />
		</ConfigProvider>
	);
}
