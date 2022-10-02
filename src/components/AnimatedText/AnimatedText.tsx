import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import './AnimatedText.scss';

interface Props {
  text: string;
  tag?: string;
}

const animationClass = 'animate';
const dropAnimationClass = 'drop';
const invisibleLetter = 'i';

const AnimatedText: FunctionComponent<Props> = (props: Props) => {
  const CustomTag = `${props.tag || 'span'}` as keyof JSX.IntrinsicElements;
  const [droppedLetters, setDroppedLetters] = useState<
    Array<{ x: number; y: number; letter: string }>
  >([]);

  const animateLetter = (e: MouseEvent) => {
    (e.target as HTMLHtmlElement).classList.add(animationClass);
  };

  const endAnimation = (e: AnimationEvent) => {
    (e.target as HTMLHtmlElement).classList.remove(animationClass);
  };

  const dropLetter = (e: MouseEvent) => {
    (e.target as HTMLHtmlElement).classList.add(invisibleLetter);
    const rect = (e.target as HTMLHtmlElement).getBoundingClientRect();

    setDroppedLetters([
      ...droppedLetters,
      {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
        letter: (e.target as HTMLHtmlElement).innerText,
      },
    ]);
  };

  return (
    <div>
      {droppedLetters.map((l) => (
        <span className='dropped-letter' style={{ left: l.x }}>
          {l.letter}
        </span>
      ))}
      {Array.from(props.text).map((l) => {
        return (
          <CustomTag
            className='al'
            onMouseEnter={animateLetter}
            onAnimationEnd={endAnimation}
            onClick={dropLetter}
          >
            {l === ' ' ? <>&nbsp;</> : l}
          </CustomTag>
        );
      })}
    </div>
  );
};

export default AnimatedText;
