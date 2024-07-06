import { Form, Input, InputNumber, Modal, Radio } from 'antd';
import { useEffect } from 'react';

import { Organization } from '#/entity';

type ModalProps = {
  formValue: Organization;
  title: string;
  show: boolean;
  onOk: VoidFunction;
  onCancel: VoidFunction;
};
export default function EQModal({ title, show, formValue, onOk, onCancel }: ModalProps) {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ ...formValue });
  }, [formValue, form]);
  return (
    <Modal title={title} open={show} onOk={onOk} onCancel={onCancel}>
      <Form
        initialValues={formValue}
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 18 }}
        layout="horizontal"
      >
        <Form.Item<Organization> label="Name" name="name" required>
          <Input />
        </Form.Item>
        <Form.Item<Organization> label="Order" name="order" required>
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item<Organization> label="Status" name="status" required>
          <Radio.Group optionType="button" buttonStyle="solid">
            <Radio value="enable"> Enable </Radio>
            <Radio value="disable"> Disable </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item<Organization> label="Desc" name="desc">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
}
