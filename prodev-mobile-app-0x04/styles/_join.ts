import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    iconsection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 22,
    },
    titleTextGroup: {
        marginTop: 20,
    },
    titleText: {
        fontWeight: 700,
        fontSize: 39,
    },
    subText: {
        fontWeight: 400,
        fontSize: 12,
        color: '#7e7b7b',
    },
    formGroup: {
        marginTop: 44,
        rowGap: 10,
    },
    formLabel: {
        fontSize: 18,
        fontWeight: 400,
        color: '#7b7b7b',
        marginBottom: 7,
    },
    formControl: {
        borderWidth: 2,
        height: 50,
        borderRadius: 10,
        borderColor: '#e9e9e9',
        paddingHorizontal: 10
    },
    formPasswordControl: {
        borderWidth: 2,
        height: 50,
        borderRadius: 10,
        borderColor: '#e9e9e9',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    passwordControl: {
        flex: 1
    },
    primaryButton: {
        backgroundColor: '#34967c',
        height: 53,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 300
    },
    secondaryButtonGroup: {
        rowGap: 15,
        marginTop: 15,
    },
    secondaryButton: {
        height: 53,
        borderRadius: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        columnGap: 10,
        borderWidth: 1,
    },
    secondaryButtonText: {
        fontSize: 18,
        fontWeight: 400
    },
    signupgroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        left: 77,
        right: 76,
        position: 'absolute',
        bottom: 33
    },
    signupTitleText: {
        fontSize: 18,
        fontWeight: 400,
    },
    signUpSubTitleText: {
        fontSize: 18,
        fontWeight: 600,
        color: '#ffa800'
    },
    dividerGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        marginBottom: 25,
        marginTop: 29
    },
    divider: {
        borderWidth: 1,
        flex: 1,
        borderColor: '#e6e6e6'
    },
    dividerText: {
        fontSize: 17,
        fontWeight: 500,
        color: '#c2c2c2',
        fontVariant: ['small-caps']
    },
    forgotPasswordText: {
        textAlign: 'right',
        color: '#34967c',
        marginTop: 9
    },
});

export { styles };