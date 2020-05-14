import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;
export const Header = styled(LinearGradient)`
  height: 250px;
  padding: 15px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const HeaderContainerView = styled.View`
  justify-content: flex-end;
  flex-direction: row;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
export const BtnGraph = styled.TouchableOpacity`
  border: 1px;
  border-color: #fff;
  width: 35px;
  height: 35px;
  border-radius: 17px;
  justify-content: center;
  align-items: center;
`;
export const BtnGraphNotion = styled.View`
  background: #f66;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-right: -15px;
  margin-top: -5px;
  z-index: 90;
`;

export const BalaneceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;
export const Value = styled.Text`
  font-size: 38px;
  color: #fff;
  font-weight: normal;
`;
export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;
export const Info = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;
export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px;
  border-color: rgba(255, 255, 255, 0.6);
  width: 150px;
  height: 45px;
  border-radius: 25px;
  margin: 0 5px;
`;
export const ActionLabel = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
`;
export const UseBalance = styled.View`
  background: #1c1c1e;
  flex-direction: row;
  height: 50px;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
`;
export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
export const ContainerScroll = styled.ScrollView``;
export const PaymetMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymetMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
`;
export const Card = styled.View`
  background: #1e232a;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;
export const CardDetails = styled.View`
  flex: 1;
  margin-right: 30px;
`;
export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
export const CardeInfo = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 15px;
`;
export const Img = styled.Image`
  width: 60px;
`;
export const AddBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;

export const AddLabel = styled.Text`
  color: #0db060;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
`;
export const UseTicketContainer = styled.View`
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;
export const UseTicketBtn = styled.TouchableOpacity`
  flex-direction: row;
`;
export const UseTicketLabel = styled.Text`
  color: #0db060;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  text-decoration-line: underline;
`;
