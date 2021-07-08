import React from "react";
import SectionMenu from "./section_menu/section_menu";
import AppMenu from "./apps_menu/app_menu";

import "../globalStyles.css";
import "../globalStylevariables.css";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<div className="app">
			<SectionMenu />
			<AppMenu />
		</div>
	);
};

export default App;
