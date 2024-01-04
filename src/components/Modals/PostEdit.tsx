import * as SC from "@/styles/styled/modals_edit";

interface PostEditModalProps {
  handleClose: () => void;
}

const PostEditModal: React.FC<PostEditModalProps> = ({ handleClose }) => {
  return (
    <SC.Backdrop>
      <SC.Container>
        <SC.ContentArea>
          <SC.ModalItem onClick={handleClose}>취소</SC.ModalItem>
        </SC.ContentArea>
      </SC.Container>
    </SC.Backdrop>
  );
};

export default PostEditModal;
