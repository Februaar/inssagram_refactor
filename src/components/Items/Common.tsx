import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { noProfile } from "@/images";

interface CommonItemProps {
  member: any;
  customContent: React.ReactNode;
}

const CommonItem: React.FC<CommonItemProps> = ({ member, customContent }) => {
  return (
    <ItemContainer key={member.id}>
      <div className="item-container">
        <div className="item-details">
          <div className="account-area">
            <div className="image">
              <Link
                href={`/${member.id}`}
                style={{ width: "44px", height: "44px" }}
                passHref
              >
                <Image
                  src={member.image ? member.image : noProfile}
                  alt="프로필 이미지"
                  width={44}
                  height={44}
                  style={{ borderRadius: "100%" }}
                />
              </Link>
            </div>
          </div>
          <InfosArea>
            <div className="details-area">
              <div className="details">
                <div className="infos">
                  <Link
                    href={`/${member.id}`}
                    style={{ display: "inline", cursor: "pointer" }}
                  >
                    <span className="nickname">{member.nickname}</span>
                  </Link>
                  {/* <span className="dot">·</span>
                    <span className="status">{member.status ? "팔로우" : "팔로잉"}</span> */}
                </div>
                <div className="desc">
                  <span>{member.description}</span>
                </div>
              </div>
            </div>
          </InfosArea>
          <Props>{customContent}</Props>
        </div>
      </div>
    </ItemContainer>
  );
};

export default CommonItem;

const ItemContainer = styled.div`
  display: block;
  width: 100%;
  max-width: 100%;
  height: 60px;

  .item-container {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    overflow-y: visible;
    overflow-x: visible;
    padding: 8px 16px;

    .item-details {
      position: relative;
      display: flex;
      flex-wrap: nowrap;
      flex-shrink: 0;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      z-index: 0;

      .account-area {
        position: relative;
        min-width: 0;
        max-width: 100%;
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        align-selft: center;

        .image {
          position: static;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          flex-grow: 0;
          align-items: stretch;
          justify-content: flex-start;
          align-self: auto;
          margin-right: 12px;
          overflow-y: visible;
          overflow-x: visible;
        }
      }
    }
  }
`;

const InfosArea = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  flex-basis: auto;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
  min-width: 0;
  height: 36px;

  .details-area {
    position: relative;
    display: flex;
    flex-shrink: 0;
    flex-grow: 1;
    flex-direction: column;
    min-width: 0;
    max-width: 100%;

    .details {
      position: static;
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      align-self: auto;
      align-items: flex-start;
      justify-content: flex-start;
      min-width: 0;
      min-height: 0;
      overflow-y: visible;
      overflow-x: visible;

      .infos {
        position: static;
        display: flex;
        flex-shrink: 0;
        flex-grow: 0;
        flex-direction: row;
        align-self: auto;
        align-items: stretch;
        justify-content: flex-start;
        cursor: pointer;
        overflow-y: visible;
        overflow-x: visible;

        .nickname {
          position: static;
          display: inline-block;
          overflow-y: visible;
          overflow-x: visible;
        }

        .dot {
          position: static;
          display: inline-block;
          flex-shrink: 0;
          flex-grow: 0;
          align-self: auto;
          align-items: stretch;
          padding: 0 4px;
        }

        .status {
          position: relative;
          display: inline-block;
          padding: 0;
          color: #92a8d1;
        }
      }

      .desc {
        position: relative;
        display: block;
        word-wrap: break-word;
        word-break: break-word;
        white-space: pre-line;
        color: #737373;
        font-weight: 400;
        line-height: 18px;
        min-width: 0;
        max-width: 100%;
        overflow-y: visible;
        overflow-x: visible;

        span {
          display: block;
          color: #737373;
          font-weight: 400;
          text-overflow: ellipsis;
          word-wrap: break-word;
          word-break: break-word;
          white-space: nowrap;
          max-width: 100%;
          overflow-y: hidden;
          overflow-x: hidden;
        }
      }
    }
  }
`;

const Props = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-self: center;
  min-width: 0;
  max-width: 100%;
`;
