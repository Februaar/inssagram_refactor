import { useDispatch } from "react-redux";
import { setDeletedPost } from "@/redux/postSlice";
import * as SC from "@/styles/styled/modals_edit";
import deletePost from "@/services/postInfo/deletePost";
import LinkCopyButton from "@/components/Buttons/LinkCopy";

interface UserInfoModalProps {
  post: any;
  infoClick: () => void;
  editPostClick: () => void;
  handleClose: () => void;
}

const UserInfoModal: React.FC<UserInfoModalProps> = ({
  post,
  infoClick,
  editPostClick,
  handleClose,
}) => {
  const dispatch = useDispatch();

  const handleDeletePost = async (postId: number) => {
    try {
      await deletePost(postId);
      dispatch(setDeletedPost(postId));
      handleClose();
    } catch (err) {
      console.error("error deleting post:", err);
    }
  };

  return (
    <>
      {post && (
        <SC.Backdrop>
          <SC.Container>
            <SC.ContentArea>
              <SC.ModalItem>
                <SC.DeleteBtn onClick={() => handleDeletePost(post.postId)}>
                  삭제하기
                </SC.DeleteBtn>
              </SC.ModalItem>
              <SC.ModalItem onClick={editPostClick}>
                <button>수정하기</button>
              </SC.ModalItem>
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
      )}
    </>
  );
};

export default UserInfoModal;
