import * as SC from "@/styles/styled/modals_info";
import LinkCopyButton from "@/components/Buttons/LinkCopy";

interface InfoModalProps {
  post: any;
  infoClick: () => void;
  handleClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({
  post,
  infoClick,
  handleClose,
}) => {
  return (
    <SC.Backdrop>
      <SC.Container>
        <SC.ContentArea>
          <SC.ModalItem>
            <LinkCopyButton
              linkCopy={`https://inssagram-two.vercel.app/post/${post.postId}`}
            />
          </SC.ModalItem>
          <SC.ModalItem onClick={infoClick}>이 계정 정보</SC.ModalItem>
          <SC.ModalItem onClick={handleClose}>취소</SC.ModalItem>
        </SC.ContentArea>
      </SC.Container>
    </SC.Backdrop>
  );
};

export default InfoModal;
