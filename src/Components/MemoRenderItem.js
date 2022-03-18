import React from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { widthPercentage, heightPercentage, fontPercentage } from '../Functions/ResponsiveSize'

export default function MemoRenderItem({ itemId, title, content, img, navigation }) {
    return (
        <Pressable 
            style={styles.memoCard}
            onPress={() => {
                navigation.navigate("detail", {
                    itemId: itemId
                })
            }}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
            </View>
            <View>
                <Image 
                    style={styles.img} 
                    source={{uri: img}} 
                    defaultSource={{uri: 'https://cms-assets.tutsplus.com/uploads/users/1199/posts/30670/preview_image/react.jpg'}} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    memoCard: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 12,
      marginBottom: heightPercentage(0.2),
      paddingHorizontal: widthPercentage(0.3),
      paddingVertical: heightPercentage(0.1),
    },
    memoCardLeft: {
        flex: 3

    },
    title: {
        fontSize: fontPercentage(15)
    },
    content: {
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