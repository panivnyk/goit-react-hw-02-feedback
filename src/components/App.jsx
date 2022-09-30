// import styled
import { Div, Button, P, Span } from 'components/App.styled';

export const App = () => {
  return (
    <Div>
      <P>Please leave feedback</P>
      <div>
        <Button>Good</Button>
        <Button>Neutral</Button>
        <Button>Bad</Button>
      </div>
      <P>Statistics:</P>
      <Span>Good:</Span>
      <Span>Neutral:</Span>
      <Span>Bad:</Span>
    </Div>
  );
};
