import './App.css';
import data from './data.json';
import Header from './components/Header';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
      <Header text="Supriya!!" />
      <div className="block-container">
        {data.blocks.map((block, index) => (
          <Box
            key={index}
            name={block.name}
            description={block.description}
            color={block.color}
          />
        ))}
      </div>
    </div>
  );
}

export default App;



