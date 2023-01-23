import {
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { Heading2 } from 'components/CustomizedText';
type Props = {};

const HomeHeader = (props: Props) => {
	return (
		<View className="flex justify-between items-center flex-row p-4">
			<TouchableOpacity>
				<FontAwesomeIcon icon={faBars} size={20} />
			</TouchableOpacity>
			<Heading2 className="font-semibold">Meeting</Heading2>
			<TouchableOpacity>
				<FontAwesomeIcon icon={faUser} size={20} />
			</TouchableOpacity>
		</View>
	);
};

export default HomeHeader;

const styles = StyleSheet.create({});
