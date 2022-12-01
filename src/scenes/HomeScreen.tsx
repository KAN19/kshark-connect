import BaseView from "components/BaseView";
import { RootStackScreenProps } from "navigations/type";
import React, { useState } from "react";
import { Text, TouchableOpacity, View, Button } from "react-native";
import Modal from "react-native-modal";

const HomePage = ({ navigation, route }: RootStackScreenProps<"Home">) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	return (
		<BaseView>
			<View>
				<View className="flex-row justify-around bg-blue-500">
					<TouchableOpacity onPress={() => setIsModalVisible(true)}>
						<Text>Create a meet</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("InputCodeScreen")}
					>
						<Text>Join with a code</Text>
					</TouchableOpacity>
				</View>
			</View>

			<Modal
				isVisible={isModalVisible}
				onBackdropPress={() => setIsModalVisible(false)}
			>
				<View>
					<Text>Hello!</Text>
				</View>
			</Modal>
		</BaseView>
	);
};

export default HomePage;
