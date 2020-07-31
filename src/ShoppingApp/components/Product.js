import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import Text from '../../common/components/Text';

const styles = StyleSheet.create({
  product: {
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    height: 300,
    margin: 20,
  },
  productImage: {
    height: 200,
    width: '100%',
  },
  header: {
    alignItems: 'center',
    marginVertical: 10,
  },
  productTitle: {
    fontSize: 18,
  },
  price: {
    fontSize: 14,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default function Product({
  product,
  onAddToCart,
  onViewDetails,
}) {
  const handleAddToCart = () => {
    onAddToCart(product.id);
  };

  const handleViewDetails = () => {
    onViewDetails(product.id);
  };

  return (
    <View style={styles.product}>
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.productImage}
      />
      <View style={styles.header}>
        <Text bold style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="View Details"
            onPress={handleViewDetails}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Add to Cart"
            onPress={handleAddToCart}
          />
        </View>
      </View>
    </View>
  );
}
