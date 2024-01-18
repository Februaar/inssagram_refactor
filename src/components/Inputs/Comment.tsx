import Image from "next/image";
import * as SC from "@/styles/styled/inputs_comment";
import { noProfile } from "@/images/index";

const CommentInput = () => {
  return (
    <SC.InputContainer>
      <SC.InputArea>
        <SC.MyProfile>
          <Image
            src={noProfile}
            alt="profile-image"
            width={32}
            height={32}
            style={{ borderRadius: "100%" }}
          />
        </SC.MyProfile>
        <SC.InputForm>
          <SC.Input>
            <SC.Text aria-label="댓글 달기..." placeholder="댓글 달기..." />
            <SC.Submit>게시</SC.Submit>
          </SC.Input>
        </SC.InputForm>
      </SC.InputArea>
    </SC.InputContainer>
  );
};

export default CommentInput;
