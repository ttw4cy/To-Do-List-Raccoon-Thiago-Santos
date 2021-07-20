import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: 56,
        backgroundColor: '#6e6e80',
        borderRadius: 56,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 595  
    },
    title: {
        flex: 1,
        color: "#191c24",
        fontSize: 40,
        position: 'absolute',
        textAlign: 'center',
        textAlignVertical: 'center',
        left: 130,
        

    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        borderRightWidth: 1,
        borderColor: "#78788a",
    },
    icon: {
        width: 40,
        height: 30,
        left: 10
    }
});