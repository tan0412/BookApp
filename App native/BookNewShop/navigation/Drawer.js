/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { COLORS } from '../constants/theme';
import Home from '../screens/Home';
import Category from '../screens/Category';


const Drawer = createDrawerNavigator();


const Drawers = () => {  
   
    return (
        <Drawer.Navigator screenOptions={{
          
            headerShown: false,
            drawerStyle: {
                backgroundColor: "#E6E6E6",
                width: 240,
            },
            drawerLabelStyle: {
                fontSize: 18,
                fontWeight: 'bold',
            },
            drawerActiveBackgroundColor: COLORS.white,
            drawerActiveTintColor: COLORS.primary,
            }}>
            <Drawer.Screen name="Tất cả sản phẩm" component={Home} />
            <Drawer.Screen name="Văn Học" component={Category} initialParams={{item:'Văn Học'}}/>
            <Drawer.Screen name="Kinh tế" component={Category} initialParams={{item:'Kinh tế'}}/>
            <Drawer.Screen name="Tâm lý - kĩ năng sống" component={Category} initialParams={{item:'Tâm lý - kĨ năng sống'}}/>
            <Drawer.Screen name="Thiếu Nhi" component={Category} initialParams={{item:'Thiếu Nhi'}}/>
            <Drawer.Screen name="Giáo Khoa" component={Category} initialParams={{item:'Giáo Khoa'}}/>
            <Drawer.Screen name="Ngoại ngữ" component={Category} initialParams={{item:'Ngoại Ngữ'}}/>
            <Drawer.Screen name="Hồi Ký" component={Category} initialParams={{item:'Hồi Ký'}} />
            <Drawer.Screen name="Đồ dùng" component={Category} initialParams={{item:'Đồ dùng'}}/>
        </Drawer.Navigator>
    );
};



export default Drawers;
