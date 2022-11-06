import React from 'react'
import { Slide, Box, Typography, Grid, Divider, Accordion, AccordionDetails, AccordionSummary, AccordionActions, Button, styled, IconButton } from '@mui/material'
import { TextLoop } from "react-text-loop-next";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';
import SchoolOfAthens from '../assets/athens.jpg'
import MeRectangle from '../assets/me_rectangle.png'
import Tetra from '../assets/tetra.gif'
import PiSlices from '../assets/pislices.gif'

function About() {
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const navigate = useNavigate();
    return (
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <Grid container
                direction='column'
                justifyContent='space-between'
                spacing={0}
                sx={{ minHeight: '100vh' }}>
                <Grid item>
                    <Grid container sx={{height: 'min-content', borderTop: '1px solid white', borderBottom: '1px solid white'}}>
                        <Grid item display='flex' justifyContent='center' alignItems='center'>
                            <Box
                                component='img'
                                src={MeRectangle}
                                sx={{
                                    width: '150px',
                                    height: '150px',
                                    borderRight: '1px solid white'
                                }}
                            />


                        </Grid>

                        <Grid item display='flex' flexDirection='column' justifyContent='center' alignItems='flex-start' sx={{ paddingLeft: "15px" }}>
                            <Typography align="left" variant="h2" color="white">
                                Hi! I'm Aydin
                            </Typography>
                            <Box sx={{
                                width: "max-content"
                            }}>
                                <TextLoop style={{ backgroundColor: 'red' }}>
                                    <Typography align="left" variant="h5" color="white">Engineer</Typography>
                                    <Typography align="left" variant="h5" color="white">Entrepreneur</Typography>
                                    <Typography align="left" variant="h5" color="white">Researcher</Typography>
                                </TextLoop>
                            </Box>
                            <Typography align="left" variant="h6" color="white">
                                AI Robotics @ Virginia Tech
                            </Typography>
                        </Grid>
                        <Grid item display='flex' justifyContent='flex-end' sx={{right: 0, marginLeft: 'auto', height: 'min-content'}}>
                            <Box
                                component='img'
                                src={PiSlices}
                                sx={{
                                    border: '1px solid white',
                                    borderBottom: 'none',
                                    width: '150px',
                                    height: '150px'
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid display='flex' justifyContent='space-evenly' alignItems='center' container sx={{ padding: "0px 20px", height: '100%', marginBottom: "15px" }}>
                        <Grid item>
                            <Box
                                component='img'
                                src={Tetra}
                                sx={{
                                    width: '150px',
                                    height: '150px',
                                }}
                            />
                            <Box sx={{ maxWidth: "500px" }}>

                                <Typography gutterBottom align="left" variant="body1" color="white">
                                    I'm here to build discover what's possible, build cool shit, and maximize the magnitude of beauty in the world.
                                </Typography>
                                <Typography gutterBottom align="left" variant="body1" color="white">
                                    Interested in anatomical compilers, AI robotics and statecraft.
                                </Typography>
                                <Typography gutterBottom align="center" variant="body1" color="white">
                                    回
                                </Typography>

                                <Typography align="left" variant="body1" color="white" sx={{ fontStyle: 'italic' }}>
                                    "Man is completely human when he is at play" - Carl G. Jung
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box sx={{
                                width: "max-content"
                            }}>
                                <Box sx={{ display: 'flex' }}>
                                    <Typography align="left" variant="body1" color="white">
                                        Want to work with me?&nbsp;
                                    </Typography>
                                    <Typography align="left" variant="body1" color="white" sx={{fontWeight: 'bold'}}>
                                        Here's what I'm good at.
                                    </Typography>
                                </Box>


                                <Accordion sx={{
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    margin: '10px 0px'
                                }}>

                                    <AccordionSummary sx={{
                                        border: '1px solid white',
                                        borderRadius: '10px',
                                    }} expandIcon={!expanded1 ? <AddCircleOutlineIcon sx={{ color: "white" }} /> : <RemoveCircleOutlineIcon sx={{ color: "white" }} />} onClick={() => setExpanded1(e => !e)}>
                                        <Typography align="left" variant="h5" color="white">Work Experience</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ maxWidth: "500px", maxHeight: "400px", overflowY: "scroll" }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography align="left" variant="h6" color="white">AI Robotics @ Virginia Tech</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography align="left" variant="h6" color="white">Autonomous Vehicles @ MITRE</Typography>
                                                <Typography align="left" variant="body1" color="white">I built custom encoder-decoder neural networks to work on event-based cameras. I developed a pipeline for detecting pedestrians and cars using an asynchronous stream of pixel intensity changes.</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography align="left" variant="h6" color="white">AI Emergent Phenomena @ Virginia Tech</Typography>
                                                <Typography align="left" variant="body1" color="white">Building off previous work, I built an MLOps package to rapidly test and iterate reward functions. Using this package, I worked with a team to train multiple agents to cooperate to contain enemy agents.</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography align="left" variant="h6" color="white">Medical AI @ Johns Hopkins University</Typography>
                                                <Typography align="left" variant="body1" color="white">I worked with a team to leverage convolutional neural networks to classify tremor severity of Parkinson's Disease patients.</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography align="left" variant="h6" color="white">Computer Vision @ Furtrieve</Typography>
                                                <Typography align="left" variant="body1" color="white">I build a machine learning framework which performs pose estimation and segmentation to predict dog behavior from videos.</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography align="left" variant="h6" color="white">Robotics @ IBionicS Laboratory</Typography>
                                                <Typography align="left" variant="body1" color="white">I built a drone controller from a state of the art textile force sensor.</Typography>
                                            </Grid>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion sx={{
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                }}>

                                    <AccordionSummary sx={{
                                        border: '1px solid white',
                                        borderRadius: '10px',
                                    }} expandIcon={!expanded2 ? <AddCircleOutlineIcon sx={{ color: "white" }} /> : <RemoveCircleOutlineIcon sx={{ color: "white" }} />} onClick={() => setExpanded2(e => !e)}>
                                        <Typography align="left" variant="h5" color="white">Languages</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ maxWidth: "500px" }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography align="left" variant="h6" color="white">Python</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography align="left" variant="h6" color="white">Java</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography align="left" variant="h6" color="white">JavaScript & React</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography align="left" variant="h6" color="white">C</Typography>
                                            </Grid>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item
                    sx={{
                        height: '100%',
                        width: '100%',
                        backgroundImage: `url(${SchoolOfAthens})`,
                        backgroundPosition: 'center',
                    }}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            backgroundColor: 'black',
                            width: 'max-content',
                            margin: '20px auto',
                            padding: '5px 10px',
                            borderRadius: '20px',
                        }}
                    >
                        <IconButton onClick={() => window.open("https://github.com/AydinGokce", "_blank")}>
                            <GitHubIcon sx={{ color: "white" }} />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/aydin-gokce/", "_blank")}>
                            <LinkedInIcon sx={{ color: "white" }} />
                        </IconButton>
                        <IconButton onClick={() => window.open("mailto:aydingokce@vt.edu")}>
                            <EmailIcon sx={{ color: "white" }} />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://instagram.com/aydinguy", "_blank")}>
                            <InstagramIcon sx={{ color: "white" }} />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://twitter.com/aydinguy", "_blank")}>
                            <TwitterIcon sx={{ color: "white" }} />
                        </IconButton>

                    </Box>
                </Grid>

            </Grid>
        </Slide >
    )
}

export default About