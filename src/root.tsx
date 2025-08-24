import ReactDOM from 'react-dom/client';
import ScratchCard from '.';
import Content from './linePoint50.jpg';
import Cover from './cover.jpg';

const App = () => {
  return (
    <div>
      <ScratchCard cover={Cover} width={645} height={380} onComplete={() => alert('Completed!')}>
        <img src={Content} />
      </ScratchCard>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('app')!).render(<App />);
