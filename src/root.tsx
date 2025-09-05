import ReactDOM from 'react-dom/client';
import ScratchCard from '.';
import Content from './linePoint50.jpg';
import Cover from './cover.jpg';

const App = () => {
  return (
    <div className='absolute top-96'>
      <ScratchCard
        cover={Cover}
        width={645}
        height={380}
        onComplete={() => alert('Completed!')}
        brushSize={{ width: 100, height: 100 }}
      >
        <img src={Content} />
      </ScratchCard>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('app')!).render(<App />);
