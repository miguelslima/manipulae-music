import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  background: ${(props) => props.theme.colors.primary};
  color: #95d7d3;
  font-size: 30px;
  font-weight: bold;

  display: flex;
  align-items: center;
  padding: 0 30px;

  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #95d7d3
`;
