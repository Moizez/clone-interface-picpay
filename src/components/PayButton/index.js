import React from 'react';
import {StyleSheet} from 'react-native';
import IconMT from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Btn, Label} from './styles';

const PayButton = ({onPress, focused}) => {
  return (
    <>
      <Btn onPress={onPress}>
        <LinearGradient
          colors={focused ? ['#fff', '#ccc'] : ['#00fc6c', '#00ac4a']}
          style={styles.linearGradient}>
          <IconMT
            name="attach-money"
            size={30}
            color={focused ? '#000' : '#fff'}
          />
          <Label focused={focused}>Pagar</Label>
        </LinearGradient>
      </Btn>
    </>
  );
};

export default PayButton;

var styles = StyleSheet.create({
  linearGradient: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
