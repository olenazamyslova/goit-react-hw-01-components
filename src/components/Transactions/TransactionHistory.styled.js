import styled from 'styled-components';

export const Transactions = styled.div`
  margin-top: 20px;

  & .TransTable{
    border: 1px solid grey;
    border-collapse: collapse;
    width: 500px;
    text-align: center;
    margin: 0 auto;
    box-shadow: 5px 5px 15px 5px lightgrey;
  }
  & .TableHead{
    border: 1px solid grey;
    border-collapse: collapse;
    background-color: lightblue;
  }
  & .TableCells{
    border: 1px solid grey;
    border-collapse: collapse;
    background-color: lavender;
  }
`
