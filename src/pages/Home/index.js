import React from 'react';
import IconsMt from 'react-native-vector-icons/MaterialCommunityIcons';
import IconsAnt from 'react-native-vector-icons/AntDesign';

import {
  Wrapper,
  Header,
  Balance,
  BalanceTitle,
  BalanceContainer,
  HeaderRight,
  Container,
} from './styles';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <IconsMt name="qrcode-scan" size={30} color="#10c86e" />
          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>
          <HeaderRight>
            <IconsAnt name="gift" size={30} color="#10c86e" />
            <IconsMt name="ticket-percent" size={30} color="#10c86e" />
          </HeaderRight>
        </Header>
        <Suggestions />
        <Activities />
        <Tips />
        {/* erro nessa linha */}
        <Banner />
        {/* 👆🏽👆🏽👆🏽👆🏽👆🏽 */}
      </Container>
    </Wrapper>
  );
};

export default Home;
