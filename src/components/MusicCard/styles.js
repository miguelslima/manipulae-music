import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

export const ContainerTracks = styled.div`
  margin: 5px 10px;
  padding: 0px 20px 0 0px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 10px;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  img {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

export const TrackArtistName = styled.p`
  text-align: start;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const TrackTitle = styled.p`
  text-align: start;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Title = styled.h1`
  margin: 10px 20px;
  text-decoration: underline;
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

export const ContainerArtist = styled.div`
  margin: 0px 10px;

  img {
    border-radius: 600px;
  }

  p {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
`;
