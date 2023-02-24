import styled from 'styled-components';

export const StatCard = styled.div`

  margin: 30px auto;
  text-align: center;
  max-width: 500px;
  padding: 0;
   /* background-color: lightgrey; */}
    box-shadow: 5px 5px 15px 5px lightgrey;

    & .statisticTitle{
      display: flex;
      align-items:center;
      justify-content: center;
      padding: 20px;
      margin:0;
      font-size: 25px;
    }

    & .statisticList{
      list-style: none;
      display: flex;
      flex-grow: 1;
      padding:0;
      margin: 0;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      line-height: 2;
    }

    & .statisticListItem{
      padding: 15px 30px;
      background-color: lightblue;
    }
    .statisticsSpan{
      display: block;
    }
`;
