import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import PhoneInput from 'react-native-phone-number-input'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { isValidPhoneNumber } from 'libphonenumber-js';

const SignInScreen = () => {
  const [value, setValue] = useState(''); 
  const [formattedValue, setFormattedValue] = useState(''); 
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null); 


  const handleSignIn = () => {
    if (phoneInput.current) {
      const checkValid = phoneInput.current.isValidNumber(value);
      setShowMessage(true);
      setValid(checkValid ? checkValid : false);
      alert(checkValid ? 'Số điện thoại hợp lệ!' : 'Số điện thoại không hợp lệ. Vui lòng kiểm tra lại!');
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Image source={require('./assets/anh1.png')} style={styles.image} />

        <SafeAreaView style={styles.wrapper}>
          {showMessage && (
            <View style={styles.message}>
              <Text>Giá trị: {value}</Text>
              <Text>Giá trị định dạng: {formattedValue}</Text>
              <Text>Hợp lệ: {valid ? 'Đúng' : 'Sai'}</Text>
            </View>
          )}

          {}
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="VN"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
            style={styles.phoneInput} // Thêm kiểu dáng cho PhoneInput
          />

          {/* Nút đăng nhập */}
          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>

          {/* Nút đăng nhập bằng Google và Facebook */}
          <Text style={styles.socialText}>Or connect with social media</Text>

          <TouchableOpacity style={styles.socialButtonGoogle}>
            <FontAwesome name="google" size={24} color="white" />
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButtonFacebook}>
            <FontAwesome name="facebook" size={24} color="white" />
            <Text style={styles.socialButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  phoneInput: {
    width: '80%', // Chiều rộng của ô nhập số điện thoại
    marginBottom: 20, // Khoảng cách giữa các thành phần
  },
  signInButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%', // Chiều rộng nút
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialText: {
    marginBottom: 10,
    color: '#555',
  },
  socialButtonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '80%',
    marginBottom: 10,
  },
  socialButtonFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '80%',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SignInScreen;
