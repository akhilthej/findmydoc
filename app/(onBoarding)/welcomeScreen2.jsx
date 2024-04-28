import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '../../constants'
import { StatusBar } from 'expo-status-bar'

const welcomeScreen2 = () => {
  return (
    <SafeAreaView className='bg-white  h-full'>

   <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          
        <View style={{ position: 'absolute', top: 50, left: 30}}>
  <Image
    source={images.logo}
    style={{ width: 60, height: 60, resizeMode: 'contain' }}
  />
</View>




          <Image
            source={images.welcomescreen3}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

<View className="relative mt-5">
            <Text className="text-[18px] text-gray-800 font-bold text-center">
              Welcome to Find My Doctor
            </Text>
          </View>

          <Text className="text-sm font-pregular text-gray-800 mt-7 text-center">
          An all in one solution for all your medical care , we have few advance features like AI Prediction, Med Alerts and more. Dive in .

          </Text>

        
          <TouchableOpacity>
                        <Text onPress={() => router.push("/welcomeScreen3")} 
                        className='text-[15px] text-center font-bold text-white bg-black mt-5 p-5 rounded-xl' >Continue</Text>
                    </TouchableOpacity>

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#000000" style="light" />

    </SafeAreaView>
  )
}

export default welcomeScreen2
