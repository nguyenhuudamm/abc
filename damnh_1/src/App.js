import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/footer.component";
import Header from "./components/Header/header.component";
import route from "./Router";


function App() {

	let menu = route.map((item, idx) => {
		return <Route key={idx} path={item.path} element={item.component} />
	})


  return (
    <div className="App">
		<Routes>
			{menu}
		</Routes>
    </div>
  );
}

export default App;
