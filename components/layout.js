import { View, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import { colorPrimary, colorSecundary } from '../colors';

const Layout = ({children}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colorPrimary}/>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor : colorSecundary,
        padding:20,
        flex:1,
        alignItems:'center'        
    },
})

export default Layout;
