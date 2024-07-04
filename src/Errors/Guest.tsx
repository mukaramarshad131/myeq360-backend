import { Card } from "antd";
// import logo from "../assets/img/logo_img.png";
import logo from "../assets/img/logo_img.png";

// import { ReactNode } from "react";

// export default function Guest({ children }: { children: ReactNode }) {
// 	return <Layout style={{ height: "100vh" }}>{children}</Layout>;
// }

interface AuthProps {
	children: React.ReactNode;
}

 const Guest: React.FC<AuthProps> = ({ children }) => {
	return (
		<main className=" h-screen pr-2 flex items-center justify-center bg-blue-50">
			
			<Card className="shadow-xl shadow-blue-100 w-11/12 md:w-1/2 lg:w-1/3 fixed">
			<img
				src={logo}
				alt="logo"
				height={"auto"}
				width={"100px"}
				style={{ margin: "auto" }}
			/>
				{children}
			</Card>
		</main>
	);
};
export default Guest;
