import logo from '../logo.svg';
import '../App.css';
import '../style.scss';
import { useNavigate } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function Home() {

    document.body.style.cursor = 'none';

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
            if (!`${window.location}`.includes('about')) {
                positionRef.current.key = requestAnimationFrame(followMouse);

                const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } = positionRef.current;

                if (!destinationX || !destinationY) {
                    positionRef.current.destinationX = mouseX;
                    positionRef.current.destinationY = mouseY;
                } else {
                    positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
                    positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

                    if (Math.abs(positionRef.current.distanceX) +
                        Math.abs(positionRef.current.distanceY) <
                        0.1) { // this line is a little different form the video
                        positionRef.current.destinationX = mouseX;
                        positionRef.current.destinationY = mouseY;
                    } else {
                        positionRef.current.destinationX += distanceX;
                        positionRef.current.destinationY += distanceY;
                    }
                }


                secondaryCursor.current.style.transform = `translate3d(${positionRef.current.destinationX}px, ${positionRef.current.destinationY}px, 0)`;
            };

        };
        followMouse();
    }, []);


    return (
        <Box onClick={() => {
            document.removeEventListener("mousemove", (event) => {
                const { clientX, clientY } = event;

                const mouseX = clientX;
                const mouseY = clientY - window.innerHeight;

                positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2;
                positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2;

                mainCursor.current.style.transform = `translate3d(${mouseX - mainCursor.current.clientWidth / 2}px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
            });
            document.body.style.cursor = 'auto';

            navigate('/about')
        }}>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                className="main-cursor " ref={mainCursor}>


                <IconButton id="btn" position="absolute" className="main-cursor-background" color="primary" component="label" sx={{ zIndex: 1400, backgroundColor: "red" }} ref={mainCursor}>

                    <DoubleArrowIcon />

                </IconButton>

            </Box>
            <div className="secondary-cursor" ref={secondaryCursor}>
                <div className="cursor-background"></div>
                Learn about Aydin.
            </div>
        </Box>
    )
}

export default Home