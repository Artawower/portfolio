import { FunctionComponent } from 'preact';
import AnimatedText from '@/components/AnimatedText/AnimatedText';
import Tags from '@/components/Tags/Tags';
import './MainPage.scss';
import Portrait from '@/components/Portrait/Portrait';
import { ABOUT_ME } from '@/constants/about-me';

const MainPage: FunctionComponent = () => {
  return (
    <div className='main-page'>
      <div className='left-bar'>
        <Portrait />
        <Tags tags={['scss', 'sass']} />
      </div>
      <div className='main-content'>
        <AnimatedText text='Hello, my name is Artur' />
        <div className='about-me' dangerouslySetInnerHTML={{__html: ABOUT_ME}}></div>
      </div>
    </div>
  );
};

export default MainPage;
