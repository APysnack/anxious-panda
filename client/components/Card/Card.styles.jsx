import styled from 'styled-components/native';

export const CardContainer = styled.View`
  background-color: red;
  border-radius: 10px;
  width: 200px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CardImage = styled.Image`
  width: 90%;
  height: 50%;
`;

export const CardStats = styled.View`
  position: absolute;
  bottom: 10px;
  align-items: center;
`;

export const CardName = styled.View`
  position: absolute;
  top: 15px;
  align-items: center;
`;

export const CardBackImage = styled.Image`
  width: 100%;
  height: 100%;
`;
