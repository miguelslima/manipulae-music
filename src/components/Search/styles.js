import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-top: 90px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 400px;
  height: 30px;

  padding: 20px;

  border: 1px solid #ddd;

  border-radius: 10px;
  font-size: 20px;
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
`;
