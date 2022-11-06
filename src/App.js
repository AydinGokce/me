import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import { createTheme, ThemeProvider, CssBaseline, Box, IconButton } from '@mui/material';
import './style.scss';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Tetra from './assets/cursor.gif';
 

const theme = createTheme({
  palette: {
    background: {
      default: "#000000",
    }
  },
  typography: {
    fontFamily: ["sans-serif", "Montserrat Alternates"].join(","),
  }
})

function App() {

  const navigate = useNavigate();

  const mainCursor = useRef(null);
  const secondaryCursor = useRef(null);
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
        const mouseY = clientY - window.innerHeight;

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

        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
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
              width: '80px',
              backgroundColor: 'white',
            }}
            />



          </Box>
          <div className="secondary-cursor" ref={secondaryCursor}>
            <div className="cursor-background"></div>
          </div>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
