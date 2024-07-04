import { Button, Result } from "antd";
// import Guest from "../Guest";
import Guest from '../Errors/Guest'
import { useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();
	return (
		<Guest>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
				}}
			>
				<Result
					status="404"
					title="404"
					subTitle="Sorry, the page you visited does not exist."
					extra={
						<Button type="primary" onClick={() => navigate(-1)}>
							Back Home
						</Button>
					}
				/>
			</div>
		</Guest>
	);
}
