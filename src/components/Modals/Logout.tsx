import styled from "styled-components";

interface LogoutModalProps {
  nickname: string;
  onClick: () => void;
  handleClose: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  nickname,
  onClick,
  handleClose,
}) => {
  return (
    <Backdrop>
      <div className="modal-container ">
        <div className="title">
          <div>
            <span className="nickname">{nickname} </span>
            <span className="Mrs">님</span>
          </div>
          <p className="text">많은 동료분과 소통해보셨나요?</p>
        </div>
        <div className="item-area">
          <div className="item">
            <button onClick={handleClose}>조금 더 둘러볼래요</button>
          </div>
          <div className="item">
            <button onClick={onClick} className="delete">
              다음에 올게요
            </button>
          </div>
          {/* <div className="item">
            <button onClick={onClick} className="delete">
              그냥 탈퇴할래요
            </button>
          </div> */}
        </div>
      </div>
    </Backdrop>
  );
};

export default LogoutModal;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 50;

  .modal-container {
    position: relative;
    display: grid;
    grid-template-rows: 1fr 0.5fr;
    width: 77.77%;
    padding: 3px;
    border-radius: 12px;

    .title {
      display: flex;
      flex-direction: column;
      padding: 12px;
      justify-content: center;
      align-items: center;

      div {
        .nickname {
          font-size: 16px;
          font-weight: 600;
          color: #92a8d1;
        }

        .Mrs {
        }
      }

      .text {
      }
    }

    .item-area {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      align-items: center;

      .item {
        display: grid;
        align-items: center;
        justify-items: center;
        width: 100%;
        height: 44px;
        cursor: pointer;
        border-top: 1px solid #cccccc;

        .delete {
          color: #ff0000;
        }
      }
    }
  }
`;
