import { ABOUT_ME } from '@/constants/about-me';
import { FunctionComponent } from 'preact';
import './Portrait.scss';

const Portrait: FunctionComponent = () => {
  const descr = ABOUT_ME.join(' ');
  return (
    <div className='wrapper card'>
      <div className='portrait'>{descr.repeat(16)}</div>
      <div className='blackout'></div>
    </div>
  );
};

export default Portrait;
