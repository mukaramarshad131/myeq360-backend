import { useAppDispatch, useAppSelector } from "@hooks/reduxHook";
import { User } from "@mytypes/authType";
import Guest from '../../Errors/Guest'
import { loginSuccess } from "@redux/slices/authSlice";
import { Button, Form, FormProps, Input } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
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
			<Form
				name="basic"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				style={{height:400}}
			>
				<label className="font-normal text-base">First Name</label>
				<Form.Item
					name="firstname"
					rules={[{ required: true, message: "Please enter your First Name." }]}
				>
					<Input size="large"/>
				</Form.Item>
				<label className="font-normal text-base">Last Name</label>
				<Form.Item
					name="lastname"
					rules={[{ required: true, message: "Please enter your Last Name." }]}
				>
					<Input size="large"/>
				</Form.Item>

				<label className="font-normal text-base">Email</label>
				<Form.Item
					name="email"
					rules={[
						{ required: true, message: "Please enter your valid Email." },
					]}
				>
					<Input size="large" />
				</Form.Item>

				<label className="font-normal text-base">Password</label>
				<Form.Item
					name="password"
					rules={[{ required: true, message: "Please input your Password." }]}
				>
					<Input.Password size="large" />
				</Form.Item>
				<label className="font-normal text-base">Confirm Password</label>
				<Form.Item
					name="confirm password"
					rules={[{ required: true, message: "Please input your Password." }]}
				>
					<Input.Password size="large"/>
				</Form.Item>

				<Form.Item>
					<Button
						htmlType="submit"
						type="primary"
						size="large"
						className="bg-blue-500 w-full font-semibold mt-3 mb-3"
					>
						Sign Up
					</Button>
				</Form.Item>
			</Form>
			<button
				onClick={() => navigate("/login")}
				className="flex items-center justify-center m-auto text-base "
			>
				Already have account  &nbsp; <span className="text-green-500">Login</span>
			</button>
		</Guest>
	
	);
}
