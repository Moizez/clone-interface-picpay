import React from 'react';
import IconsFt from 'react-native-vector-icons/Feather';
import IconsMt from 'react-native-vector-icons/MaterialCommunityIcons';
import IconsAnt from 'react-native-vector-icons/AntDesign';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

import avatar from '../../images/avatar.png';

const Activities = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@Italo</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Italo Araujo</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$: 18,00</Value>

            <Divider />

            <IconsFt name="lock" color="#fff" size={14} />
            <Date>há 2 anos</Date>
          </Details>

          <Actions>
            <Option>
              <IconsMt name="comment-outline" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <IconsAnt name="hearto" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Activities;
