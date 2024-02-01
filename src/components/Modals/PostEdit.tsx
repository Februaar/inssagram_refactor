import styled from "styled-components";

interface PostEditModalProps {
  handleClose: () => void;
}

const PostEditModal: React.FC<PostEditModalProps> = ({ handleClose }) => {
  return (
    <Backdrop>
      <div className="modal-container">
        <div className="item-area">
          <div className="item" onClick={handleClose}>
            취소
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
    width: 77.77%;
    padding: 3px;
    border-radius: 12px;

    .item-area {
      display: grid;
      grid-template-rows: repeat(5, 1fr);
      align-items: center;

      .item {
        display: grid;
        justify-items: center;
        align-items: center;
        width: 100%;
        height: 44px;
        cursor: pointer;
        border-bottom: 1px solid #ccc;
      }
    }
  }
`;
