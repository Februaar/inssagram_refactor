import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PostContentData } from "@/types/PostTypes";
import styled from "styled-components";
import { comment, direct } from "@/images";
import FavoriteIcon from "../Icons/Favorite";
import SaveIcon from "../Icons/Save";
import postLikePost from "@/services/postInfo/postLikePost";
import postSavePost from "@/services/postInfo/postSavePost";

interface PostIconProps {
  post: PostContentData;
}

const PostIconContainer: React.FC<PostIconProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLikePostClick = async (postId: number) => {
    try {
      await postLikePost(postId);
      setIsLiked(!isLiked);

      // const title = isLiked ? "좋아요 취소 💔" : "좋아요 완료 ❤";

      // Swal.fire({
      //   position: "center",
      //   icon: "success",
      //   title: title,
      //   width: 200,
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
    } catch (err) {
      console.error("like post:", err);
    }
  };

  const handleSavePostClick = async (postId: number) => {
    try {
      await postSavePost(postId);
      setIsSaved(!isSaved);

      // const title = isSaved ? "게시글 저장 취소" : "게시글 저장 완료";

      // Swal.fire({
      //   position: "center",
      //   icon: "success",
      //   title: title,
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
    } catch (err: any) {
      if (err.response.status === 400) {
        const message = "이미 저장된 게시글 입니다";
        alert(message);
      }
      console.error("save post:", err);
    }
  };

  return (
    <>
      <PostIcons>
        <FavoriteIcon
          onClick={() => handleLikePostClick(post.postId)}
          isLiked={isLiked}
        />
        <Link
          href={`/post/${post.postId}/comments`}
          style={{ display: "flex" }}
        >
          <span>
            <Image src={comment} alt="comments-page" width={24} height={24} />
          </span>
        </Link>
        <Link href="/direct/new" style={{ display: "flex" }}>
          <span>
            <Image src={direct} alt="direct-page" width={24} height={24} />
          </span>
        </Link>
        <SaveIcon
          onClick={() => handleSavePostClick(post.postId)}
          isSaved={isSaved}
        />
      </PostIcons>
    </>
  );
};

export default PostIconContainer;

const PostIcons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4px;
  padding: 6px 0 8px;
  height: 54px;

  span {
    width: 40px;
    height: 40px;
    padding: 8px;
    cursor: pointer;
  }
`;
