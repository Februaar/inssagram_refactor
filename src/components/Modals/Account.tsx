import Image from "next/image";
import { PostContentData } from "@/types/PostTypes";
import styled from "styled-components";
import { noProfile, calendar, homePin } from "@/images/index";

interface AccountInfoModalProps {
  writer: PostContentData | undefined;
  handleClose: () => void;
}

const AccountInfoModal: React.FC<AccountInfoModalProps> = ({
  writer,
  handleClose,
}) => {
  return (
    <>
      {writer && (
        <Backdrop>
          <div className="modal-container">
            <div className="modal-content">
              <p className="modal-title">이 계정 정보</p>
              <div className="content-area">
                <div className="account">
                  <div>
                    <Image
                      src={writer.memberImage ? writer.memberImage : noProfile}
                      alt="no-profile"
                      width={77}
                      height={77}
                      style={{ borderRadius: "100%" }}
                    />
                  </div>
                  <div className="nickname">{writer.nickName}</div>
                </div>
                <div className="infos">
                  <Image
                    src={calendar}
                    alt="no-profile"
                    width={22}
                    height={22}
                  />
                  <div>
                    <p>가입한 날짜</p>
                    <span className="detail">2023년 10월</span>
                  </div>
                </div>
                <div className="infos">
                  <Image
                    src={homePin}
                    alt="no-profile"
                    width={22}
                    height={22}
                  />
                  <div>
                    <p>계정 기본 위치</p>
                    <span className="detail">대한민국</span>
                  </div>
                </div>
              </div>
              <button onClick={handleClose}>닫기</button>
            </div>
          </div>
        </Backdrop>
      )}
    </>
  );
};

export default AccountInfoModal;

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

    .modal-content {
      display: grid;
      grid-template-rows: 1fr 5fr 1fr;

      .modal-title {
        display: grid;
        justify-items: center;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
        padding: 12px 8px;
        margin-top: 5px;
        border-bottom: 1px solid #cccccc;
      }

      .content-area {
        display: grid;
        grid-template-rows: 2fr 1fr 1fr;
        align-items: center;

        .account {
          display: grid;
          justify-items: center;
          padding: 8px 12px;

          .nickname {
            display: flex;
            justify-content: center;
            width: 100%;
            padding-top: 8px;
            font-size: 16px;
            font-weight: 600;
          }
        }

        .infos {
          display: grid;
          grid-template-columns: 1fr 5fr;
          align-items: center;
          height: 100%;
          padding: 12px 20px;

          .detail {
            color: #737373;
            margin-top: 3px;
          }
        }
      }

      button {
        display: grid;
        justify-items: center;
        align-items: center;
        margin-top: 5px;
        padding: 12px 8px;
        border-top: 1px solid #ccc;
      }
    }
  }
`;