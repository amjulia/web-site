// import YouTube from 'react-youtube';
// import styled from 'styled-components';

// const VideoContainer = styled.div`
//   position: relative;
//   padding-bottom: 56.25%; 
//   height: 0;
//   overflow: hidden; 

//    iframe {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//   }
// `;

// const VideoComponent = () => {
//   const opts = {
//     height: '390',
//     width: '640',
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <VideoContainer>
//       <YouTube videoId="dQw4w9WgXcQ" opts={opts} />
//     </VideoContainer>
//   );
// };

// export default VideoComponent;



import styled from 'styled-components';
const VideoContainer = styled.div`
   position: relative;
   padding-bottom: 56.25%; 
   height: 0;
  `
 
const VideoComponent = () => {
 
  const src = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  return (
<VideoContainer>
<iframe
      width="560"
      height="315"
      src={src}
      title="Youtube Player"
      allowFullScreen
    />
</VideoContainer>
     
  );
};

export default VideoComponent;

