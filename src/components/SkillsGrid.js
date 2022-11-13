import React from 'react'

import { Grid, Typography } from '@mui/material'

function SkillsGrid() {
    return (
        <Grid container spacing={2} sx={{width: "100%"}}>
            <Grid item xs={12} >
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
    )
}

export default SkillsGrid