import { useDispatch } from "react-redux";
import { setDeletedPost } from "@/redux/postSlice";
import styled from "styled-components";
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
        <Backdrop>
          <div className="modal-container">
            <div className="item-area">
              <div className="item">
                <button onClick={() => handleDeletePost(post.postId)}>
                  삭제하기
                </button>
              </div>
              <div className="item" onClick={editPostClick}>
                <button>수정하기</button>
              </div>
              <div className="item">
                <LinkCopyButton
                  linkCopy={`https://inssagram-two.vercel.app/post/${post.postId}`}
                />
              </div>
              <div className="item" onClick={infoClick}>
                이 계정 정보
              </div>
              <div className="item" onClick={handleClose}>
                취소
              </div>
            </div>
          </div>
        </Backdrop>
      )}
    </>
  );
};

export default UserInfoModal;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;

  .modal-container {
    position: relative;
    width: 77.77%;
    padding: 3px;
    border-radius: 12px;

    .item-area {
      display: grid;
      grid-template-rows: repeat(5, 1fr);
      align-items: center;

      .item {
        display: grid;
        align-items: center;
        justify-items: center;
        width: 100%;
        height: 44px;
        cursor: pointer;
        border-bottom: 1px solid #cccccc;

        &:last-child {
          border-bottom: none;
        }

        button {
          color: #ff0000;
        }
      }
    }
  }
`;
