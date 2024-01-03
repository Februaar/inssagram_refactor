import * as SC from "@/styles/styled/modals_detail";

interface DetailModalProps {
  infoClick: () => void;
  handleClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ infoClick, handleClose }) => {
  return (
    <SC.Backdrop>
      <SC.Container>
        <SC.ContentArea>
          <SC.ModalItem>
            링크 복사
            {/* <LinkCopyButton linkCopy={`localhost:3000/post/${post.postId}`} /> */}
          </SC.ModalItem>
          <SC.ModalItem onClick={infoClick}>이 계정 정보</SC.ModalItem>
          <SC.ModalItem onClick={handleClose}>취소</SC.ModalItem>
        </SC.ContentArea>
      </SC.Container>
    </SC.Backdrop>
  );
};

export default DetailModal;
