import React from 'react';
import { FlatList } from 'react-native';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ProductCatalogScreen = () => {
  const { availableProducts } = useSelector(({ products }) => products);

  return (
    <View>
      <FlatList
        data={availableProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default ProductCatalogScreen;
