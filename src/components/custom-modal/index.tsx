import { Modal } from 'antd';

type ModalProps = {
  title: string;
  show: boolean;
  onSubmit: VoidFunction;
  onCancel: VoidFunction;
  children: any;
};
export default function CustomModal({ title, show, onSubmit, onCancel, children }: ModalProps) {
  return (
    <Modal title={title} open={show} onOk={onSubmit} onCancel={onCancel}>
      {children}
    </Modal>
  );
}
