import Header from './components/Header';
import FilmList from './components/FilmList';
import './styles.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <FilmList />
      </main>
    </div>
  );
}

export default App;