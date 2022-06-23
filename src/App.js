import "./App.css";

function App() {
  const grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  // WRITE YOUR CODE HERE
  const newGrid = [];

  return (
    <div className="game-board">
      {grid.map((element) => (
        <div key={element} className="box"></div>
      ))}
    </div>
  );
}

export default App;
