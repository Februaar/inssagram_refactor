import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectprofileURL, setProfileURL } from "@/redux/profileSlice";
import { UserState } from "@/types/UserTypes";
import putUserInfo from "@/services/userInfo/putUserInfo";
import * as SC from "@/styles/styled/inputs_edit";

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
          <SC.JobContainer>
            <SC.JobArea>
              <SC.Job>직업</SC.Job>
            </SC.JobArea>
            <SC.EditInput
              type="text"
              placeholder="직업"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </SC.JobContainer>
          <SC.DescContainer method="POST">
            <SC.DescArea>
              <SC.Description>
                <SC.Title>
                  <SC.Desc>소개</SC.Desc>
                </SC.Title>
                <SC.DescInput
                  placeholder="소개"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <SC.Text>
                  <SC.Count>0 / 150</SC.Count>
                </SC.Text>
              </SC.Description>
            </SC.DescArea>
            <SC.SubmitArea>
              <SC.Submit
                onClick={() =>
                  handleSubmit(
                    user.member_id,
                    user.nickname,
                    job,
                    description,
                    profileURL!
                  )
                }
              >
                제출
              </SC.Submit>
            </SC.SubmitArea>
          </SC.DescContainer>
        </>
      )}
    </>
  );
};

export default EditInput;
