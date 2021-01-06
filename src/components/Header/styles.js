import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 10000;
  width: 100%;

  height: 80px;
  background: ${(props) => props.theme.colors.primary};
  color: #95d7d3;
  font-size: 30px;
  font-weight: bold;

  display: flex;
  align-items: center;
  padding: 0 30px;
  padding-bottom: 10px;

  justify-content: space-between;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 480px) {
    height: auto;
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #95d7d3;
`;

export const FavoritTitle = styled.div`
  width: 30%;

  p {
    text-align: center;
    font-size: 18px;
  }
`;
