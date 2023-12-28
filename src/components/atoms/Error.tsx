import styled from "styled-components";

interface ErrorProps {
  message: string;
}

const Error:React.FC<ErrorProps> = (props) => {
  return <Message>{props.message}</Message>;
};

const Message = styled.p`
  margin-top: 12px;
  padding: 10px 16px;
  font-size: 16px;
`;

export default Error;
