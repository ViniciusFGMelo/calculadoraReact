import React from 'react'
import {
    StyleSheet,
    StylerSheet,
    Text,
    View,
} from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        passing: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end',
    },
    displayvalue: {
        fontSize: 60,
        color: '#fff',
    }
})

export default props => {
    return(
        <View style={styles.display}>
            <Text style={styles.displayvalue}
                numberOfLines={1}>{props.value}
            </Text>
        </View>
    )
}