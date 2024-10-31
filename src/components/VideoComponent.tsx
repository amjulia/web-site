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
//       <YouTube videoId="M7lc1UVf-VE" opts={opts}/>
//     </VideoContainer>
//   );
// };

// export default VideoComponent;



import styled from 'styled-components';
const VideoContainer = styled.div`
   width:100%;
  
   
   overflow: hidden; 
  `
 
const VideoComponent = () => {
 
   const src = "https://rutube.ru/play/embed/c6cc4d620b1d4338901770a44b3e82f4";
  return (
<VideoContainer>
<iframe
      width="100%"
      height="320"
      src={src}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
</VideoContainer>
     
  );
};

export default VideoComponent;

