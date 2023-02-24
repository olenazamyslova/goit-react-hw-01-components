import styled from 'styled-components';

export const FriendCardItem = styled.div`
  padding: 15px;
  display: flex;
  background-color: ${prop => {
    if(prop.color === "true") {
      return `lightgreen`
    } else {
      return `pink`
    }
  }};
  border: 1px solid grey;


  & .FriendAvatar{
    margin-right: 15px;
  }
`;
export const UserSpan = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: auto 0;
  margin-right: 15px;
  background-color: ${prop => {
    if(prop.color === "true") {
      return `green`
    } else {
      return `red`
    }
  }};
  `;

