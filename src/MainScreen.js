import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Text,
} from 'react-native';

const MainScreen = () => {
    
    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <Text>유튜브 API 긁어 오자🙏</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center"
    }
});

export default MainScreen;