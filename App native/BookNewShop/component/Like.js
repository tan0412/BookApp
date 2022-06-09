import React, { useState } from "react";
import { StyleSheet  } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign"; 
const LikeButton = () => {
    const [pressed,usepressed]=useState(true)

  return (
    <TouchableOpacity style={styles.btn} onPress={()=>{
        (pressed)?usepressed(false):usepressed(true)
    }}>
        {(pressed)?
        <AntDesign name="hearto" style={styles.heart} />
    :    

        <AntDesign name="heart" style={styles.heart} />
    }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn:{
      borderRadius:50,
      width:50,
      height:50,
      backgroundColor:'#FF8C00',
  },
  heart:{
      fontSize:30,
      color:'white',
      alignSelf:'center',
      marginTop:10,
  }
});
export default LikeButton;
