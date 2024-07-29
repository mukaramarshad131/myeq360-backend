import { Modal } from 'antd';
import { ReactNode } from 'react';

interface Props {
  isOpenModal: boolean;
  width?: number;
  title?: string | ReactNode;
  onClose: () => void;
  children: ReactNode;
}
export function EQModal({ isOpenModal, title, children, width, onClose }: Props) {
  const handleClose = (e: any) => {
    e.stopPropagation();
    onClose();
  };
  return (
    <Modal
      width={width}
      title={<div className="modalTitle">{title}</div>}
      className="modal"
      open={isOpenModal}
      onCancel={(e) => handleClose(e)}
    >
      {children}
    </Modal>
  );
}
