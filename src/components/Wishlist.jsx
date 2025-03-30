import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Wishlist() {
  const { id } = useParams();
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
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 700,
        borderBottom: '2px solid #444',
        paddingBottom: '0.5rem',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        📝 Wishlist <span style={{ color: '#aaa' }}>от {data.title}</span>
      </h1>

      <ul style={{ padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {data.items.map((item, idx) => (
          <li key={idx} style={{
            padding: '1rem',
            background: '#282828',
            borderRadius: '10px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.25rem' }}>🎁</span>
              <span style={{ fontSize: '1.1rem' }}>{item}</span>
            </span>
            <button style={{
              background: '#444',
              border: 'none',
              borderRadius: '6px',
              padding: '0.4rem 0.8rem',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}>
              Подробнее
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}