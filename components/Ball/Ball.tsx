import { View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

type Props = {
  posY: number;
}

export const Ball = ({posY}: Props) => {
  return(
    <View style={[styles.container, {bottom: posY}]}>

    </View>
  );
}