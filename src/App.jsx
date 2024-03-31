import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

const App = () => {
  const cards = data.map((entry) => {
    const key = Math.random().toString(16).slice(2);
    return <Card key={key} {...entry} />;
  });
  return (
    <>
      <Navbar />
      <main>
        <h1 className='title'>Weclome to my travel journal!</h1>
        <div className='cards'>{cards}</div>
      </main>
    </>
  );
};

export default App;
