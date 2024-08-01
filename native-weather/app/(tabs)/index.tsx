import {Image, StyleSheet, Platform, View, Text, SafeAreaView, TextInput} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {StatusBar} from "expo-status-bar";
import {Header} from "react-native/Libraries/NewAppScreen";

export default function HomeScreen() {
  return (
   <View className="flex-1 relative">
       <StatusBar style={"light"}/>
       <Image blurRadius={70} source={require("../../assets/images/main-bg.jpg")} className="absolute h-full w-full" />

       <SafeAreaView className="flex flex-1">
           <View style={{height: "7%"}} className={"mx-4 relative z-50"}>
                <View className={"flex-row justify-start items-center rounded-full bg-gray-400/20 "}>
                    <TextInput placeholder={"Search city"} placeholderTextColor={"lightgray"} className={"text-white"} />
                </View>


           </View>
       </SafeAreaView>
   </View>
  );
}
