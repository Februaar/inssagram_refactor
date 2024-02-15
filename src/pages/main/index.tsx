import { useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setPosts } from "@/redux/postSlice";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoryItem from "@/components/Items/Story";
import PostItem from "@/components/Items/Post";
import Error from "@/components/atoms/Error";
import getPostAll from "@/services/postInfo/getPostAll";
import getFollowingPost from "@/services/postInfo/getFollowingPost";
import styled from "styled-components";

const MainPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const posts = useSelector((state: RootState) => state.post.posts);

  const fetchPostAllData = useCallback(async () => {
    try {
      // 전체 게시글
      // const res = await getPostAll();

      // 팔로우하는 계정 게시글
      const res = await getFollowingPost();
      dispatch(setPosts(res.data));
    } catch (err) {
      console.error("error fetching post data:", err);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchPostAllData();
  }, [fetchPostAllData]);

  const handleSearchClick = () => {
    router.push("/explore/search");
  };

  return (
    <section>
      <Header />
      <MainContainer>
        <StoryItem />
        {posts.length > 0 ? (
          posts &&
          posts.map((post) => <PostItem key={post.postId} post={post} />)
        ) : (
          <>
            <div className="error-area">
              <Error message="🐯 친해지고 싶은 동료들을 팔로우 해보세요" />
              <div onClick={handleSearchClick} className="search-button">
                <span>둘러보기</span>
              </div>
            </div>
          </>
        )}
      </MainContainer>
      <Footer />
    </section>
  );
};

export default MainPage;

const MainContainer = styled.div`
  padding-top: 50px;
  margin-bottom: 20px;

  .error-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 18px 8px;

    .search-button {
      background-color: #92a8d1;
      width: 50%;
      display: flex;
      justify-content: center;
      border-radius: 8px;
      margin-top: 28px;

      span {
        padding: 8px;
        color: #ffffff;
        background-color: transparent;
      }
    }
  }
`;
