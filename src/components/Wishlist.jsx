import { useEffect, useState } from 'react';

export default function Wishlist({ id }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://brsvdmtr-wishlist-mvp-server-51e7.twc1.net/api/wishlist/${id}`)
      .then(res => res.ok ? res.json() : Promise.reject('Не найдено'))
      .then(setData)
      .catch(err => setError(err));
  }, [id]);

  if (error) return <p>❌ Ошибка: {error}</p>;
  if (!data) return <p>⏳ Загрузка...</p>;

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h1>{data.title}</h1>
      <ul style={{ paddingLeft: '1.2rem' }}>
        {data.items.map((item, idx) => (
          <li key={idx}>🎁 {item}</li>
        ))}
      </ul>
    </div>
  );
}