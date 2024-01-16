import * as SC from "@/styles/styled/modals_edit";
import deletePost from "@/services/postInfo/deletePost";

interface UserInfoModalProps {
  infoClick: () => void;
  editPostClick: () => void;
  handleClose: () => void;
}

const UserInfoModal: React.FC<UserInfoModalProps> = ({
  infoClick,
  editPostClick,
  handleClose,
}) => {
  
  const handleDeletePost = async (postId: number) => {
    try {
      await deletePost(postId);
    } catch (err) {
      console.error("error deleting post:", err);
    }
  };

  return (
    <SC.Backdrop>
      <SC.Container>
        <SC.ContentArea>
          <SC.ModalItem>
            <SC.DeleteBtn>삭제하기</SC.DeleteBtn>
          </SC.ModalItem>
          <SC.ModalItem onClick={editPostClick}>
            <button>수정하기</button>
          </SC.ModalItem>
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

export default UserInfoModal;
