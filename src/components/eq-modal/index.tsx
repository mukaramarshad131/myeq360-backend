import { Modal } from 'antd';

type ModalProps = {
  title: string;
  show: boolean;
  onOk: VoidFunction;
  onCancel: VoidFunction;
  children: any;
};
export default function EQModal({ title, show, onOk, onCancel, children }: ModalProps) {
  return (
    <Modal title={title} open={show} onOk={onOk} onCancel={onCancel}>
      {children}
    </Modal>
  );
}
