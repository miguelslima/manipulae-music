import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1`
  margin: 10px 20px;
  text-decoration: underline;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
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

  p {
    font-size: 18px;

    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

export const TrackArtistName = styled.p`
  text-align: start;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const TrackTitle = styled.p`
  text-align: start;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
