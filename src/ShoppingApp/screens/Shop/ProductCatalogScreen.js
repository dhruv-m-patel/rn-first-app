import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Product from '../../components/Product';
import Screen from '../../../common/components/Screen';

const ProductCatalogScreen = () => {
  const { availableProducts } = useSelector(({ products }) => products);

  return (
    <Screen>
      <FlatList
        data={availableProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Product
            product={item}
            onAddToCart={() => {}}
            onViewDetails={() => {}}
          />
        )}
      />
    </Screen>
  );
}

export default ProductCatalogScreen;
