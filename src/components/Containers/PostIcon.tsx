import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PostContentData } from "@/types/PostTypes";
import postLikePost from "@/services/postInfo/postLikePost";
import postSavePost from "@/services/postInfo/postSavePost";
import Swal from "sweetalert2";
import * as SC from "@/styles/styled/containers_icon_container";
import { comment, direct } from "@/images/index";
import Favorite from "../Icons/Favorite";
import Save from "../Icons/Save";

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

      const title = isLiked ? "좋아요 취소 💔" : "좋아요 완료 ❤";

      Swal.fire({
        position: "center",
        icon: "success",
        title: title,
        width: 200,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.error("like post:", err);
    }
  };

  const handleSavePostClick = async (postId: number) => {
    try {
      await postSavePost(postId);
      setIsSaved(!isSaved);

      const title = isSaved ? "게시글 저장 취소" : "게시글 저장 완료";

      Swal.fire({
        position: "center",
        icon: "success",
        title: title,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.error("save post:", err);
    }
  };

  return (
    <>
      <SC.Container>
        <Favorite
          onClick={() => handleLikePostClick(post.postId)}
          isLiked={isLiked}
        />
        <Link
          href={`/post/${post.postId}/comments`}
          style={{ display: "flex" }}
        >
          <SC.Icon>
            <Image src={comment} alt="comments-page" width={24} height={24} />
          </SC.Icon>
        </Link>
        <Link href="/direct/new" style={{ display: "flex" }}>
          <SC.Icon>
            <Image src={direct} alt="direct-page" width={24} height={24} />
          </SC.Icon>
        </Link>
        <Save
          onClick={() => handleSavePostClick(post.postId)}
          isSaved={isSaved}
        />
      </SC.Container>
    </>
  );
};

export default PostIconContainer;
