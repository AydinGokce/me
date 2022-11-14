import React from 'react'
import WorkExperience from './WorkExperience'
import { Grid, Typography } from '@mui/material'

import Furtrieve from '../assets/experience/furtrieve.jpeg'
import Hume from '../assets/experience/hume.jpeg'
import IBionicS from '../assets/experience/ibionics.png'
import JHU from '../assets/experience/jhu.png'
import MITRE from '../assets/experience/mitre.png'
import TREC from '../assets/experience/trec.png'
import GMU from '../assets/experience/gmu.png'

function ExpGrid() {

    const workExperiences = [
        {
            logo: TREC,
            position: "Researcher",
            tags: ["AI Robotics", "Reinforcement Learning"],
            dates: "Aug 2022 - Present",
            description: ["Leverages reinforcement learning and recurrent AI to train simulated robots"]
        },
        {
            logo: MITRE,
            position: "Computer Vision Intern",
            tags: ["AI", "Autonomous Vehicles"],
            dates: "May 2022 - Jul 2022",
            description: [
             "Applies deep learning to solve event-based optical flow",
             "Generalizes research to autonomous vehicles",
             "Builds and trains ML pipelines in AirSim"]
        },
        {
            logo: Hume,
            position: "Researcher",
            tags: ["AI", "Reinforcement Learning"],
            dates: "Sep 2021 - May 2022",
            description: [
             "Built an RL repository into a scalable modular MLOps package",
             "Discovered rewards which contributed to emergent cooperation in multi-agent reinforcement learning environments."]
        },
        {
            logo: JHU,
            position: "Research Assistant",
            tags: ["Machine Learning", "Convolutional Neural Networks"],
            dates: "Aug 2021 - May 2022",
            description: [
             "Generates and processes a large amount of data as a basis for binary classification models",
             "Employs various machine learning techniques with the goal of creating a model capable of distinguishing between control & shaky signals",
             "Works towards creating an algorithm to assess severity of Parkinson's Disease"]
        },
        {
            logo: Furtrieve,
            position: "Computer Vision Intern",
            tags: ["AI", "Computer Vision"],
            dates: "May 2021 - Aug 2021",
            description: [
             "Compiled, processed and augmented large amounts of training data",
             "Employed advanced neural network architectures to perform object localization, segmentation and pose estimation",
             "Developed an algorithm to extract pose data from videos"]
        },
        {
            logo: GMU,
            position: "NLP Intern",
            tags: ["Natural Language Processing"],
            dates: "Jun 2020 - Aug 2020",
            description: [
             "Collaborated with 3 members in a team to determine style-unique features in text",
             "Built pipeline to identify unique fingerprint of an author.",
             "Determined key attributes of text contributing to a unique textual fingerprint"]
        },
        {
            logo: IBionicS,
            position: "Research Assistant",
            tags: ["AI", "Computer Vision"],
            dates: "Jul 2018 - Aug 2018",
            description: [
            "Developed an API to control a quadcopter using a state-of-the-art textile interface.",
            "Built a ROS-based communication network between quadcopter and ground control.",
            "Demonstrated practical application of the sensor to control quadcopters." ]
        }
    ]

    return (
        <Grid container spacing={2}>
            {
                workExperiences.map((workExperience, index) => {
                    return (
                        <Grid item xs={12}>
                            <WorkExperience
                                logo={workExperience.logo}
                                position={workExperience.position}
                                tags={workExperience.tags}
                                dates={workExperience.dates}
                                description={workExperience.description}
                                key={index}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default ExpGrid