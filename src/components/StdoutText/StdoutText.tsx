import { FunctionComponent } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

import './StdoutText.scss';

interface Props {
  text: string[];
}

const typeTimeout = 30;
const typeTimeoutAfterCarriage = 1500;

const StdoutText: FunctionComponent<Props> = ({ text }) => {
  const [charBlocks, setCharBlocks] = useState<string[]>(['']);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  const [letterPosition, setLetterPosition] = useState(0);

  const [isProgrammaticallScrolling, setIsProgrammaticallScrolling] =
    useState(false);

  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  const [allowAutoScroll, setAllowAutoScroll] = useState(true);

  const [currentBlock, setCurrentBlock] = useState<string>(
    text[currentParagraphIndex]
  );

  const scrollToBottom = () => {
    if (!allowAutoScroll || !containerRef.current) {
      return;
    }
    containerRef.current!.scrollTop = containerRef.current!.scrollHeight;
    setIsProgrammaticallScrolling(true);
    setPrevScrollPosition(containerRef.current!.scrollTop);
  };

  const containerScrolled = () => {
    if (isProgrammaticallScrolling) {
      setIsProgrammaticallScrolling(false);
      return;
    }
    const { scrollTop } = containerRef.current!;
    setAllowAutoScroll(scrollTop >= prevScrollPosition);
  };

  const renderNextLetter = () => {
    if (letterPosition === currentBlock.length) {
      setCurrentParagraphIndex(currentParagraphIndex + 1);
      if (currentParagraphIndex + 1 >= text.length) {
        return;
      }
      setCurrentBlock(text[currentParagraphIndex + 1]);
      setCharBlocks((prev) => [...prev, '']);
      setLetterPosition(0);
      return;
    }

    const letter = currentBlock[letterPosition];
    const newBlocks = [...charBlocks];

    const lastBlock = newBlocks.pop();
    const updatedBlocks = [...newBlocks, lastBlock + letter];

    setCharBlocks(updatedBlocks);
    setLetterPosition(letterPosition + 1);
    scrollToBottom();
  };

  useEffect(() => {
    const timeout =
      letterPosition === 0 ? typeTimeoutAfterCarriage : typeTimeout;

    setTimeout(() => {
      renderNextLetter();
    }, timeout);
  }, [letterPosition]);

  return (
    <div ref={containerRef} className='stdout' onScroll={containerScrolled}>
      {charBlocks.map((c, i) => {
        return (
          <div className='sequence'>
            {/* <span className='username'>[art] </span> */}
            <span className='path'>~/home/portfolio</span>
            <span className='new-line'>$ </span>
            {c}{' '}
            {i === charBlocks.length - 1 && (
              <span
                className={`carriage ${
                  letterPosition === currentBlock.length
                    ? 'blinked-carriage'
                    : ''
                }`}
              ></span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StdoutText;
