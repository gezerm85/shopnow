import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import FavoritaCard from '../../components/FavoritaCard/FavoritaCard';

const FavoriteScreen = () => {


  const { favorite } = useSelector((state) => state.data);



  return (
    <View style={styles.container}>
      <FlatList
        data={favorite}
        renderItem={({item})=><FavoritaCard item={item} />}
        keyExtractor={(item)=>item.id.toString()}
        contentContainerStyle={{ gap: 16 }}
      />
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 16,
  }
})