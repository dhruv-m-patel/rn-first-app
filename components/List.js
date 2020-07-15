import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';

const List = ({
    data = [],
    keyExtractor = (item) => item.key,
    renderItem = () => {},
}) => (
  <SafeAreaView>
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  </SafeAreaView>
);

export default List;
