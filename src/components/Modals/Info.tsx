import styled from "styled-components";
import LinkCopyButton from "@/components/Buttons/LinkCopy";

interface InfoModalProps {
  post: any;
  infoClick: () => void;
  handleClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({
  post,
  infoClick,
  handleClose,
}) => {
  return (
    <section>
      <Backdrop>
        <div className="modal-container">
          <div className="item-area">
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
    </section>
  );
};

export default InfoModal;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 20;

  .modal-container {
    position: relative;
    width: 77.77%;
    padding: 3px;
    border-radius: 12px;

    .item-area {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      align-items: center;

      .item {
        display: grid;
        align-items: center;
        justify-items: center;
        width: 100%;
        height: 44px;
        cursor: pointer;
        border-bottom: 1px solid #ccc;

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
`;
