import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';


const LoginScreen = ({onGoogleButtonPress}) => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.container}>
        <View style={styles.innerTopContainer}>
          <Text>여기는 상단 컨테이너🙏</Text>
        </View>
        <View style={styles.innerMiddleContainer}>
          <Text>여기는 중간 컨테이너👍</Text>
        </View>
        <View style={styles.innerBottomContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={onGoogleButtonPress}>
            <Text>여기는 버튼 들어가</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
  container: {
    // backgroundColor: 'green',
    flex: 1,
  },
  innerTopContainer: {
    // backgroundColor: 'blue',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerMiddleContainer: {
    // backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBottomContainer: {
    // backgroundColor: 'gray',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 40,
    borderRadius: 20,
  },
});

export default LoginScreen;
