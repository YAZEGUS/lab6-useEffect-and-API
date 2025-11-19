import { useState, useEffect } from 'react';
import FilmCard from './FilmCard';

function FilmList() {
  // 1. Стан для даних, завантаження та помилок
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Функція запиту до API
  const fetchFilms = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://ghibliapi.vercel.app/films');
      
      if (!response.ok) {
        throw new Error('Не вдалося завантажити список фільмів');
      }

      const data = await response.json();
      setFilms(data); // Зберігаємо фільми
    } catch (err) {
      setError(err.message); // Зберігаємо текст помилки
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchFilms();
  }, []);

  if (loading) return <div className="status-message">⏳ Завантаження шедеврів...</div>;
  if (error) return <div className="status-message error">❌ Помилка: {error}</div>;

  return (
    <div className="film-grid">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export default FilmList;
