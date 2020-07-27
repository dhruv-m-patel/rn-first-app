import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { default as CommonCard } from '../../common/components/Card';

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
    <CommonCard style={{ ...styles.category, ...customStyle }} {...props}>
      {children}
    </CommonCard>
  </TouchableOpacity>
);

export default Card;
