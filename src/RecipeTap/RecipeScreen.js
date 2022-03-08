import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function RecipeScreen() {
    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <View style={styles.container}>
                <Text>Hello! RecipeScreen!</Text>
            </View>
        </SafeAreaView>
    )
}

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