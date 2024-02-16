import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { PostContentData } from "@/types/PostTypes";
import { formatData } from "@/utils/date";
import styled from "styled-components";
import { brokenImage, noProfile } from "@/images";
import putUpdatePost from "@/services/postInfo/putUpdatePost";

interface PostEditModalProps {
  post: PostContentData;
  handleClose: () => void;
}

const PostEditModal: React.FC<PostEditModalProps> = ({ post, handleClose }) => {
  const router = useRouter();
  const formattedCreatedAt = formatData(new Date(post.createdAt));
  const [editedContent, setEditedContent] = useState(post.contents);

  const handleUpdatePost = async (postId: number, contents: string) => {
    try {
      const res = await putUpdatePost("post", postId, {
        contents,
      });
      console.log("update post success", res);
      router.push(`/post/${postId}`);
      handleClose();
    } catch (err) {
      console.error("fail updat post:", err);
    }
  };

  const handleSubmit = async () => {
    try {
      await handleUpdatePost(post.postId, editedContent);
    } catch (err) {
      console.error("fail update post:", err);
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedContent(e.target.value);
  };

  return (
    <Backdrop>
      <div className="modal-container">
        <div className="edit-item">
          <div className="item-header">
            <span onClick={handleClose}>취소</span>
            <p className="title">게시글 수정</p>
            <span onClick={handleSubmit}>확인</span>
          </div>

          <WriterDetails>
            <div className="profile">
              <Image
                src={post.memberImage ? post.memberImage : noProfile}
                alt="프로필"
                width={40}
                height={40}
                style={{ borderRadius: "100%" }}
              />
            </div>
            <div className="writer-infos">
              <span className="nickname">{post.nickName}</span>
              <span className="date">{formattedCreatedAt}</span>
            </div>
          </WriterDetails>

          <div className="post-image">
            <Image
              src={post.image ? post.image[0] : brokenImage}
              alt="게시글 이미지"
              width={240}
              height={240}
            />
          </div>

          <div className="content-details">
            <textarea
              value={editedContent}
              placeholder="게시글을 수정해보세요"
              onChange={handleContentChange}
              className="content"
            />
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default PostEditModal;

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
  z-index: 10;

  .modal-container {
    position: relative;
    width: 70%;
    height: 60%;
    padding: 3px;
    border-radius: 12px;

    .edit-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      padding: 5px 8px;

      .item-header {
        display: flex;
        flex-grow: 0.5;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 3px;

        span {
          cursor: pointer;
        }

        .title {
          font-size: 16px;
        }
      }

      .writer-details {
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
        align-items: center;
      }

      .post-image {
        img {
          border-radius: 12px;
        }
      }

      .content-details {
        display: flex;
        flex-grow: 1;
        height: 80px;
        border: 2px solid #92a8d1;
        border-radius: 8px;
        margin-top: 6px;
        padding: 12px;

        .content {
          font-size: 1rem;
          resize: none;
          line-height: 20px;
        }
      }
    }
  }
`;

const WriterDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 6px;

  .profile {
    margin-right: 6px;
  }

  .writer-infos {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 8px;

    .nickname {
      font-weight: 600;
    }

    .date {
      color: #737373;
    }
  }
`;
