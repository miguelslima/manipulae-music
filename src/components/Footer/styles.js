import styled from "styled-components";

export const Container = styled.footer`
  height: 60px;
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  color: #95d7d3;
  font-size: 30px;
  font-weight: bold;

  padding: 15px 0;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 12px;
      width: 12px;
      margin: 0 5px;
    }

    a {
      text-decoration: none;

      margin-left: 5px;
    }
  }
`;
