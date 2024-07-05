import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import userService from '@/api/services/userService';

import { ReturnButton } from './components/ReturnButton';
import { LoginStateEnum, useLoginStateContext } from './providers/LoginStateProvider';

function RegisterForm() {
  const { t } = useTranslation();
  const signUpMutation = useMutation(userService.signup);

  const { loginState, backToLogin } = useLoginStateContext();
  if (loginState !== LoginStateEnum.REGISTER) return null;

  const onFinish = async (values: any) => {
    console.log('Received values of form: ', values);
    await signUpMutation.mutateAsync(values);
    backToLogin();
  };

  return (
    <>
      <div className="mb-4 text-2xl font-bold xl:text-3xl">{t('sys.login.signUpFormTitle')}</div>
      <Form name="normal_login" size="large" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          name="firstname"
          rules={[{ required: true, message: t('sys.login.firstNamePlaceholder') }]}
        >
          <Input placeholder={t('sys.login.firstName')} />
        </Form.Item>
        <Form.Item
          name="lastname"
          rules={[{ required: true, message: t('sys.login.lastNamePlaceholder') }]}
        >
          <Input placeholder={t('sys.login.lastName')} />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: t('sys.login.emaildPlaceholder') }]}
        >
          <Input placeholder={t('sys.login.email')} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: t('sys.login.passwordPlaceholder') },
            { min: 8, message: t('sys.login.passwordMinLength') },
            {
              validator: (rule, value) => {
                const hasUppercase = /[A-Z]/.test(value);
                const hasLowercase = /[a-z]/.test(value);
                const hasNumber = /[0-9]/.test(value);
                const hasSpecialChar = /[^a-zA-Z0-9 ]/.test(value);

                if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
                  return Promise.reject(t('sys.login.passwordComplexity'));
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input.Password placeholder={t('sys.login.password')} />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          rules={[
            { required: true, message: t('sys.login.confirmPasswordPlaceholder') },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('sys.login.diffPwd')));
              },
            }),
          ]}
        >
          <Input.Password type="password" placeholder={t('sys.login.confirmPassword')} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            {t('sys.login.registerButton')}
          </Button>
        </Form.Item>

        <div className="mb-2 text-xs text-gray">
          <span>{t('sys.login.registerAndAgree')}</span>
          <a href="./" className="text-sm !underline">
            {t('sys.login.termsOfService')}
          </a>
          {' & '}
          <a href="./" className="text-sm !underline">
            {t('sys.login.privacyPolicy')}
          </a>
        </div>

        <ReturnButton onClick={backToLogin} />
      </Form>
    </>
  );
}

export default RegisterForm;
