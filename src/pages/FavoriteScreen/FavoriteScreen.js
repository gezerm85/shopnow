import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import FavoritaCard from '../../components/FavoritaCard/FavoritaCard';

const FavoriteScreen = () => {


  const { favorite } = useSelector((state) => state.data);



  return (
    <View style={styles.container}>
{favorite && favorite.length > 0
 ? (
  <FlatList
    data={favorite}
    renderItem={({item}) => <FavoritaCard item={item} />}
    keyExtractor={(item) => item.id.toString()}
    contentContainerStyle={{ gap: 16 }}
  />
 )
 : (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>Favori ürünleriniz yok.</Text>
  </View>
 )
}
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#cb6464'
  },
})