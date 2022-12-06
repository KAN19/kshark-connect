import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type";
import HomePage from "scenes/HomeScreen";
import EndCallScreen from "scenes/EndCallScreen";
import InputCodeScreen from "scenes/InputCodeScreen";

type Props = {};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = (props: Props) => {
	return (
		<RootStack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerTitleAlign: "center",
			}}
		>
			<RootStack.Screen
				name="Home"
				component={HomePage}
				options={{ title: "Let's meet 👋" }}
			/>
			<RootStack.Screen name="EndCallScreen" component={EndCallScreen} />
			<RootStack.Screen
				name="InputCodeScreen"
				component={InputCodeScreen}
				options={{ title: "Join with given code" }}
			/>
		</RootStack.Navigator>
	);
};

export default RootNavigator;
