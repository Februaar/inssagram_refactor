import Link from "next/link";
import Image from "next/image";
import * as SC from "@/styles/styled/items_common";
import { noProfile } from "@/images/index";

interface CommonItemProps {
  member: any;
  customContent: React.ReactNode;
}

const CommonItem: React.FC<CommonItemProps> = ({ member, customContent }) => {
  return (
    <>
      <SC.CommonItem key={member.id}>
        <SC.ItemContainer>
          <SC.Container>
            <SC.Account>
              <SC.AccountImg>
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
              </SC.AccountImg>
            </SC.Account>
            <SC.Info>
              <SC.InfoArea>
                <SC.DetailsArea>
                  <SC.Details>
                    <Link
                      href={`/${member.id}`}
                      style={{ display: "inline", cursor: "pointer" }}
                    >
                      <SC.Nickname>{member.nickname}</SC.Nickname>
                    </Link>
                    {/* <SC.Divide>·</SC.Divide>
                    <SC.Follow>팔로우</SC.Follow> */}
                  </SC.Details>
                  <SC.Desc>
                    <SC.Text>{member.description}</SC.Text>
                  </SC.Desc>
                </SC.DetailsArea>
              </SC.InfoArea>
            </SC.Info>
            <SC.Status>{customContent}</SC.Status>
          </SC.Container>
        </SC.ItemContainer>
      </SC.CommonItem>
    </>
  );
};

export default CommonItem;
