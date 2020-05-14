import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/Entypo';
import IconsEye from 'react-native-vector-icons/Feather';
import IconsFA from 'react-native-vector-icons/FontAwesome';
import IconsAt from 'react-native-vector-icons/AntDesign';
import IconsMt from 'react-native-vector-icons/MaterialCommunityIcons';
import {Switch} from 'react-native';
import {
  Wrapper,
  Header,
  HeaderContainer,
  HeaderContainerView,
  Title,
  BtnGraph,
  BtnGraphNotion,
  BalaneceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  ContainerScroll,
  PaymetMethods,
  PaymetMethodsTitle,
  Card,
  CardDetails,
  CardTitle,
  CardeInfo,
  Img,
  CardBody,
  AddBtn,
  AddLabel,
  UseTicketContainer,
  UseTicketBtn,
  UseTicketLabel,
} from './styles';
import creditCard from '../../images/credit-card.png';

const Wallet = () => {
  const [notionGraph, setNotionGraph] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibleCash() {
    setIsVisible((prevSate) => !prevSate);
  }
  function handleToggleUseBalance() {
    setUseBalance((prevSate) => !prevSate);
  }

  return (
    <Wrapper>
      <Header
        colors={useBalance ? ['#52E78C', '#1AB563'] : ['#d3d3d3', '#686868']}>
        <HeaderContainerView>
          {notionGraph && (
            <BtnGraphNotion>
              <Title>1</Title>
            </BtnGraphNotion>
          )}

          <BtnGraph>
            <Icons name="bar-graph" size={20} color="#fff" />
          </BtnGraph>
        </HeaderContainerView>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalaneceContainer>
            <Value>
              R$ <Bold>{isVisible ? '0,00' : '🙈'}</Bold>
            </Value>
            <EyeButton onPress={handleToggleVisibleCash}>
              <IconsEye
                name={isVisible ? 'eye' : 'eye-off'}
                size={28}
                color="#fff"
              />
            </EyeButton>
          </BalaneceContainer>
          <Info>Seu saldo esta rendendo 100% no CDI</Info>
          <Actions>
            <Action>
              <IconsMt name="cash" size={28} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <IconsFA name="bank" size={20} color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>
      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
        <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
      </UseBalance>
      <ContainerScroll>
        <PaymetMethods>
          <PaymetMethodsTitle>Forma de pagamento</PaymetMethodsTitle>
        </PaymetMethods>
        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de crédito</CardTitle>
              <CardeInfo>
                Cadsatre seu cartão para poder fazer pagamentos memso quando não
                tiver saldo no seu PicPay
              </CardeInfo>
            </CardDetails>
            <Img source={creditCard} resizeMode="contain" />
          </CardBody>
          <AddBtn>
            <IconsAt name="pluscircleo" size={30} color="#0db060" />
            <AddLabel>Adicionar cartão de credito</AddLabel>
          </AddBtn>
        </Card>
        <UseTicketContainer>
          <UseTicketBtn>
            <IconsMt name="ticket-outline" size={20} color="#0db060" />
            <UseTicketLabel>Usar código promocional</UseTicketLabel>
          </UseTicketBtn>
        </UseTicketContainer>
      </ContainerScroll>
    </Wrapper>
  );
};

export default Wallet;
