import React, { useCallback, useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import Text from '../../common/components/Text';
import Box from '../../common/components/Box';

const styles = StyleSheet.create({
  product: {
    height: 300,
    margin: 20,
    padding: 0,
  },
  productImage: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
  details: {
    paddingHorizontal: 15,
  },
});

export default function Product({
  product,
  onAddToCart,
  onViewDetails,
  children,
  style: customStyle,
  ...props
}) {
  const [shouldShowDetails, setShouldShowDetails] = useState(false);

  const handleAddToCart = useCallback(() => {
    onAddToCart(product.id);
  }, [onAddToCart, product.id]);

  const handleToggleDetails = useCallback(() => {
    if (onViewDetails) {
      onViewDetails(product.id);
    } else {
      setShouldShowDetails(!shouldShowDetails);
    }
  }, [onViewDetails, product.id, shouldShowDetails]);

  return (
    <Box
      style={{
        ...styles.product,
        ...customStyle,
        ...shouldShowDetails && { height: styles.product.height + 100 },
      }}
      {...props}
    >
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.productImage}
      />
      <View style={styles.header}>
        <Text bold style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
      {shouldShowDetails && (
        <View style={styles.details}>
          <Text>{product.description}</Text>
        </View>
      )}
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title={shouldShowDetails ? 'Hide Details' : 'View Details'}
            onPress={handleToggleDetails}
          />
        </View>
        {!!onAddToCart && (
          <View style={styles.button}>
            <Button
              title="Add to Cart"
              onPress={handleAddToCart}
            />
          </View>
        )}
      </View>
      {children}
    </Box>
  );
}
