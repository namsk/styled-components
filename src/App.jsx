import StyledComponents from "./styled/StyledComponents";
import PropsComponents from "./styled/PropsComponents";
import StyledDiv from "./styled/UserPropsComponents";

function App() {
  return (
    <div>
      <h1>StyledComponents</h1>
      <StyledComponents />
      <h1>PropsComponents</h1>
      <PropsComponents />
      <h1>사용자 정의 prop 사용</h1>
      <StyledDiv dark={true} />
      <StyledDiv dark={false} />
    </div>
  );
}

export default App;
