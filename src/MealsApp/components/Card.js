import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import CardComponent from '../../common/components/Card';

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  category: {
    marginHorizontal: 10,
    borderColor: 'transparent',

  },
});

const Card = ({
  onPress,
  children,
  style: customStyle,
  ...props
}) => (
  <TouchableOpacity
    style={styles.card}
    onPress={onPress}
  >
    <CardComponent style={{ ...styles.category, ...customStyle }} {...props}>
      {children}
    </CardComponent>
  </TouchableOpacity>
);

export default Card;
