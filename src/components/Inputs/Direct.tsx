import styled from "styled-components";

const DirectSearchInput = () => {
  return (
    <InputContainer>
      <div className="input-area">
        <div className="input-title">
          <span>받는 사람:</span>
        </div>
        <div className="search-area">
          <input
            className="search-input"
            type="text"
            placeholder="검색..."
            spellCheck="false"
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
