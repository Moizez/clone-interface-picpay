import styled from 'styled-components/native';

export const Btn = styled.TouchableWithoutFeedback`
  width: 60px;
  height: 30px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${({focused}) => (focused ? '#000' : '#fff')};
  font-size: 12px;
`;
