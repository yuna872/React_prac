import styled from "styled-components";

interface newButtonProps {
  label: string;
  size: "small" | "large";
  onClick?: () => void;
}

function NewButton({ label, size, onClick }: newButtonProps) {
  // const handleClick = () => console.log("안녕");
  return (
    <NewButtonStyle size={size}>
    {/* <NewButtonStyle size={size} onClick={() => console.log('hi')}> */}
      <p>{label}</p>
    </NewButtonStyle>
  );
}

const NewButtonStyle = styled.div<{ size: "small" | "large" }>`
  background-color: pink;
  color: white;
  width: ${(props) => (props.size === "small" ? "75px" : "90px")};
  height: ${(props) => (props.size === "small" ? "30px" : "40px")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default NewButton;
