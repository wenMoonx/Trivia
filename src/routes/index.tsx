import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Guard from "../components/Guard";

import Home from "../views/home";
import Quiz from "../views/quiz";
import Results from "../views/results";

import IRoute from "./../interfaces/IRoute";

const routes: IRoute[] = [
	{
		path: "/",
		component: <Home />,
		guard: false
	},
	{
		path: "/quiz",
		exact: true,
		component: <Quiz />,
		guard: true
	},
	{
		path: "/results",
		exact: true,
		component: <Results />,
		guard: false
	},
];

const MainRouter = () => (
	<Router>
		<Routes>
			{routes.map((route: IRoute, index: number) => {
				return route.guard === true ? (
					<Route
						key={index}
						path={route.path}
						element={<Guard>{route.component}</Guard>}
					/>
				) : <Route path={route.path} element={route.component}/>
			})}
		</Routes>
	</Router>
);

export default MainRouter;
