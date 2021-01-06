import styled from "styled-components";

export const Container = styled.div`
  margin-left: 20;
  margin-right: 20;


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
