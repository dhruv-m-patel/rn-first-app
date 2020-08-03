import React from 'react';
import { View, Text, FlatList, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import Screen from '../../../common/components/Screen';
import ScreenHeaderButton from '../../../common/components/ScreenHeaderButton';
import theme from '../../../common/theme';
import OrderItem from '../../components/OrderItem';

const OrdersScreen = () => {
  const { orders } = useSelector(({ order }) => order);

  return (
    <Screen>
      <FlatList
        data={orders}
        keyExtractor={item => item.orderId}
        renderItem={({ item }) => (
          <OrderItem order={item} />
        )}
      />
    </Screen>
  );
}

OrdersScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Current Orders',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={ScreenHeaderButton}>
      <Item
        title="Drawer"
        iconName="ios-menu"
        color={Platform.OS === 'android' ? theme.color.accent : undefined}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),
});

export default OrdersScreen;
