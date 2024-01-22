import * as SC from "@/styles/styled/modals_comment";

interface CommentModalProps {
  onDelete: () => void;
  handleClose: () => void;
}

const CommentModal: React.FC<CommentModalProps> = ({
  onDelete,
  handleClose,
}) => {
  return (
    <SC.Backdrop>
      <SC.Container>
        <SC.ContentArea>
          <SC.ModalItem onClick={onDelete}>삭제</SC.ModalItem>
          <SC.ModalItem onClick={handleClose}>취소</SC.ModalItem>
        </SC.ContentArea>
      </SC.Container>
    </SC.Backdrop>
  );
};

export default CommentModal;
