import React, { useCallback, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Screen from '../../../common/components/Screen';
import Text from '../../../common/components/Text';
import Input from '../../../common/components/Input';
import { addProduct, updateProduct } from '../../store/actions/products';

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },
  buttons: {
    marginTop: 15,
  },
});

const EditProductDetailsScreen = ({
  navigation,
}) => {
  const { userProducts } = useSelector(({ products }) => products);
  const productId = navigation.getParam('productId');
  const dispatch = useDispatch();

  const product = productId && userProducts.find(p => p.id === productId);
  const ownerId = navigation.getParam('ownerId');
  const [title, setTitle] = useState(product?.title);
  const [imageUrl, setImageUrl] = useState(product?.imageUrl  || 'https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  const [description, setDescription] = useState(product?.description);
  const [price, setPrice] = useState(product?.price);

  const handleSaveProduct = useCallback(() => {
    if (productId) {
      dispatch(
        updateProduct({
          productId,
          ownerId,
          title,
          imageUrl,
          description,
          price: Number(price),
        }),
      );
    } else {
      dispatch(
        addProduct({
          ownerId,
          title,
          imageUrl,
          description,
          price: Number(price),
        }),
      );
    }

    navigation.navigate({
      routeName: 'UserProducts',
    });
  }, [dispatch, navigation, productId, ownerId, title, imageUrl, description, price]);

  return (
    <Screen>
      <View style={styles.inputContainer}>
        <Text bold>Title</Text>
        <Input
          placeholder="Product title"
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text bold>Description</Text>
        <Input
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text bold>Image URL</Text>
        <Input
          placeholder="Image URL"
          value={imageUrl}
          onChangeText={setImageUrl}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text bold>Price</Text>
        <Input
          placeholder="Price"
          value={price?.toString()}
          onChangeText={setPrice}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title={productId ? 'Update Product' : 'Add Product'}
          onPress={handleSaveProduct}
        />
      </View>
    </Screen>
  );
};

EditProductDetailsScreen.navigationOptions = ({ navigation }) => {
  const productId = navigation.getParam('productId')

  return {
    headerTitle: productId ? 'Edit Product' : 'Add Product',
  };
};

export default EditProductDetailsScreen;
