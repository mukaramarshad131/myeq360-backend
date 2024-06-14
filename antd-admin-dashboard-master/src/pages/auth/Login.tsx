import { useAppDispatch, useAppSelector } from "@hooks/reduxHook";
import { User } from "@mytypes/authType";
import Guest from "@pages/layouts/Guest";
import { loginSuccess } from "@redux/slices/authSlice";
import { Button, Checkbox, Form, FormProps, Input } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();
	const auth = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch()

	useEffect(() => {
		if (auth.isAuthenticated) {
			navigate("/dashboard", { replace: true });
		}
	}, [auth.isAuthenticated, navigate]);

	const onFinish: FormProps<User>["onFinish"] = (values) => {
		dispatch(loginSuccess({user: values, token: 'kjqwekqj123123'}))
	};

	const onFinishFailed: FormProps<User>["onFinishFailed"] = (
		errorInfo
	) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Guest>
			<div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
				<Form
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					style={{ maxWidth: 600, margin: "auto" }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item<User>
						label="email"
						name="email"
						rules={[{ required: true, message: "Please input your email!" }]}
					>
						<Input />
					</Form.Item>

					<Form.Item<User>
						label="Password"
						name="password"
						rules={[{ required: true, message: "Please input your password!" }]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item<User>
						name="remember"
						valuePropName="checked"
						wrapperCol={{ offset: 8, span: 16 }}
					>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</Guest>
	)
}
