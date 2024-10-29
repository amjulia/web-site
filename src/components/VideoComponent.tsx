import YouTube from 'react-youtube';

const VideoComponent = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
       
      autoplay: 1,
    },
  };

  return <YouTube videoId="dQw4w9WgXcQ" opts={opts} />;
};

export default VideoComponent;

