import LoginPage from './pages/login/LoginPage';
import Blob from './components/Blob';

function App() {
	return (
		<div className="App" style={{ width: '100vw', overflow:'hidden' }}>
			<div className="app-frame" style={{ height: '100%', width: '100%', zIndex: 1 }}>
				<LoginPage />
			</div>
			{/* right part*/}
			<Blob
				size={{ height: 600, width: 600 }}
				color="magenta"
				wanderCoords={[
					{ x: 600, y: 300},
					{ x: 700, y: 225},
					{ x: 800, y: 150},
					{ x: 900, y: 75},
					{ x: 1000, y: 0 },
					{ x: 1200, y: 150},
					{ x: 1400, y: 300 },
					{ x: 1200, y: 450 },
					{ x: 1000, y: 600},
					{ x: 800, y: 450},
				]}
			/>
			<Blob
				size={{ height: 800, width: 800 }}
				color="blue"
				wanderCoords={[
					{ x: 1000, y: 0 },
					{ x: 1200, y: 150},
					{ x: 1400, y: 300 },
					{ x: 1200, y: 450 },
					{ x: 1000, y: 600},
					{ x: 800, y: 450},
					{ x: 600, y: 300},
					{ x: 700, y: 225},
					{ x: 800, y: 150},
					{ x: 900, y: 75},
				]}
			/>
			<Blob
				size={{ height: 700, width: 700 }}
				color="cyan"
				wanderCoords={[
					{ x: 1000, y: 0 },
					{ x: 1400, y: 150 },
					{ x: 1600, y: 190 },
					{ x: 1400, y: 350 },
					{ x: 1200, y: 250 },
					{ x: 1100, y: 150 },
				]}
			/>
			{/* small left part*/}
			<Blob
				size={{ height: 250, width: 300 }}
				color="blue"
				wanderCoords={[
					{ x: 400, y: 90 },
					{ x: 560, y: 190 },
					{ x: 660, y: 90 },
					{ x: 500, y: 40 },
					{ x: 350, y: 75 },
					{ x: 260, y: 170 },
				]}
			/>
			<Blob
				size={{ height: 320, width: 220 }}
				color="green"
				wanderCoords={[
					{ x: 200, y: 500 },
					{ x: 70, y: 420 },
					{ x: 20, y: 250 },
					{ x: 220, y: 370 },
					{ x: 300, y: 320 },
					{ x: 330, y: 500 },
				]}
			/>
			<Blob
				size={{ height: 260, width: 390 }}
				color="cyan"
				wanderCoords={[
					{ x: 150, y: 30 },
					{ x: 120, y: 120 },
					{ x: 240, y: 50 },
					{ x: 270, y: 170 },
					{ x: 130, y: 350 },
					{ x: 30, y: 100 },
				]}
			/>
			<Blob
				size={{ height: 350, width: 350 }}
				color="magenta"
				wanderCoords={[
					{ x: 0, y: 0 },
					{ x: 20, y: 70 },
					{ x: 30, y: 70 },
					{ x: 10, y: 140 },
					{ x: 150, y: 300 },
					{ x: 75, y: 150 },
				]}
			/>
			<Blob
				size={{ height: 200, width: 310 }}
				color="blue"
				wanderCoords={[
					{ x: 400, y: 90 },
					{ x: 560, y: 190 },
					{ x: 620, y: 90 },
					{ x: 500, y: 40 },
					{ x: 350, y: 75 },
					{ x: 260, y: 170 },
				]}
			/>
				
		</div>
	);
}

export default App;
