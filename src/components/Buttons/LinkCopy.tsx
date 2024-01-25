interface LinkCopyButtonProps {
  linkCopy: string;
}

const LinkCopyButton: React.FC<LinkCopyButtonProps> = ({ linkCopy }) => {
  const copyToClipboard = () => {
    const tempInput = document.createElement("input");
    tempInput.value = linkCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("링크가 복사되었습니다.");
  };

  return <div onClick={copyToClipboard}>링크 복사</div>;
};

export default LinkCopyButton;
