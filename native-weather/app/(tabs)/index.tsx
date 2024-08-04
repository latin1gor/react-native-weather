import {Image, StyleSheet, Platform, View, Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {StatusBar} from "expo-status-bar";
import {Header} from "react-native/Libraries/NewAppScreen";
import {MagnifyingGlassIcon} from "react-native-heroicons/outline";
import {useState} from "react";


export default function HomeScreen() {
    const [showSearch, setShowSearch] = useState(false)
    const [locations, setLocations] = useState([1,2,3])


  return (
   <View className="flex-1 relative">
       <StatusBar style={"light"}/>
           <Image blurRadius={10} source={require("../../assets/images/main-bg.jpg")} className="absolute h-full w-full " />


       <SafeAreaView className="flex flex-1">
           <View style={{height: "7%"}} className={"mx-4 relative z-50"}>
                <View className={`flex-row justify-end items-center rounded-full ${showSearch && "bg-gray-400/20"}`}>
                    {
                        showSearch ? (
                            <TextInput placeholder={"Search city"} placeholderTextColor={"lightgray"} className={"text-white text-base flex-1 pl-6 h-10"} />

                        ) : null
                    }
                    <TouchableOpacity className={"rounded-full bg-white/30 p-3 m-1"} onPress={() => setShowSearch(prev => !prev)}><MagnifyingGlassIcon size={"25"} color={"white"}/></TouchableOpacity>
                </View>
               {locations.length && showSearch ? (<View> {locations.map((l, i) => (
                           <TouchableOpacity key={i}>
                              <View></View>
                           </TouchableOpacity>
                       )} </View>) : null}
           </View>
       </SafeAreaView>
   </View>
  );
}
