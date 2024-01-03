import Image from "next/image";
import * as SC from "@/styles/styled/modals_account";
import { noProfile } from "@/images/index";

interface AccountInfoModalProps {
  handleClose: () => void;
}

const AccountInfoModal: React.FC<AccountInfoModalProps> = ({ handleClose }) => {
  return (
    <SC.Backdrop>
      <SC.Container>
        <SC.InfoContent>
          <SC.ModalTitle>이 계정 정보</SC.ModalTitle>
          <SC.ContentArea>
            <SC.AccountArea>
              <SC.Account>
                <Image
                  src={noProfile}
                  alt="no-profile"
                  width={77}
                  height={77}
                />
              </SC.Account>
              <SC.Id>닉네임</SC.Id>
            </SC.AccountArea>
            <SC.InfoArea></SC.InfoArea>
          </SC.ContentArea>
          <SC.ModalClose onClick={handleClose}>닫기</SC.ModalClose>
        </SC.InfoContent>
      </SC.Container>
    </SC.Backdrop>
  );
};

export default AccountInfoModal;
