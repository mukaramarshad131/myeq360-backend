import { useAppDispatch, useAppSelector } from "@hooks/reduxHook";
import { User } from "@mytypes/authType";
import Guest from "../../Errors/Guest";
import { loginSuccess } from "@redux/slices/authSlice";
import { Button, Form, FormProps, Input } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
	const navigate = useNavigate();
	const auth = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (auth.isAuthenticated) {
			navigate("/dashboard", { replace: true });
		}
	}, [auth.isAuthenticated, navigate]);

	const onFinish: FormProps<User>["onFinish"] = (values) => {
		dispatch(loginSuccess({ user: values, token: "kjqwekqj123123" }));
	};

	const onFinishFailed: FormProps<User>["onFinishFailed"] = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Guest>
			<div className="text-center">
				<h1 className="text-2xl mb-5 mt-5 font-normal">Forgot Your Password</h1>
				<p
					style={{
						fontSize: "15px",
						marginBottom: "10px",
						marginTop: "10px",
						color: "#BFBFBF",
					}}
				>
					Enter Your Email Address and we will send you instructions to reset
					your password
				</p>
			</div>
			<Form
				name="basic"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					name="email"
					rules={[
						{ required: true, message: "Please enter your valid Email." },
					]}
				>
					<Input
						size="large"
						className="mt-2"
						placeholder="Enter your valid email"
					/>
				</Form.Item>

				<Form.Item>
					<Button
						htmlType="submit"
						type="primary"
						size="large"
						className="bg-blue-500 w-full font-semibold mt-5 mb-5"
					>
						Continue
					</Button>
				</Form.Item>
			</Form>

			<button
				onClick={() => navigate("/login")}
				className="flex items-center justify-center m-auto text-base text-green-500"
			>
				Back to Login
			</button>
		</Guest>
	);
}
