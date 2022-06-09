/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet, Dimensions} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import  CartContext  from '../CartContext';
import LikeButton from '../component/Like';

import images from '../constants/images';
import { COLORS } from '../constants/theme';
import { getProduct } from '../Service/Products';
const width = Dimensions.get('window').width;
const BookDetail = ({navigation, route}) => {
      const [book, setBook] = React.useState([])
      const [count, setCount] = React.useState(1);
      const bookID = route.params
      const increment = () => {setCount(count + 1)}
      const decrement = () => { if(count > 0) setCount(count - 1) }
      useEffect(() => {
        setBook(getProduct(bookID))
      })
    const {addItemToCart, items} = React.useContext(CartContext)
    function onAddCart(){
      addItemToCart(bookID, count)
    }
    function renderHeader(){
      return (
       
        <><View style={style.header}>
          <Icon name="arrow-back" size={34} color={COLORS.primary} onPress={navigation.goBack} />
          <Icon name="shopping-cart" size={34} color={COLORS.primary} onPress={() => {
            navigation.navigate('ShoppingCart');
          } } />
        </View><View style={style.imageContainer}>
            <Image source={book.img} style={{ resizeMode: 'contain', flex: 1 }} />
          </View></>
         
      )
    }
    function renderDetail() {
      return (
        <View style={style.detailsContainer}>
          <View style={{position: 'absolute', marginLeft: width-90, marginTop: -20}}>
            <LikeButton />
          </View>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={style.line} />
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Best choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 24, fontWeight: 'bold', width: '70%'}}>{book.name}</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              {book.price} đ
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 25}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.black}}>Thông tin sản phẩm</Text>
          <ScrollView style={{marginBottom:40}}>
            <View>
          <Text style={{fontSize: 18, fontWeight:'500', color:COLORS.black, marginTop: 15}}>Nhà cung cấp:   AZ VietNam</Text>
          <Text style={{fontSize: 18, fontWeight:'500', color:COLORS.black, marginTop: 5}}>Tác giả:        {book.author}</Text>
          <Text style={{fontSize: 18, fontWeight:'500', color:COLORS.black, marginTop: 5}}>Nhà xuất bản:   {book.NXB}</Text>
          <Text style={{fontSize: 18, fontWeight:'500', color:COLORS.black, marginTop: 5}}>Năm xuất bản:   2009</Text>
          <Text style={{fontSize: 18, fontWeight:'500', color:COLORS.black, marginTop: 5}}>Trọng lượng:   300g </Text>
          <Text style={{fontSize: 18, fontWeight:'500', color:COLORS.black, marginTop: 5}}>Số trang:   75</Text>
          <Text style={{fontSize: 18, fontWeight:'500', color:COLORS.black, marginTop: 5}}>Tóm tắt: </Text>
          </View>
          <View>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {book.description}
          </Text>
          </View>
          </ScrollView>
        </View>
      </View>
      );
    };
    function renderfooter(){
      return(
        <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderColor: '#A4A4A4',
              height: 60,
            }}>
            <View
              style={{
                  flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <TouchableOpacity onPress={decrement}>
              <View style={style.borderBtn} >
                <Text style={style.borderBtnText}>-</Text>
              </View></TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                  marginLeft: 20
                }}>
                {count}
              </Text>
              <TouchableOpacity onPress={increment}>
                <View style={style.borderBtn} >
                  <Text style={style.borderBtnText} >+</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={onAddCart}>
            <View style={style.buyBtn}>
            
              <Text
                style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
                Mua ngay
              </Text>
            </View>
            </TouchableOpacity>
          </View>
      )
    }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F2F2F2',
      }}>
      <View style={{height: '42%'}}>{renderHeader()}</View>
      <ScrollView>
      <View>{renderDetail()}</View>
      </ScrollView>
      <View>{renderfooter()}</View>
      
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailsContainer: {
    backgroundColor: COLORS.white,
    flex: 0.55,
    marginHorizontal: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
   borderTopRightRadius: 20,
   borderTopLeftRadius: 20,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
    marginLeft: 20,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 150,
    height: 60,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  priceTag: {
    backgroundColor: COLORS.primary,
    width: '25%',
    height: 50,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default BookDetail;