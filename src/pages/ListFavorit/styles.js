import styled from "styled-components";

export const Container = styled.div`
  margin-top: 120px;
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
