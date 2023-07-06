import { FunctionComponent } from 'preact';
import AnimatedText from '@/components/AnimatedText/AnimatedText';
import Tags from '@/components/Tags/Tags';
import './MainPage.scss';
import Portrait from '@/components/Portrait/Portrait';
import SocialMedia from '@/components/SocialMedia/SocialMedia';
import StdoutText from '@/components/StdoutText/StdoutText';
import { SwipeEvent, useSwipe } from 'ag-swipe-react';

import {
  ABOUT_ME,
  BEST_HARD_SKILLS,
  GOOD_HARD_SKILLS,
  SOFT_SKILLS,
} from '@/constants/about-me';
import { useEffect, useState } from 'preact/hooks';
import { debounce } from '@/tools';

enum DeviceType {
  DESKTOP = 'desktop',
  MOBILE = 'mobile',
  TABLET = 'tablet',
}

const tabletWidth = 768;
const mobileWidth = 480;

enum Tabs {
  SOCIAL = 'social',
  SKILLS = 'skills',
  ABOUT_ME = 'about-me',
  /* TIMELINE = 'timeline', */
}

const MainPage: FunctionComponent = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>(DeviceType.DESKTOP);
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.SOCIAL);

  const tabs = Object.values(Tabs);

  const determineDeviceType = () => {
    const width = window.innerWidth;
    if (width <= mobileWidth) {
      setDeviceType(DeviceType.MOBILE);
      return;
    }
    if (width <= tabletWidth) {
      setDeviceType(DeviceType.TABLET);
      return;
    }
    setDeviceType(DeviceType.DESKTOP);
  };

  const isCurrentDeviceType = (t: DeviceType): boolean => deviceType === t;

  const showSection = (tab: Tabs): boolean => {
    if (isCurrentDeviceType(DeviceType.DESKTOP)) {
      return true;
    }
    if (tab === activeTab) {
      return true;
    }
    return false;
  };

  const changeScreen = (inc: number) => {
    setActiveTab((prev) => {
      const currentTab = tabs.indexOf(prev);
      const nextTabIndex = currentTab + inc;
      if (nextTabIndex < 0) {
        return tabs[tabs.length - 1];
      }
      if (nextTabIndex >= tabs.length) {
        return tabs[0];
      }
      return tabs[nextTabIndex];
    });
  };

  const swipeElement = useSwipe({
    onSwipeEnd: (event: SwipeEvent) => {
      if (event.direction !== 'x') {
        return;
      }
      changeScreen(event.distance < 0 ? 1 : -1);
      /* console.log(
       *   `SwipeEnd direction: ${event.direction} and distance: ${event.distance}`
       * ); */
    },
  });

  useEffect(() => {
    const resizeHandler = () => {
      determineDeviceType();
    };
    const debouncedResizeHandler = debounce(resizeHandler, 10);
    debouncedResizeHandler();
    window.addEventListener('resize', debouncedResizeHandler);
  }, []);

  return (
    <div className='main-page' ref={swipeElement}>
      {(showSection(Tabs.SOCIAL) || showSection(Tabs.SKILLS)) && (
        <div className='left-bar'>
          {showSection(Tabs.SOCIAL) && (
            <div className='social-face'>
              <Portrait />
              <SocialMedia
                github='https://github.com/artawower'
                email='mailto:artawower@protonmail.com'
                linkedin='https://www.linkedin.com/in/artawower/'
                download='https://raw.githubusercontent.com/Artawower/portfolio/public/Artur%20Yaroshenko%20CV.pdf'
                telegram='https://telegram.me/artawower'
              />
            </div>
          )}
          {showSection(Tabs.SKILLS) && (
            <div className='info card'>
              <h2 className='f-grass section'>Soft skills </h2>
              <Tags tags={SOFT_SKILLS} />
              <h2 className='f-coral section'>Awesome hard skills</h2>
              <Tags tags={BEST_HARD_SKILLS} />
              <h2 className='f-sky section'>Medium hard skills</h2>
              <Tags tags={GOOD_HARD_SKILLS} />
            </div>
          )}
        </div>
      )}
      {showSection(Tabs.ABOUT_ME) && (
        <div className='main-content card'>
          <AnimatedText text='Hello, my name is Artur' />
          <StdoutText text={ABOUT_ME} />
        </div>
      )}
      {!isCurrentDeviceType(DeviceType.DESKTOP) && (
        <div className='navigation-bar'>
          {tabs.map((tab) => (
            <div
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(tab);
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainPage;
