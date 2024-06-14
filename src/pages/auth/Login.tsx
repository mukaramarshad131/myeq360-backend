import { useAppDispatch, useAppSelector } from "@hooks/reduxHook";
import { User } from "@mytypes/authType";
import Guest from "@pages/layouts/Guest";
import { loginSuccess } from "@redux/slices/authSlice";
import { Button, Checkbox, Form, FormProps, Input } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
	// const [showAlert, setShowAlert] = useState(false);
	// const [showAlertMsg, setShowAlertMsg] = useState<string>("");

	// const handleError = (err) => {
	// 	setShowAlertMsg(
	// 		err.response?.data?.msg ||
	// 			"Invalid username or password. Please try again."
	// 	);
	// 	setShowAlert(true);
	// 	setTimeout(() => {
	// 		setShowAlert(false);
	// 	}, 5000);
	// };

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
			>
				<label className="font-semibold text-lg">Username</label>
				<Form.Item
					name="email"
					rules={[
						{ required: true, message: "Please enter your valid Email." },
					]}
				>
					<Input size="large" className="mt-2" />
				</Form.Item>

				<label className="font-semibold text-lg">Password</label>
				<Form.Item
					name="password"
					rules={[{ required: true, message: "Please input your Password." }]}
				>
					<Input.Password size="large" className="mt-2" />
				</Form.Item>

				<div className="flex justify-between">
					<Form.Item name="remember" valuePropName="checked">
						<Checkbox className="text-base">Remember me</Checkbox>
					</Form.Item>
					<Button
						type="link"
						className="text-base"
						onClick={() => navigate("/forget-password")}
					>
						Forget Password!
					</Button>
				</div>

				<Form.Item>
					<Button
						htmlType="submit"
						type="primary"
						size="large"
						className="bg-blue-500 w-full font-semibold"
					>
						Login
					</Button>
				</Form.Item>
			</Form>
		</Guest>
	);
}
