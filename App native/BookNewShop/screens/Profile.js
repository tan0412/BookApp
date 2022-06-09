/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Title, Card, Button, Avatar, Caption, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  View,
  StyleSheet,
  Text,
  Image,
  Platform,
  Linking,
  StatusBar
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';
import EditProfile from './EditProfile';


const Profile = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image 
              source={{
                uri: 'https://static.tin.moi/uploads/news/photo/RK/RKS/RKS0eKi2mj-320x312.png',
              }}
              size={80}
            />
            <View style={{marginLeft: 20}}>
              <Title style={[styles.title, {
                marginTop:15,
                marginBottom: 5,
              }]}>Mr. Tan</Title>
              <Caption style={styles.caption}>@Tan_Pham</Caption>
            </View>
            <View style={{marginLeft: '35%', marginTop: 15}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                marginLeft ={5}
                backgroundColor = {COLORS.lightGray}
                size={25}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          </View>
        </View>
  
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#777777" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>HaNoi, VietNam</Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#777777" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>+84 0369456789</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="#777777" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>Tanpham@gmail.com</Text>
          </View>
        </View>
  
        <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
              <Title>500.000 VNĐ</Title>
              <Caption>Tổng chi tiêu</Caption>
            </View>
            <View style={styles.infoBox}>
              <Title>12</Title>
              <Caption>Tổng số đơn</Caption>
            </View>
        </View>
  
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="heart-outline" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Sản phẩm yêu thích</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="credit-card" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Thanh toán</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="account-check-outline" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Hỗ trợ</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate('Login')}>
            <View style={styles.menuItem}>
              <Icon name="application-export" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Đăng xuất</Text>
            </View>
          </TouchableRipple>
        </View>
      </SafeAreaView>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },

    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 18,
      lineHeight: 26,
    },
});