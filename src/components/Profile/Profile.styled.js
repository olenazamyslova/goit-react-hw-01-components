import styled from 'styled-components';

export const ProfileEx = styled.div`
max-width: 512px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 5px 5px 15px 5px #b5b4b4;

    & .userAvatar{
        border-radius: 50%;
    background-color: grey;
    box-shadow: 5px 5px 15px 5px grey;
    }

    & .mainInfo{
        text-align: center;
    }
    .descText{
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        gap: 10px;
        padding: 10px;
        background-color: grey;

    }
    .statisticInfo{
      gap: 10px;
    }
    .numbers{
      padding-right: 5px;
    }
`;
