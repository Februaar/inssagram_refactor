import styled from "styled-components";

const DirectItem = () => {
  return (
    <>
      <Message>
        <div className="content">메세지</div>
        <div className="content">메세지</div>
        <div className="content">메세지</div>
        <div className="content">메세지</div>
        <div className="content">메세지</div>
        <div className="content">메세지</div>
        <div className="content">메세지</div>
        <div className="content">메세지</div>
        <div className="content">메세지</div>
        <div className="content">메세지</div>
        <div className="content">메세지</div>
        <div className="content">메세지</div>
        <div className="content">메세지</div>
        <div className="content">메세지</div>
        <div className="content">메세지</div>
        <div className="content">메세지</div>
        <div className="content">메세지</div>
        <div className="content">메세지</div>
      </Message>
    </>
  );
};

export default DirectItem;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;

  .content {
    color: #ffffff;
    align-self: flex-end;
    max-width: 245px;
    border-radius: 8px;
    background-color: #92a8d1;
    padding: 8px;
    margin: 4px;
  }
`;
