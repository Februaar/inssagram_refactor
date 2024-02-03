import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserState } from "@/types/UserTypes";
import { addComment } from "@/redux/commentSlice";
import { noProfile } from "@/images";
import styled from "styled-components";
import postNewComment from "@/services/postInfo/postNewComment";

interface DirectInputProps {}

const DirectInput: React.FC<DirectInputProps> = () => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [newMessage, setNewMessage] = useState<string>("");
  const isEmpty = newMessage.trim() === "";

  return (
    <InputContainer>
      <div className="container">
        <div className="input-area">
          <div role="textbox" className="input">
            <input
              value={newMessage}
              aria-label="메시지 입력..."
              placeholder="메시지 입력..."
              onChange={(e) => setNewMessage(e.target.value)}
            />
          </div>
        </div>
        {/* <div>사진공유</div> */}
        {isEmpty ? null : (
          <div
            className="submit"
            // onClick={() => handleCommentSubmit(postId, newMessage)}
          >
            보내기
          </div>
        )}
      </div>
    </InputContainer>
  );
};

export default DirectInput;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  margin: 16px;
  padding: 6px;
  border-radius: 22px;
  border: 1px solid #dbdbdb;

  .container {
    display: flex;
    align-items: center;
    padding-left: 11px;
    padding-right: 16px;
    min-height: 36px;

    .input-area {
      position: static;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      align-self: auto;
      justify-content: flex-start;
      min-height: 0;
      min-width: 0;
      margin-left: 8px;
      margin-right: 4px;
      overflow-y: visible;
      overflow-x: visible;
      background-color: transparent;

      .input {
        position: relative;
        min-width: 0;
        min-height: 20px;
        max-height: 124px;
        user-select: text;
        white-space: pre-wrap;
        word-break: break-word;
        overflow-y: auto;

        input {
          min-width: 0;
          width: 100%;
          min-height: 20px;
          max-height: 124px;
          user-select: text;
          white-space: pre-wrap;
          word-break: break-word;
          overflow-y: auto;
        }
      }
    }

    .submit {
      display: inline;
      align-items: center;
      min-width: 28px;
      width: auto;
      height: auto;
      font-weight: 600;
      text-overflow: ellipsis;
      color: #92a8d1;
      margin-right: 2px;
      cursor: pointer;
    }
  }
`;
