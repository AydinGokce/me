import React from 'react'
import { useMediaQuery, Box, Typography, Grid, Fade, Divider, CssBaseline, Accordion, AccordionDetails, AccordionSummary, Link, IconButton, Chip, Card, CardMedia, CardContent, ThemeProvider } from '@mui/material'
import ExpGrid from '../components/ExpGrid'
import Tetra from '../assets/tetra2.gif'
import Styles from '../Styles';
import Header from '../components/Header';
import SkillsGrid from '../components/SkillsGrid';


function About(props) {
    const { containerRef, theme, projectCards } = props;
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const styles = Styles(theme);
    //check if screen is sm using breakpoints
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
    console.log(JSON.stringify(styles.header));
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Fade in={true} mountOnEnter unmountOnExit>
                <Box ref={containerRef}>
                    {
                        smallScreen ? null : <Box sx={{ height: '10px' }} />
                    }
                    <Grid container
                        direction='column'
                        justifyContent='space-between'
                        alignItems='center'
                        spacing={0}
                        sx={{ minHeight: '100vh', maxWidth: '1000px', margin: 'auto', }}>
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
                                <Typography gutterBottom align={smallScreen ? "center" : "left"} variant="body1" color="white" fontWeight="Bold" sx={{fontWeight: "500"}}>
                                    About Me
                                </Typography>
                                <Typography gutterBottom align={smallScreen ? "center" : "left"} variant="body1" color="white" sx={{fontWeight: "300"}}>
                                    I'm interested in computational biology, information theory, robotics, AI and statecraft. I'm an AI robotics researcher at Virginia Tech and I'm independently researching how morphology can be simulated with cellular automata. Action &gt; everything.
                                </Typography>
                                <Typography align={smallScreen ? "center" : "left"} variant="body1" color="white" sx={{ fontStyle: 'italic' }}>
                                    "Man is completely human when he is at play" - Carl G. Jung
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item sx={{ marginTop: '20px', width: '100%' }}>
                            <Divider flexItem variant='middle' sx={{ color: 'white', "&::before, &::after": { borderColor: "white", }, }} >✧</Divider>
                        </Grid>
                        <Grid item sx={{ marginTop: '20px', width: '100%', padding: "0px 10px" }}>
                            <Box display="flex" justifyContent="left" alignItems="center">
                                <Typography color="white" align="left" variant="body1" fontWeight="bold" gutterBottom>Projects&nbsp;</Typography>
                                <Typography color="white" align="left" variant="subtitle1" gutterBottom>(2019 - 2022)</Typography>
                            </Box>
                            {projectCards}

                        </Grid>
                        <Grid item sx={{ marginTop: '40px', width: '100%' }}>
                            <Divider flexItem variant='middle' sx={{ color: 'white', "&::before, &::after": { borderColor: "white", }, }} >✧</Divider>
                        </Grid>
                        <Grid item sx={{ marginTop: '40px', padding: "0px 10px", width: '100%', maxWidth: '1500px' }}>
                            <SkillsGrid />
                            <Grid item sx={{ margin: '40px 0px', width: '100%' }}>
                                <Divider flexItem variant='middle' sx={{ color: 'white', "&::before, &::after": { borderColor: "white", }, }} >✧</Divider>
                            </Grid>
                            <Typography gutterBottom align={smallScreen ? "center" : "left"} variant="body1" color="white" fontWeight="Bold">
                                Experience
                            </Typography>
                            <ExpGrid />

                        </Grid>
                    </Grid>

                </Box>
            </Fade >
        </ThemeProvider>
    )
}

export default About