import React, {useState, useRef} from 'react';
import {View, StyleSheet, StatusBar, Image} from 'react-native';
import {lightGray, purple, white} from 'utils/constants/colors';
import {CoustomTextComponent} from 'utils/constants/elements';
import {MyHeader, CoustomButtonComponent} from 'utils/constants/elements';
import {Input, Icon, Item, Content} from 'native-base';

export default function SignUp(props) {
  const EmailRef = useRef(null);
  const PasswordRef = useRef(null);
  const RePasswordRef = useRef(null);

  const [showPass, setShowPass] = useState(false);
  const changeShowPass = () => setShowPass(!showPass);

  const onBackPress = () => {
    props.navigation.goBack();
  };
  const onSignupClick = () => {};
  return (
    <>
      <MyHeader Title="ثبت نام" onBackPress={onBackPress} />
      <StatusBar backgroundColor="#470425" />
      <Content style={styles.Container}>
        <Image
          source={require('assets/logo.png')}
          resizeMode={'stretch'}
          style={styles.image}
        />
        <CoustomTextComponent style={styles.TextDescription}>
          کلیه حقوق این سایت برای شرکت گیتی سامانه نوین شرق محفوظ است
        </CoustomTextComponent>
        <Item rounded style={styles.inputItem}>
          <Input
            placeholder="نام کاربری"
            placeholderTextColor={'gray'}
            style={styles.input}
            value={props.username}
            onChangeText={props.onUserChange}
            editable={!props.isLoading}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => EmailRef.current._root.focus()}
          />
          <Icon
            name="account"
            type="MaterialCommunityIcons"
            style={styles.inputIcon}
          />
        </Item>
        <Item rounded style={styles.inputItem}>
          <Input
            placeholder="پست الکترونیکی"
            placeholderTextColor={'gray'}
            style={styles.input}
            value={props.username}
            onChangeText={props.onUserChange}
            editable={!props.isLoading}
            ref={EmailRef}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => PasswordRef.current._root.focus()}
          />
          <Icon
            name="email"
            type="MaterialCommunityIcons"
            style={styles.inputIcon}
          />
        </Item>
        <Item rounded style={styles.inputItem}>
          <Icon
            name="eye"
            type="MaterialCommunityIcons"
            style={styles.inputIcon}
            onPress={changeShowPass}
          />
          <Input
            placeholder="کلمه عبور"
            placeholderTextColor={'gray'}
            style={styles.input}
            value={props.password}
            onChangeText={props.onPassChange}
            secureTextEntry={showPass ? false : true}
            editable={!props.isLoading}
            ref={PasswordRef}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => RePasswordRef.current._root.focus()}
          />
          <Icon
            name="key"
            type="MaterialCommunityIcons"
            style={styles.inputIcon}
          />
        </Item>
        <Item rounded style={styles.inputItem}>
          <Icon
            name="eye"
            type="MaterialCommunityIcons"
            style={styles.inputIcon}
            onPress={changeShowPass}
          />
          <Input
            placeholder="تکرار کلمه عبور"
            placeholderTextColor={'gray'}
            style={styles.input}
            value={props.password}
            onChangeText={props.onPassChange}
            secureTextEntry={showPass ? false : true}
            editable={!props.isLoading}
            ref={RePasswordRef}
            returnKeyType="done"
          />
          <Icon
            name="key"
            type="MaterialCommunityIcons"
            style={styles.inputIcon}
          />
        </Item>
        <CoustomButtonComponent
          name="ثبت نام"
          disabled={props.isLoading}
          isLoading={props.isLoading}
          onPress={onSignupClick}
          style={styles.Button}
        />
      </Content>
      <Image
        resizeMode={'stretch'}
        source={require('assets/footer.png')}
        style={styles.footerImage}
      />
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: lightGray,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  ViewBottom: {
    marginTop: 20,
    paddingTop: 20,
    width: '100%',
    height: undefined,
    alignSelf: 'center',
    alignItems: 'center',
  },
  forget: {
    color: 'black',
    textAlign: 'center',
    marginTop: 30,
    paddingBottom: 5,
    paddingVertical: 8,
    fontFamily: 'IRANSansMobile(FaNum)',
    width: '80%',
    alignSelf: 'center',
    fontSize: 12,
  },
  inputItem: {
    backgroundColor: white,
    borderColor: '#bf8f47',
    marginBottom: 8,
    height: 45,
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    textAlign: 'right',
    color: purple,
    paddingLeft: 32,
    fontFamily: 'IRANSansMobile(FaNum)',
    fontSize: 14,
  },
  inputIcon: {
    color: purple,
    fontSize: 20,
    marginLeft: 5,
  },
  btn: {
    backgroundColor: purple,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
    height: undefined,
    marginTop: 25,
  },
  btnText: {
    color: white,
    fontFamily: 'IRANSansMobile(FaNum)',
  },
  rememeber: {
    color: 'black',
    fontFamily: 'IRANSansMobile(FaNum)',
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  rememberContainer: {
    height: undefined,
    marginVertical: 4,
    justifyContent: 'center',
  },
  TextDescription: {
    color: 'black',
    fontSize: 10,
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 10,
    textAlign: 'center',
  },
  footerImage: {
    width: '100%',
    height: 100,
    alignSelf: 'center',
  },
  Button: {
    marginTop: 30,
  },
});
