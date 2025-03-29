import Wishlist from './components/Wishlist';

function App() {
  const id = 'd1f02129-579c-4076-8868-94d7bad67cbb'; // здесь временно жёстко задан ID

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <Wishlist id={id} />
    </div>
  );
}

export default App;