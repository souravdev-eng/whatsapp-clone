import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const Demo = () => {
  const [images, setImages] = useState<any>([]);
  const handelCameraPress = async () => {
    const {assets, didCancel} = await launchImageLibrary({
      mediaType: 'mixed',
      quality: 0.5,
      selectionLimit: 15,
      videoQuality: 'medium',
    });
    if (!didCancel) {
      setImages(assets);
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={handelCameraPress}>
          <Text>Pick Image</Text>
        </TouchableOpacity>
        {images.map((el: any, index: number) => (
          <Image
            key={index}
            source={{uri: el.uri}}
            style={{
              width: '90%',
              height: el.height > 400 ? 400 : el.height,
              marginVertical: 20,
            }}
            resizeMode="contain"
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Demo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '80%',
    height: 52,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});
