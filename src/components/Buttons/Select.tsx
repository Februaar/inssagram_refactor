import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { uncheck } from "@/images/index";

interface SelectButtonProps {
  onClick: () => void;
}

const SelectButton: React.FC<SelectButtonProps> = ({ onClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectAccount = () => {
    onClick();
    setIsSelected(!isSelected);
  };

  return (
    <ButtonContainer>
      <div className="select-button">
        <label>
          <div className="select-input" onClick={handleSelectAccount}>
            <Image
              src={uncheck}
              width={24}
              height={24}
              alt="select-account"
              className="checkbox"
              style={{ display: isSelected ? "block" : "none" }}
            />
          </div>
        </label>
      </div>
    </ButtonContainer>
  );
};

export default SelectButton;

const ButtonContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 100%;

  .select-button {
    position: static;
    flex-shrink: 1;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    align-self: auto;
    justify-content: flex-start;
    margin-left: 12px;
    overflow-y: visible;
    overflow-x: visible;

    label {
      position: relative;
      display: flex;
      align-items: center;
      padding: 8px 0;
      cursor: default;
      font-weight: 600;
      vertical-align: middle;

      .select-input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1px solid #dbdbdb;
        cursor: pointer;
      }
    }
  }
`;
