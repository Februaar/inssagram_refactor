import styled from "styled-components";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = (props) => {
  return <Message>{props.message}</Message>;
};

const Message = styled.p`
  font-size: 16px;
  margin-top: 12px;
  padding: 10px 16px;
`;

export default Error;
