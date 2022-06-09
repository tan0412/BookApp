/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
    Text, 
    View,
    Image,
    TouchableOpacity,
    TextInput,    
    FlatList,
    SafeAreaView,
    StyleSheet,
    Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS } from '../constants/theme';
import images from '../constants/images';
import { Searchbar } from 'react-native-paper';
import { getProduct, getProducts } from '../Service/Products';


const width = Dimensions.get('window').width / 2 - 20;
const Card = ({book, navigation}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {navigation.navigate('BookDetail',book.id)}}>
        <View style={style.card}>
          <View
            style={{
              height: 160,
              alignItems: 'center',
            }}>
            <Image
              source={book.img}
              style={{flex: 1.5, resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 5, color: COLORS.black}}>
            {book.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.primary}}>
              {book.price} đ
            </Text>
            
          </View>
        </View>
      </TouchableOpacity>
    );
  };
const Search = ({navigation}) =>{
    //list of foods = state
    const [books, setBook] = useState(getProducts);
    const searchProducts = (searchText) => {
      const bookData=[]
      books.forEach(book => {
        const regex = new RegExp(
          searchText.replace(/[\\[\]()+?.*]/g, c => '\\' + c),
        'i'
        )
        const result = book.name.search(regex)
        if (result > -1 && bookData.indexOf(book) === -1) {
          bookData.push(book)
        }
      })
      return bookData
    }

    const [searchText, setSearchText] = useState('');
   
    return <SafeAreaView style={{flex: 1,}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', 
        backgroundColor: COLORS.primary, marginBottom:5}}>
            <View style={{marginLeft: 10, marginTop:10}}>
                <Icon name="arrow-back" size={32} color="#FFFFFF" paddingLeft={20} onPress={navigation.goBack}/>
                </View>
            <Searchbar
            style={{
              height: 40,
              width: 240,
              marginTop: 20,
              marginRight: 10,
              borderRadius:5,
              marginBottom:10
            }}
            placeholder="Search..."
            onChangeText={(text) => setSearchText(text)}
            value={searchText} 
            />
            <TouchableOpacity
              style={{marginRight: 20, marginTop: 15}}
              onPress={() => {
                navigation.navigate('ShoppingCart');
              } }>
              <Icon1 name="shoppingcart" size={35} color={COLORS.white} />
            </TouchableOpacity>
          </View>
            {searchProducts(searchText).length > 0 ? <FlatList 
              columnWrapperStyle={{justifyContent: 'space-between'}}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                marginTop: 10,
                paddingBottom: 50,
              }}
              numColumns={2}
              key={2}
                data={searchProducts(searchText)}
                renderItem={({item}) => <Card
                    navigation={navigation}
                    book = {item} key={item.name}/>}
                keyExtractor={eachBook => eachBook.name}
            /> : <View style={{
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center',                    
                 }}>
                <Text style={{
                    color: 'black',
                    // eslint-disable-next-line comma-dangle
                    
                }}>No found</Text>
            </View>}        
    </SafeAreaView>;
}
export default Search;
const style = StyleSheet.create({
  
  card: {
    height: 270,
    backgroundColor: COLORS.white,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    marginLeft: 10,
    marginRight:10,
    borderColor: COLORS.black,
    shadowColor: '#000',
    shadowOffset: {width:0, height:4},
    shadowOpacity:0.32, 
    shadowRadius: 4.65,
    elevation:6
  },
 
});