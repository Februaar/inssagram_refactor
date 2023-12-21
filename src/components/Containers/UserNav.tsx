import styled from "styled-components";

const UserNavigation = () => {
  return (
    <>
      <Container>
        <Nav>
          <Title>게시물</Title>
          <span>6</span>
        </Nav>
        <Nav>
          <Link href="/[nickname]/followers">
            <Title>팔로워</Title>
            <span>155</span>
          </Link>
        </Nav>
        <Nav>
          <Link href="/[nickname]/following">
            <Title>팔로우</Title>
            <span>158</span>
          </Link>
        </Nav>
      </Container>
    </>
  );
};

export default UserNavigation;

const Container = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 12px 0;
  height: 60px;
  border-top: 1px solid #dbdbdb;
`;

const Nav = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 33.3%;
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 35.33px;
`;

const Title = styled.span`
  color: #737373;
`;
