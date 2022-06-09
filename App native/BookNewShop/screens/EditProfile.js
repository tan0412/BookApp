/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View,Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../constants/theme';
const EditProfile = ({navigation}) => {
   
      return (
        <View style={styles.container}>
          
          <Animated.View style={{margin: 20,
            
        }}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{
                      uri: 'https://static.tin.moi/uploads/news/photo/RK/RKS/RKS0eKi2mj-320x312.png',
                    }}
                    style={{height: 100, width: 100, borderRadius: 50}}>

                  </Image>
                </View>
              </TouchableOpacity>
              <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                Mr. Tan
              </Text>
            </View>
    
            <View style={styles.action}>
              <FontAwesome name="user-o" color={COLORS.lightRed} size={20} />
              <TextInput
                placeholder="First Name"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: COLORS.lightRed,
                  },
                ]}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome name="user-o" color={COLORS.lightRed} size={20} />
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: COLORS.lightRed,
                  },
                ]}
              />
            </View>
            <View style={styles.action}>
              <Feather name="phone" color={COLORS.lightRed} size={20} />
              <TextInput
                placeholder="Phone"
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: COLORS.lightRed,
                  },
                ]}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome name="envelope-o" color={COLORS.lightRed} size={20} />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#666666"
                keyboardType="email-address"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: COLORS.lightRed,
                  },
                ]}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome name="globe" color={COLORS.lightRed} size={20} />
              <TextInput
                placeholder="Country"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: COLORS.lightRed,
                  },
                ]}
              />
            </View>
            <View style={styles.action}>
              <Icon name="map-marker-outline" color={COLORS.lightRed} size={20} />
              <TextInput
                placeholder="City"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: COLORS.lightRed,
                  },
                ]}
              />
            </View>
            <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
              <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      );
    };
    
    export default EditProfile;

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        commandButton: {
          padding: 15,
          borderRadius: 10,
          backgroundColor: '#FF6347',
          alignItems: 'center',
          marginTop: 10,
        },
        panel: {
          padding: 20,
          backgroundColor: '#FFFFFF',
          paddingTop: 20,
        },
        header: {
          backgroundColor: '#FFFFFF',
          shadowColor: '#333333',
          shadowOffset: {width: -1, height: -3},
          shadowRadius: 2,
          shadowOpacity: 0.4,
          // elevation: 5,
          paddingTop: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        panelHeader: {
          alignItems: 'center',
        },
        panelHandle: {
          width: 40,
          height: 8,
          borderRadius: 4,
          backgroundColor: '#00000040',
          marginBottom: 10,
        },
        panelTitle: {
          fontSize: 27,
          height: 35,
        },
        panelSubtitle: {
          fontSize: 14,
          color: 'gray',
          height: 30,
          marginBottom: 10,
        },
        panelButton: {
          padding: 13,
          borderRadius: 10,
          backgroundColor: '#FF6347',
          alignItems: 'center',
          marginVertical: 7,
        },
        panelButtonTitle: {
          fontSize: 17,
          fontWeight: 'bold',
          color: 'white',
        },
        action: {
          flexDirection: 'row',
          marginTop: 10,
          marginBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2',
          paddingBottom: 5,
        },
        actionError: {
          flexDirection: 'row',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#FF0000',
          paddingBottom: 5,
        },
        textInput: {
          flex: 1,
          marginTop:  -12,
          paddingLeft: 10,
          color: '#05375a',
        },
      });