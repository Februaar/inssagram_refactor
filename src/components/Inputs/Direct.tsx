import { useState, useEffect, useMemo } from "react";
import { SearchResultData } from "@/types/SearchTypes";
import { debound } from "lodash";
import styled from "styled-components";

interface DirectSearchInputProps {
  onSearch: (searchValue: string) => void;
  selectedAccount: SearchResultData | null;
}

const DirectSearchInput: React.FC<DirectSearchInputProps> = ({
  onSearch,
  selectedAccount,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearch = useMemo(
    () => debounce((value: string) => onSearch(value), 500),
    [onSearch]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);


  useEffect(() => {
    if (selectedAccount) {
      setSearchValue("");
    }
  }, [selectedAccount]);

  return (
    <InputContainer>
      <div className="input-area">
        <div className="input-title">
          <span>받는 사람:</span>
        </div>
        <div className="search-area">
          {selectedAccount && (
            <div className="selected-account">
              <div className="tag">
                <p className="nickname">{selectedAccount.nickName}</p>
              </div>
            </div>
          )}
          <input
            type="text"
            placeholder="검색..."
            spellCheck="false"
            value={searchValue}
            onChange={handleInputChange}
            className="search-input"
          />
        </div>
      </div>
    </InputContainer>
  );
};

export default DirectSearchInput;

const InputContainer = styled.div`
  position: static;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-self: auto;
  justify-content: flex-start;
  height: 39px;
  border-bottom: 1px solid #dbdbdb;
  overflow-y: visible;
  overflow-x: visible;

  .input-area {
    position: static;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: auto;
    justify-content: flex-start;
    padding: 0 16px;
    max-height: 120px;
    overflow-y: auto;
    overflow-x: auto;

    .input-title {
      flex-shrink: 0;
      flex-grow: 0;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      align-self: auto;
      justify-content: flex-start;
      overflow-y: visible;
      overflow-x: visible;

      span {
        position: relative;
        max-width: 100%;
        margin: 0;
        display: block;
        font-size: 16px;
        font-weight: 600;
        word-wrap: break-word;
        word-break: break-word;
        white-space: pre-line;
      }
    }

    .search-area {
      position: static;
      flex-grow: 1;
      flex-wrap: wrap;
      display: flex;
      flex-direction: row;
      align-content: stretch;
      align-self: auto;
      min-width: 0;
      min-height: 0;
      overflow-y: visible;
      overflow-x: visible;

      .selected-account {
        flex-shrink: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        max-width: 200px;
        overflow-x: auto;

        .tag {
          margin-left: 7px;
          text-align: center;
          padding: 5px;
          border-radius: 5px;
          min-width: 60px;
          height: 26px;
          background-color: #92a8d1;

          .nickname {
            color: #ffffff;
            background-color: transparent;
          }
        }
      }

      .search-input {
        flex-grow: 1;
        line-height: 30px;
        padding: 4px 20px 4px 12px;
        overflow-y: visible;
        overflow-x: visible;
      }
    }
  }
`;
