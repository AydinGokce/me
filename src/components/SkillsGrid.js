import React from 'react'
import { useMediaQuery, Box, Typography, Grid, Fade, Divider, CssBaseline, Accordion, AccordionDetails, AccordionSummary, Link, IconButton, Chip, Card, CardMedia, CardContent, ThemeProvider } from '@mui/material'

function SkillsGrid() {

    const skills = [
        {
            category: "Languages",
            skills: ["Python", "C", "C++", "Java", "JavaScript", "MATLAB", "HTML", "CSS", "SQL", "Bash", "LaTeX", "Markdown"]
        },
        {
            category: "Robotics",
            skills: ["ROS", "PyBullet", "OpenCV", "Fusion 360", "Gazebo", "Redis", "3D Printing", "Soldering", "Arduino", "Raspberry Pi", "Jetson Nano", "Circuit Design", "Pneumatics", "Quadcopters", "UAVs"]
        },
        {
            category: "Machine Learning/AI",
            skills: ["Reinforcement Learning", "Computer Vision", "CNNs", "RNNs", "GANs", "Transformers", "Tensorflow", "Keras", "PyTorch", "SKLearn", "Pandas", "Numpy", "SB3", "Ray", "Jupyter", "Google Colab"]
        },
        {
            category: "Web Development",
            skills: ["React", "Node.js", "Express", "SQL Databases", "Flask", "Firebase", "Docker", "AWS", "Heroku"]
        },
    ]

    return (
        <Box>
            <Grid container spacing={2}>
                {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Typography variant='h5' color='white' sx={{ fontWeight: '300' }}>
                            {skill.category}
                        </Typography>
                        <Typography variant='body1' color='white' sx={{ fontWeight: '1' }}>
                            {skill.skills.join(", ")}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default SkillsGrid