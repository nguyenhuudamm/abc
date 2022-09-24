import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/footer.component";
import Nav from "./components/Nav";
import route from "./Router";


function App() {

	let menu = route.map((item, idx) => {
		return <Route key={idx} path={item.path} element={item.component} />
	})


  return (
    <div className="App">
			<Nav></Nav>
			<Routes>
				{menu}
			</Routes>
			{/* <Footer /> */}
    </div>
  );
}

export default App;
