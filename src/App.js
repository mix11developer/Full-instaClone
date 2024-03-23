import './App.css';
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'

function App() {
	return (
		<div className="App">
			<Header />
			<div className='container'>
				<Body />
				<Footer />
			</div>
		</div>
	);
};

export default App;
