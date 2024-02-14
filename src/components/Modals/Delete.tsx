import styled from "styled-components";

interface DeleteModalProps {
  onDelete: () => void;
  handleClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ onDelete, handleClose }) => {
  return (
    <Backdrop>
      <div className="modal-container ">
        <div className="item-area">
          <div className="item">
            <button onClick={onDelete} className="delete">
              삭제하기
            </button>
          </div>
          <div className="item">
            <button onClick={handleClose}>취소</button>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default DeleteModal;

export const Backdrop = styled.div`
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
      grid-template-rows: repeat(2, 1fr);
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

        .delete {
          color: #ff0000;
        }
      }
    }
  }
`;
