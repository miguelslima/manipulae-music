import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-top: 90px;

  @media screen and (max-width: 480px) {
    margin-top: 140px;
  }
`;

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;

export const BackButton = styled.div`
  margin-top: 20px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    margin-left: 10px;
    font-size: 20px;
  }
`;

export const Input = styled.input`
  width: 400px;
  height: 30px;

  padding: 20px;

  border: 1px solid #ddd;

  border-radius: 10px;
  font-size: 20px;

  @media screen and (max-width: 480px) {
    width: 300px;
    margin-bottom: 20px;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  font-size: 20px;

  color: #95d7d3;
  background-color: #aaa;

  margin-left: 20px;
  border-radius: 10px;

  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 300px;
    margin-left: 0px;
  }
`;

export const TitleSearch = styled.h3`
  margin-top: 30px;
`;

export const ContainerAlbum = styled.div`
  margin: 0px 10px;

  img {
    border-radius: 15px;
  }

  h3 {
    width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    color: #aaa;
  }
`;

export const ContainerSearchTrack = styled.div`
  width: 100%;
  margin-top: 30px;
`;
