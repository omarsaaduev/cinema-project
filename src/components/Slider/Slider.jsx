import { useEffect, useRef, useState } from 'react';
import './Slider.scss'; 
import { Link } from 'react-router-dom';

export const Slider = ({images}) => {
  
  const containerRef = useRef(null); // Ссылка на контейнер изображений
  const [scrollLeft, setScrollLeft] = useState(0); // текущая позиция скролла

  // Функция для плавной и непрерывной прокрутки
  useEffect(() => {
    const scrollContainer = containerRef.current;
    let animationFrameId;

    const loopScroll = () => {
      setScrollLeft((prevScrollLeft) => {
        const newScrollLeft = prevScrollLeft + 1;
        if (newScrollLeft > scrollContainer.scrollWidth) {
          return 0;
        }
        return newScrollLeft;
      });
      animationFrameId = requestAnimationFrame(loopScroll);
    };

    animationFrameId = requestAnimationFrame(loopScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [scrollLeft]);

  return (
    <div className="image-slider-container" ref={containerRef}>
      <div className="image-slider" style={{ transform: `translateX(${-scrollLeft}px)` }}>
        {images.map((image, index) => (
          <Link className='upLink'   key={index} to={`/upcoming/${index+1}`}>
            <img className='upImage'  src={image} alt={`Изображение ${index + 1}`} />
          </Link>
        ))}
      </div>
     </div>
  );
}

