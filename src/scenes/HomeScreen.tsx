import BaseView from 'components/BaseView';
import { RootStackScreenProps } from 'navigations/type';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import Modal from 'react-native-modal';

const HomePage = ({ navigation, route }: RootStackScreenProps<'Home'>) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	return (
		<BaseView>
			<View>
				<View className="flex-row justify-around space-x-8">
					<TouchableOpacity
						onPress={() => setIsModalVisible(true)}
						className="bg-[#00AC47] py-2 px-4 rounded-md w-1/2 items-center"
					>
						<Text className="text-white">Create a meet</Text>
					</TouchableOpacity>
					<TouchableOpacity
						className=" py-2 px-4 rounded-md bg-slate-200 w-1/2 items-center"
						onPress={() => navigation.navigate('InputCodeScreen')}
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
