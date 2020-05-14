import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
export const Btn = styled(LinearGradient)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${({focused}) => (focused ? '#000' : '#fff')};
  font-size: 12px;
`;
