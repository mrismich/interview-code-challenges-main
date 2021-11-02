import React from "react";
import { Provider } from "react-redux";
import Phonebook from "./Components/Phonebook";
import initializeStore from "./Store";
const store = initializeStore();

function App() {
	return (
		<main>
			<Provider store={store}>
				<Phonebook />
			</Provider>
		</main>
	);
}

export default App;
