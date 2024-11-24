
import styled from 'styled-components';

const TimersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  background-color: #f5f5f5;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Home = () => {
  return(
    <TimersContainer>
      <button>Hello</button>
    </TimersContainer>
  );
};

export default Home;

