import Image from "next/image";
import { PostContentData } from "@/types/PostTypes";
import * as SC from "@/styles/styled/modals_account";
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
        <SC.Backdrop>
          <SC.ModalContainer>
            <SC.ModalContent>
              <SC.Title>이 계정 정보</SC.Title>
              <SC.Content>
                <SC.AccountArea>
                  <SC.Profile>
                    <Image
                      src={writer.memberImage ? writer.memberImage : noProfile}
                      alt="no-profile"
                      width={77}
                      height={77}
                      style={{ borderRadius: "100%" }}
                    />
                  </SC.Profile>
                  <SC.Nickname>{writer.nickName}</SC.Nickname>
                </SC.AccountArea>
                <SC.InfoArea>
                  <Image
                    src={calendar}
                    alt="no-profile"
                    width={22}
                    height={22}
                  />
                  <div>
                    <SC.Info>가입한 날짜</SC.Info>
                    <SC.Detail>2023년 10월</SC.Detail>
                  </div>
                </SC.InfoArea>
                <SC.InfoArea>
                  <Image
                    src={homePin}
                    alt="no-profile"
                    width={22}
                    height={22}
                  />
                  <div>
                    <SC.Info>계정 기본 위치</SC.Info>
                    <SC.Detail>대한민국</SC.Detail>
                  </div>
                </SC.InfoArea>
              </SC.Content>
              <SC.ModalClose onClick={handleClose}>닫기</SC.ModalClose>
            </SC.ModalContent>
          </SC.ModalContainer>
        </SC.Backdrop>
      )}
    </>
  );
};

export default AccountInfoModal;
