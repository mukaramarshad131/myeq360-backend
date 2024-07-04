import { Button, Result } from "antd";
import Guest from '../Errors/Guest';

import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
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
					status="500"
					title="500"
					subTitle="Sorry, something went wrong."
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
