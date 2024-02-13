import Image from "next/image";
import styled from "styled-components";
import { noProfile } from "@/images";
import { SearchResultData } from "@/types/SearchTypes";
import SelectButton from "@/components/Buttons/Select";

interface DirectListItemProps {
  result: SearchResultData;
  onClick: (selectedAccount: SearchResultData) => void;
}

const DirectListItem: React.FC<DirectListItemProps> = ({ result, onClick }) => {
  const handleClick = () => {
    onClick(result);
  };

  return (
    <ItemContainer>
      <div className="container">
        <div className="item-detail">
          <div className="item">
            <div className="profile-img">
              <Image
                src={result.image ? result.image : noProfile}
                alt="profile"
                width={44}
                height={44}
                style={{ borderRadius: "100%" }}
              />
            </div>
            <div className="detail-area">
              <div className="details">
                <div className="nickname">
                  <span>{result.nickName}</span>
                </div>
                <span className="job">{result.job}</span>
              </div>
            </div>
            <SelectButton onClick={handleClick} />
          </div>
        </div>
      </div>
    </ItemContainer>
  );
};

export default DirectListItem;

const ItemContainer = styled.div`
  position: relative;
  display: block;
  flex-basis: auto;
  flex-shrink: 0;
  min-height: 0;
  width: 100%;
  max-width: 100%;
  z-index: 0;

  .container {
    position: static;
    flex-grow: 1;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    padding: 8px 16px;
    overflow-y: visible;
    overflow-x: visible;

    .item-detail {
      position: relative;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      min-width: 0;

      .item {
        position: relative;
        flex-shrink: 0;
        flex-wrap: nowrap;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .profile-img {
          position: relative;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-self: center;
          min-width: 0;
          max-width: 100%;
          margin-right: 12px;
        }

        .detail-area {
          position: relative;
          flex-shrink: 1;
          flex-grow: 1;
          flex-wrap: wrap;
          flex-basis: auto;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          min-width: 0;
          z-index: 0;

          .details {
            position: relative;
            flex-grow: 1;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            min-width: 0;
            min-height: 0;
            align-self: auto;
            align-items: flex-start;

            .nickname {
              position: static;
              flex-shrink: 0;
              flex-grow: 0;
              display: flex;
              flex-direction: row;
              align-self: auto;
              justify-content: flex-start;
              width: 100%;
              overflow-y: visible;
              overflow-x: visible;

              span {
                position: relative;
                display: block;
                word-wrap: break-word;
                word-break: break-word;
                white-space: pre-line;
              }
            }

            .job {
              color: #92a8d1;
              word-wrap: break-word;
              word-break: break-word;
              white-space: pre-line;
              min-width: 0;
              max-width: 100%;
            }
          }
        }
      }
    }
  }
`;
