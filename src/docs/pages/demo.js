import { useEffect } from 'react';
import ScratchCard from '../../lib/';
import CoverImage from './img/cover.jpg';

const Demo = () => {
  useEffect(() => {
    console.log(CoverImage);
  }, []);
  return (
    <div className='Demo'>
      <h2>Demo</h2>

      <ScratchCard
        width={322}
        height={190}
        cover={CoverImage}
        onComplete={() => {
          alert('done');
        }}
      >
        <div className='content' />
      </ScratchCard>
    </div>
  );
};
export default Demo;
