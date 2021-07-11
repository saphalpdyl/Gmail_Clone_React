import ReactDOM from "react-dom";

import App from "./components/App";
import Test from "./Test";

import { Provider } from "react-redux";
import store from "./redux";

ReactDOM.render(
	<Provider store={store}>
		<App />
		{/* <Test /> */}
	</Provider>,
	document.getElementById("root")
);
