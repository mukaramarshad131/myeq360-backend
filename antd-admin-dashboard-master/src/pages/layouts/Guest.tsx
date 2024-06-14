import { Layout } from "antd";
import { ReactNode } from "react";

export default function Guest({ children }: { children: ReactNode }) {
	return <Layout style={{ height: "100vh" }}>{children}</Layout>;
}
