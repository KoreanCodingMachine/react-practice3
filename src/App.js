import { React } from 'react';
import StyledComponent from './component/StyledComponent';
import Average from './component/Average';
import Counter from './component/Counter';
import EventPractice from './component/EventPractice';
import Info from './component/info';
import IterationSample from './component/IterationSample';
import MyComponent from './MyComponent';

function App() {
  const number = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };
  return (
    <>
      {/* <MyComponent name='react' favoriteNumber={1}>
        리액트
      </MyComponent>
      <EventPractice />
      <IterationSample />
      <Counter />
      <Info />
      <Average /> */}
      <StyledComponent />
    </>
  );
}

export default App;
