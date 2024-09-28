import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin-top: 100px;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
`;

export const Input = styled.TextInput`
  height: 40px;
  border-color: gray;
  border-width: 1px;
  margin-bottom: 8px;
  width: 100%;
  max-width: 300px;
`;

export const ErrorText = styled.Text`
  color: red;
`;
