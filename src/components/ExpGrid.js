import React from 'react'

import { Grid, Typography } from '@mui/material'

function ExpGrid() {
    return (
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
    )
}

export default ExpGrid