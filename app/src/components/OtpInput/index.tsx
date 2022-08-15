import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OtpInput = () => {
  return (
    <OTPInputView
      style={{height: 100}}
      pinCount={4}
      // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
      // onCodeChanged = {code => { this.setState({code})}}
      autoFocusOnLoad
      codeInputFieldStyle={styles.underlineStyleBase}
      codeInputHighlightStyle={styles.underlineStyleHighLighted}
      onCodeFilled={code => {
        console.log(`Code is ${code}, you are good to go!`);
      }}
    />
  );
};

export default OtpInput;
