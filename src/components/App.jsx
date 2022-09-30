// import styled
import { Div, Button, PHeader, PStat, Span } from 'components/App.styled';

export const App = () => {
  return (
    <Div>
      <PHeader>Please leave feedback</PHeader>
      <div>
        <Button>Good</Button>
        <Button>Neutral</Button>
        <Button>Bad</Button>
      </div>
      <PStat>Statistics:</PStat>
      <Span>Good:</Span>
      <Span>Neutral:</Span>
      <Span>Bad:</Span>
    </Div>
  );
};
