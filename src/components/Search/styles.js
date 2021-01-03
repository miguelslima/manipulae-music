import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;

  padding: 20px;

  border: 1px solid #ddd;

  border-radius: 10px;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  font-size: 20px;

  color: #95d7d3;
  background-color: #aaa;

  margin-left: 20px;
  border-radius: 10px;
`;
