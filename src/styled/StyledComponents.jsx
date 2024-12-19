import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background: grey;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: white;
  text-align: center;
`;

function StyledComponents() {
  return (
    <Wrapper>
      <Title>Styled Components</Title>
    </Wrapper>
  );
}

export default StyledComponents;
