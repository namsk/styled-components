import styled from "styled-components";

const CustomDiv = ({ dark, ...props }) => {
  return <div {...props}>{dark ? "Dark mode" : "Light mode"}</div>;
};

const StyledDiv = styled(CustomDiv)`
  background-color: ${(props) => (props.dark ? "black" : "white")};
  color: ${(props) => (props.dark ? "white" : "black")};
`;

export default StyledDiv;
