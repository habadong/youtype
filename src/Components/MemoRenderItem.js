import React from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { widthPercentage, heightPercentage, fontPercentage } from '../Functions/ResponsiveSize'

export default function MemoRenderItem({ itemId, title, mainText, img, navigation }) {
    return (
        <Pressable 
            style={styles.memoCard}
            onPress={() => {
                navigation.navigate("write", {
                    itemId: itemId,
                    title: title,
                    mainText: mainText,
                    img: img,
                })
            }}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.mainText}>{mainText}</Text>
            </View>
            <View>
                {img ? (
                    <Image 
                        style={styles.img} 
                        source={{uri: img}} />
                ) : (
                    <View style={styles.img}/>
                )}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    memoCard: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',

      borderRadius: 12,
      marginBottom: heightPercentage(0.2),
      paddingRight: widthPercentage(0.8),
      paddingLeft: widthPercentage(0.3),
      paddingVertical: heightPercentage(0.1),
    },
    memoCardLeft: {
        flex: 3
    },
    title: {
        fontSize: fontPercentage(15)
    },
    mainText: {
        fontSize: fontPercentage(10)
    },
    memoCardRight: {
        flex: 1
    },
    img: {
        width: widthPercentage(0.5),
        height: heightPercentage(0.5),
    }
});