import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectprofileURL, setProfileURL } from "@/redux/profileSlice";
import { UserState } from "@/types/UserTypes";
import styled from "styled-components";
import putUserInfo from "@/services/userInfo/putUserInfo";

interface EditInputProps {
  user: UserState;
  onImageUpload: () => Promise<string>;
}

const EditInput: React.FC<EditInputProps> = ({ user, onImageUpload }) => {
  const profileURL = useSelector(selectprofileURL);
  const router = useRouter();
  const [job, setJob] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = async (
    id: any,
    nickname: string,
    job: string,
    description: string,
    image: string
  ) => {
    try {
      const imageUrl = await onImageUpload();
      setProfileURL(imageUrl);

      await putUserInfo(id, nickname, job, description, imageUrl);
      router.push(`/${id}`);
    } catch (err) {
      console.error("error updating user info:", err);
    }
  };

  return (
    <>
      {user && (
        <>
          <JobContainer>
            <div className="big-title">
              <span>직업</span>
            </div>
            <JobInput
              type="text"
              placeholder="직업"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </JobContainer>
          <EditContainer method="POST">
            <div className="edit-area">
              <div className="description">
                <label>
                  <span>소개</span>
                </label>
                <DescInput
                  placeholder="소개"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <div className="count">
                  <span>0 / 150</span>
                </div>
              </div>
            </div>
            <div className="submit-area">
              <div
                onClick={() =>
                  handleSubmit(
                    user.member_id,
                    user.nickname,
                    job,
                    description,
                    profileURL!
                  )
                }
                className="submit-button"
              >
                제출
              </div>
            </div>
          </EditContainer>
        </>
      )}
    </>
  );
};

export default EditInput;

const JobContainer = styled.div`
  position: static;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  flex-direction: column;
  align-self: auto;
  align-items: stretch;
  justify-content: flex-start;
  margin-bottom: 16px;
  overflow-y: visible;
  overflow-x: visible;
  background-color: transparent;

  .big-title {
    position: static;
    display: flex;
    flex-shrink: 0;
    flex-grow: 0;
    flex-direction: column;
    align-self: auto;
    align-items: stretch;
    justify-content: flex-start;
    padding: 16px 0;
    overflow-y: visible;
    overflow-x: visible;
    font-weight: 700;
    background-color: transparent;

    span {
      position: relative;
      display: block;
      min-width: 0;
      max-width: 100%;
      line-height: 20px;
      white-space: pre-line;
      word-break: break-word;
      font-size: 16px;
      font-weight: 700;
      background-color: transparent;
      overflow-y: visible;
      overflow-x: visible;
    }
  }
`;

const JobInput = styled.input`
  font-size: 1rem;
  line-height: 20px;
  width: 100%;
  padding: 10px 16px;
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  margin: 0;
  background-color: #efefef;
  overflow-y: visible;
  overflow-x: visible;
`;

const EditContainer = styled.form`
  margin: 0;
  padding: 0;

  .edit-area {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 16px;
    overflow-y: visible;
    overflow-x: visible;

    .description {
      position: relative;
      display: flex;
      flex-shrink: 0;
      flex-grow: 0;
      flex-direction: column;
      align-self: auto;
      align-items: stretch;
      justify-content: flex-start;
      overflow-y: visible;
      overflow-x: visible;

      label {
        cursor: default;
        font-size: 12px;
        font-weight: 600;
        vertical-align: middle;

        span {
          position: relative;
          display: block;
          min-width: 0;
          max-width: 100%;
          line-height: 20px;
          white-space: pre-line;
          word-break: break-word;
          font-size: 16px;
          font-weight: 700;
          padding: 16px 0;
          background-color: transparent;
          overflow-y: visible;
          overflow-x: visible;
        }
      }
    }
  }

  .submit-area {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;

    .submit-button {
      position: relative;
      display: flex;
      flex-shrink: 0;
      flex-basis: auto;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 253px;
      min-width: 0;
      height: 44px;
      min-height: 0;
      margin-top: 16px;
      padding: 0 20px;
      font-size: 14px;
      font-weight: 600;
      line-height: 14px;
      color: #ffffff;
      text-align: center;
      text-overflow: ellipsis;
      letter-spacing: 1px;
      background-color: #92a8d1;
      border: 1px solid rgb(0, 0, 0, 0.4);
      border-radius: 8px;
    }
  }
`;

const DescInput = styled.textarea`
  heigh: 40px;
  padding: 10px 80px 10px 16px;
  font-size: 1rem;
  line-height: 20px;
  resize: none;
  border-radius: 12px;
  border: 1px solid #dbdfe4;

  .count {
    position: absolute;
    bottom: 10px;
    right: 16px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-grow: 0;
    align-self: auto;
    align-items: stretch;
    justify-content: flex-start;

    span {
      position: relative;
      display: block;
      min-width: 0;
      max-width: 100%;
      line-height: 16px;
      white-space: pre-line;
      word-wrap: break-word;
      word-break: break-word;
      color: #737373;
      font-size: 12px;
      font-weight: 400;
    }
  }
`;

const SubmitArea = styled.div``;

const Submit = styled.div``;
