import React from 'react'
import { useMediaQuery, Box, Typography, Grid, Fade, Divider, Accordion, AccordionDetails, AccordionSummary, Link, IconButton, Chip, Card, CardMedia, CardContent } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolOfAthens from '../assets/athens.jpg'
import Tetra from '../assets/tetra2.gif'
import Styles from '../Styles';
import Header from '../components/Header';
import Legs from '../assets/legs.jpeg';
import Planarian from '../assets/planarian.gif'
import Robot from '../assets/head2.gif'


function About(props) {
    const { containerRef, theme } = props;
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const styles = Styles(theme);
    //check if screen is sm using breakpoints
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
    console.log(JSON.stringify(styles.header));
    return (
        <Fade in={true} mountOnEnter unmountOnExit>
            <Box ref={containerRef}>
                <Grid container
                    direction='column'
                    justifyContent='space-between'
                    alignItems='center'
                    spacing={0}
                    sx={{ minHeight: '100vh', maxWidth: '1000px', margin: 'auto', marginTop: '10px' }}>
                    <Grid item sx={{ padding: "5px", width: '100%' }}>
                        <Header variant={smallScreen ? 'small' : 'large'} theme={theme} />
                    </Grid>
                    <Grid item sx={{ marginTop: '20px' }}>
                        <Box
                            component='img'
                            src={Tetra}
                            sx={{
                                width: '150px',
                                height: '150px',
                                marginBottom: '10px'
                            }}
                        />
                        <Box sx={{ padding: "0px 10px" }}>
                            <Typography gutterBottom align="left" variant="body1" color="white" fontWeight="Bold">
                                About Me
                            </Typography>
                            <Typography gutterBottom align="left" variant="body1" color="white">
                                I'm interested in computational biology, information theory, robotics, AI and statecraft. I'm an AI robotics researcher at Virginia Tech and I'm independently researching how morphology can be simulated with cellular automata. Action &gt; everything.
                            </Typography>


                            <Typography align="left" variant="body1" color="white" sx={{ fontStyle: 'italic' }}>
                                "Man is completely human when he is at play" - Carl G. Jung
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sx={{ marginTop: '20px', width: '100%' }}>
                        <Divider flexItem variant='middle' sx={{ color: 'white', "&::before, &::after": { borderColor: "white", }, }} >✧</Divider>
                    </Grid>
                    <Grid item sx={{ marginTop: '30px', }}>
                        <Typography gutterBottom align="center" variant="body1" color="white" sx={{ fontWeight: 'bold' }}>
                            What am I up to right now? &nbsp;
                        </Typography>
                        <Grid container spacing={2}>

                            <Grid item xs={12} sm={6} md={4}>

                                <Card display="flex" sx={{ width: 'min-content', backgroundColor: 'transparent', border: '1px solid white' }}>
                                    <CardMedia>
                                        <Box
                                            component='img'
                                            src={Legs}
                                            width={smallScreen ? "100%" : "150px"}
                                        />
                                    </CardMedia>
                                    <CardContent sx={{ color: 'white' }}>
                                        <Typography variant='body2'>
                                            Using AI to control humanoid robots at the <Link href="https://me.vt.edu/research/treclab.html" target="_blank" rel="noopener">TREC Lab</Link>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card display="flex" sx={{ width: 'min-content', backgroundColor: 'transparent', border: '1px solid white' }}>
                                    <CardMedia>
                                        <Box
                                            component='img'
                                            src={Planarian}
                                            width={smallScreen ? "100%" : "150px"}
                                        />
                                    </CardMedia>
                                    <Typography align='left' variant='caption' color="white">Gif by <Link href="https://distill.pub/2020/growing-ca/" target="_blank" rel="noopener">Dr. Levin et al.</Link></Typography>

                                    <CardContent sx={{ color: 'white' }}>
                                        <Typography variant='body2'>
                                            Researching morphology and cellular automata.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card display="flex" sx={{ width: 'min-content', backgroundColor: 'transparent', border: '1px solid white' }}>
                                    <CardMedia>
                                        <Box
                                            component='img'
                                            src={Robot}
                                            width={smallScreen ? "100%" : "150px"}
                                        />
                                    </CardMedia>
                                    <CardContent sx={{ color: 'white' }}>
                                        <Typography variant='body2'>
                                            Building <Link href="https://unosa.xyz" target="_blank" rel="noopener">Unosa.xyz</Link>
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item sx={{ marginTop: '20px', width: '100%' }}>
                        <Divider flexItem variant='middle' sx={{ color: 'white', "&::before, &::after": { borderColor: "white", }, }} >✧</Divider>
                    </Grid>
                    <Grid item sx={{ marginTop: '20px', padding: "0px 10px" }}>
                        <Box width={smallScreen ? "100%" : "max-content"} sx={{

                        }}>
                            <Box display="flex" flexDirection={smallScreen ? "column" : "row"}>
                                <Typography align="left" variant="body1" color="white">
                                    Want to work with me?&nbsp;
                                </Typography>
                                <Typography align="left" variant="body1" color="white" sx={{ fontWeight: 'bold' }}>
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
                                    <Typography align="left" variant="h5" color="white">Skills</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ maxWidth: "500px", maxHeight: "400px", overflowY: "scroll" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography align="left" variant="h6" color="white">Languages</Typography>
                                            <Typography align="left" variant="body1" color="white">
                                                - Expert: Java, Python, JavaScript, HTML, CSS
                                            </Typography>
                                            <Typography align="left" variant="body1" color="white">
                                                - Intermediate: C, MATLAB, SQL
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography align="left" variant="h6" color="white">Robotics</Typography>
                                            <Typography align="left" variant="body1" color="white">
                                                - ROS, PyBullet, OpenCV, Fusion 360, Redis
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography align="left" variant="h6" color="white">Machine Learning</Typography>
                                            <Typography align="left" variant="body1" color="white">- Theory: RL, computer vision, transformers, GANs, optimization</Typography>
                                            <Typography align="left" variant="body1" color="white">- Tools: TensorFlow, PyTorch, Keras, Scikit-Learn, Pandas, Numpy, SB3, Ray</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography align="left" variant="h6" color="white">Web Development</Typography>
                                            <Typography align="left" variant="body1" color="white">- React, Node.js, Express, Firebase</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography align="left" variant="h6" color="white">Other</Typography>
                                            <Typography align="left" variant="body1" color="white">- General: Git, Linux, Docker, Bash, LaTeX, Jupyter, Vim</Typography>
                                            <Typography align="left" variant="body1" color="white">- Hardware: Arduino, Raspberry Pi, STM32, FPGA, Soldering</Typography>
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{
                                width: '100%',
                                backgroundColor: 'transparent',
                                margin: '10px 0px'
                            }}>

                                <AccordionSummary sx={{
                                    border: '1px solid white',
                                    borderRadius: '10px',
                                }} expandIcon={!expanded2 ? <AddCircleOutlineIcon sx={{ color: "white" }} /> : <RemoveCircleOutlineIcon sx={{ color: "white" }} />} onClick={() => setExpanded2(e => !e)}>
                                    <Typography align="left" variant="h5" color="white">Work Experience</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ maxWidth: "500px", maxHeight: "400px", overflowY: "scroll" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography align="left" variant="h6" color="white">AI Robotics @ Virginia Tech</Typography>
                                            <Typography align="left" variant="body1" color="white">I'm working on using AI to learn control policies for a bipedal robot with unmodelable dynamics</Typography>
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
                        </Box>
                    </Grid>
                </Grid>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        height: '100px',
                        width: '100%',
                        marginTop: '50px',
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
                </Box>
            </Box>
        </Fade >
    )
}

export default About