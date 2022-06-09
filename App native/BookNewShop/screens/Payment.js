import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Image } from "react-native";
import {WebView} from "react-native-webview";
export default function Payment ({navigation, route}) {
   
    var amt = Math.floor(route.params/23000)
    console.log(amt)
    const [showModal, setShowModal] = useState(false)
    const [status, setStatus] = useState("Pending")
    
    const handleResponse = (data) => {
        if (data.title === "success") {
            setShowModal(false);
            setStatus("Complete");
        } else if (data.title === "cancel") {
            setShowModal(false);
            setStatus("Cancelled");
        } else {
            return;
        }
    };
        return (
            <View style={{ marginTop: 100 }}>
                <Modal
                    visible={showModal}
                    onRequestClose={() => setShowModal(false)}
                >
                    <WebView
                        source={{ uri: "http://192.168.0.101:3001/paypal/" + amt }}
                        onNavigationStateChange={data => handleResponse(data)}
                        injectedJavaScript={`document.getElementById('price').value="123";document.f1.submit()`}
                    />
                </Modal>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image 
                    source={{uri: 'https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png'}}
                     style={{width:300,height:150,resizeMode:'contain'}}
                />
                </View>
                <TouchableOpacity
                    style={{height: 40, width: 100, backgroundColor: '#01A9DB',
                    justifyContent:'center',alignItems:'center', marginTop: 20, marginLeft: '40%'  }}
                    onPress={() => setShowModal(true)}
                >
                    <Text style={{fontSize: 20, fontWeight:'900', color:'white'}}>Pay Now</Text>
                </TouchableOpacity>
            </View>
        );
    }
