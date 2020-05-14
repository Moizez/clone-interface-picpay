import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';

// import component buttonde pagamento
import PayButton from './components/PayButton';

//Importando telas
import Home from './pages/Home';
import Pay from './pages/Pay';
import Wallet from './pages/Wallet';
import Notification from './pages/Notification';
import Settings from './pages/Setting';

const Tab = createBottomTabNavigator();

// fazendo chamada dos icons de acordo com a page
const icons = {
  Home: {
    lib: IconAnt,
    name: 'home',
  },
  Wallet: {
    lib: IconAnt,
    name: 'creditcard',
  },
  // Pay: {
  //   lib: IconAnt,
  //   name: 'creditcard',
  // },
  Notification: {
    lib: IconIon,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: IconAnt,
    name: 'setting',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Wallet"
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, size, focused}) => {
          if (route.name === 'Pay') {
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );
          }
          const {lib: Icon, name} = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(25,255,255,0.2)',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        //Propriedade options faz alteracoes no tab de cada tela
        options={{
          title: 'início',
        }}
      />

      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: 'carteira',
        }}
      />
      <Tab.Screen
        name="Pay"
        component={Pay}
        options={{
          title: '',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          title: 'Notificação',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Ajuste',
        }}
      />
    </Tab.Navigator>
  );
}
