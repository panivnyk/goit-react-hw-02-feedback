import styled from '@emotion/styled';
export const Div = styled.div`
  border: 1px solid;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin-top: 20px;
  margin-left: 20px;
  padding: 25px;
`;

export const Button = styled.button`
  margin-left: 5px;
  background-color: #eee;
  font-size: 20px;
  width: 100px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  :hover,
  :focus {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
    background-color: #ddd;
  }
`;

export const PHeader = styled.p`
  margin-top: 0;
  font-size: 24px;
  font-weight: 700;
`;

export const PStat = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 30px;
`;

export const Span = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
`;

export const SpanTotal = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
`;

export const SpanPercentage = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
`;
