import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '../../constants'
import { StatusBar } from 'expo-status-bar'

const welcomeScreen1 = () => {
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

<View className="relative mt-5">
            <Text className="text-[18px] text-white font-bold text-center">
              TERMS & CONDITIONS
            </Text>
          </View>


          <Image
            source={images.welcomescreen2}
            className="max-w-[280px] w-full h-[298px]"
            resizeMode="contain"
          />

         

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
          1. Acceptance of Terms
By using [Your Medical App Name] (the "App"), you agree to comply with and be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the App.
2. Medical Disclaimer
The App is intended for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
3. Privacy Policy
Your use of the App is also governed by our Privacy Policy, which can be found at [Link to Privacy Policy]. By using the App, you consent to the practices described in the Privacy Policy.


          </Text>

        
          <TouchableOpacity>
                        <Text onPress={() => router.push("/welcomeScreen2")} 
                        className='text-[15px] text-center font-bold text-white bg-black mt-5 p-5 rounded-xl' >I ACCEPT</Text>
                    </TouchableOpacity>

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#000000" style="light" />

    </SafeAreaView>
  )
}

export default welcomeScreen1
