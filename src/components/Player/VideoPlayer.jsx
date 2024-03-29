import YouTube from 'react-youtube';
import './VideoPlayer.scss';
import { memo } from 'react';
const VideoPlayerComponent = ({videoId}) => {
    const opts = {
        playerVars: {
            controls: 0, // Скрыть стандартные элементы управления
            modestbranding: 1, // Скрыть логотип YouTube
            enablejsapi: 1, // Включить JS API YouTube
            showinfo: 0, // Скрыть информацию о видео перед воспроизведением
            rel: 0, // Скрыть рекомендации в конце видео
            fs: 0, // Скрыть кнопку "Полноэкранный режим"
        }
    };

  return (
    <div className="treyler__wrapper">
        <div className='treyler'>
      <YouTube videoId={videoId} opts={opts} />
    </div>
    </div>
  );
};

export const VideoPlayer = memo(VideoPlayerComponent);
