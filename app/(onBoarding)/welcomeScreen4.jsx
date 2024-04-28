import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '../../constants'
import { StatusBar } from 'expo-status-bar'

const WelcomeScreen3 = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#004147' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
          <View style={{ position: 'absolute', top: 50, left: 30 }}>
            <Image
              source={images.logo}
              style={{ width: 60, height: 60, resizeMode: 'contain' }}
            />
          </View>

          <Image
            source={images.welcomescreen5}
            style={{ maxWidth: 380, width: '100%', height: 298, resizeMode: 'contain' }}
          />

          <View style={{ position: 'relative', marginTop: 20 }}>
            <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: 'bold', textAlign: 'center' }}>
              AI Prediction
            </Text>
          </View>

          <Text style={{ fontSize: 14, color: '#ffffff', textAlign: 'center', marginTop: 7 }}>
            Please make sure to provide all your data correct, so that our AI can help you properly.
          </Text>

          <TouchableOpacity>
                        <Text onPress={() => router.push("/signin")} 
                        className='text-[15px] text-center font-bold text-white bg-black mt-5 p-5 rounded-xl' >All Most There !</Text>
                    </TouchableOpacity>

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#000000" style="light" />
    </SafeAreaView>
  );
};

export default WelcomeScreen3;
