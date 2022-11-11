import './App.css';
import { useNavigate } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';
import About from './pages/About';
import { createTheme, ThemeProvider, CssBaseline, Box } from '@mui/material';
import './style.scss';
import Tetra from './assets/cursor.gif';
import { Helmet } from 'react-helmet';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3nCos29fJeLRTWLMg9-Cgz1fXvXZ31R4",
  authDomain: "aydin-gokce-ad06f.firebaseapp.com",
  projectId: "aydin-gokce-ad06f",
  storageBucket: "aydin-gokce-ad06f.appspot.com",
  messagingSenderId: "777886345951",
  appId: "1:777886345951:web:ac09b05f2d8360d201d76a"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const theme = createTheme({
  palette: {
    background: {
      default: "#111111",
    }
  },
  typography: {
    fontFamily: ["Ubuntu", "sans-serif", "Montserrat Alternates"].join(","),
  }
})

function App() {
  const navigate = useNavigate();

  const mainCursor = useRef(null);
  const secondaryCursor = useRef(null);
  const container = useRef(null);

  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1
  })

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      if (secondaryCursor.current) {
        const { clientX, clientY } = event;

        const mouseX = clientX;
        const mouseY = container.current ? clientY - container.current.clientHeight : clientY - window.innerHeight;

        console.log(`${clientY} ${window.innerHeight} ${mouseY}`)

        positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2;
        positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2;

        mainCursor.current.style.transform = `translate3d(${mouseX - mainCursor.current.clientWidth / 2}px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
      }

    });

    return () => { };
  }, [])

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);

      const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } = positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.2;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.2;

        if (Math.abs(positionRef.current.distanceX) +
          Math.abs(positionRef.current.distanceY) <
          0.05) { // this line is a little different form the video
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }



        secondaryCursor.current.style.transform = `translate3d(${positionRef.current.destinationX}px, ${positionRef.current.destinationY}px, 0)`;
      };

    };
    followMouse();
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <About theme={theme} containerRef={container} />
        <Box onClick={() => {
          navigate('/about')
        }}>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="main-cursor " ref={mainCursor}>


            <Box 
            component='img'
            src={Tetra}
            className="main-cursor__image"
            alt="main cursor"
            ref={mainCursor}
            sx={{
              width: '40px',
              backgroundColor: 'white',
            }}
            />



          </Box>
          <div className="secondary-cursor" ref={secondaryCursor}>
          </div>
        </Box>
      </ThemeProvider>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="About Aydin Gokce" />
      </Helmet>
    </div>
  );
}

export default App;
