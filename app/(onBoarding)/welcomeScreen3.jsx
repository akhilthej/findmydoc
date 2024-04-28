import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '../../constants'
import { StatusBar } from 'expo-status-bar'

const welcomeScreen3 = () => {
  return (
    <SafeAreaView className='bg-teal-950  h-full'>

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
            source={images.welcomescreen4}
            className="max-w-[280px] w-full h-[298px]"
            resizeMode="contain"
          />

<View className="relative mt-5">
            <Text className="text-[18px] text-white font-bold text-center">
              Get Help ASAP!!!
            </Text>
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
          Our doctors can help you to understand your problems looking into your Medical history.

          </Text>

        
          <TouchableOpacity>
                        <Text onPress={() => router.push("/welcomeScreen4")} 
                        className='text-[15px] text-center font-bold text-white bg-black mt-5 p-5 rounded-xl' >All Most There !</Text>
                    </TouchableOpacity>

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#000000" style="light" />

    </SafeAreaView>
  )
}

export default welcomeScreen3
