import React from 'react';
import IconMT from 'react-native-vector-icons/MaterialIcons';
import {Btn, Label} from './styles';

const PayButton = ({onPress, focused}) => {
  return (
    <>
      <Btn
        colors={focused ? ['#fff', '#ccc'] : ['#00fc6c', '#00ac4a']}
        onPress={onPress}>
        <IconMT
          name="attach-money"
          size={30}
          color={focused ? '#000' : '#fff'}
        />
        <Label focused={focused}>Pagar</Label>
      </Btn>
    </>
  );
};

export default PayButton;

// var styles = StyleSheet.create({
//   linearGradient: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
