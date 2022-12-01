import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import BaseView from "components/BaseView";
import { Heading1, Heading2, PlainText } from "components/CustomizedText";

type Props = {};

const InputCodeScreen = (props: Props) => {
	return (
		<BaseView>
			<PlainText>Enter your code provide by the organizerrr</PlainText>
			<TextInput className="border" placeholder="Hello" />
			<TouchableOpacity>
				<PlainText>Oke</PlainText>
			</TouchableOpacity>
		</BaseView>
	);
};

export default InputCodeScreen;
