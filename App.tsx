import Navigator from "navigations";
import { Text, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Provider } from "react-redux";
import store from "store";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<Navigator />
			</SafeAreaProvider>
		</Provider>
	);
}
