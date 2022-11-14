import './App.css';
import { useNavigate } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useMediaQuery, Box, Typography, Button, Grid, Fade, Divider, Accordion, createTheme, ThemeProvider, CssBaseline, AccordionDetails, AccordionSummary, Link, IconButton, Chip, Card, CardMedia, CardContent, ButtonBase } from '@mui/material'
import './style.scss';
import Tetra from './assets/cursor.gif';
import { Helmet } from 'react-helmet';
import Mordo from './assets/mordo2.JPG'
import ProjectCard from './components/ProjectCard';
import { initializeApp } from "firebase/app";
import Legs from './assets/legs.jpeg';
import Planarian from './assets/planarian.gif';
import SchoolOfAthens from './assets/athens.jpg';
import Wheatley from './assets/wheatley.gif';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import GPT3 from './assets/gpt3.webp';
import RaceQuad from './assets/race_quad.jpg'
import Cerebellia from './assets/cerebellia_logo.png'
import UnosaLogo from './assets/unosa_logo.png'
import CereWatch from './assets/cere_watch.jpg'
import ScrollToTop from './components/ScrollToTop';
import MordoLaser from './assets/mordo_laser.jpeg'
import MordoCouch from './assets/mordo_couch.jpg'
import Drones from './assets/drones.jpg'
import S500 from './assets/s500.jpg'
import Pendulum from './assets/pendulum.jpg'

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

const Pandora_ld = () => {
  return (
    <React.Fragment>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{"The TREC Lab has spent several years working on a cutting edge humanoid robot named PANDORA. The chassis is 3d printed and actuated by linear series elastic actuators. "}</Typography>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{"Writing robust control policies for bipedal robots is notoriously difficult, especially when introduced with latent, unmodelable elastic properties. I'm working towards developing a machine learning framework to train the legs to perform actions using deep reinforcement learning and model-predictive control."}</Typography>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ margin: "50px" }}>
        <Box
          component="img"
          src={Pendulum}
          width="100%"
          maxWidth="250px"
          height="auto"
          sx={{ borderRadius: "10px" }}
        />
        <Typography sx={{fontWeight: "inherit", maxWidth: "250px"}}align="center" variant="caption">
          The Pendulum
        </Typography>
      </Box>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{"I'm currently working on an RL position controller for `The Pendulum` (pictured above) which is a single DOF joint resemblant of Pandora's SEAs. Success with this will transalate directly to the robot which uses the same hardware stack."}</Typography>
    </React.Fragment>
  )
}

const Unosa_ld = () => {
  return (
    <React.Fragment>
      <Link href='https://Unosa.xyz' target="_blank" rel="noopener"><Typography sx={{fontWeight: "inherit"}}variant="h4" gutterBottom>Unosa.xyz</Typography></Link>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{"Unosa is the most dynamic fractional NFT tool. It's a web app supported by an underlying smart contract. It allows groups of people to co-buy NFTs and own arbitrary percentages of any NFTs. Traders are also free to buy and sell individual shares, combining or splitting them up as they please. This is made possible by our advanced smart contract which stores equity shares as 1155 tokens."}</Typography>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{"For inquiries, reach out to me at aydin@mordo-labs.com"}</Typography>
    </React.Fragment>
  )
}

const Mordo_ld = () => {
  return (
    <React.Fragment>
      <Typography sx={{fontWeight: "inherit"}} gutterBottom variant='body1'>{"Mordo is a 3D-printed 12DOF wearable robot snake. I built it for fun. It's actuated by servos connected by 3D printed brackets I designed in Fusion 360. At the head, one eye is an 8 watt burning laser and the other eye is a camera. I built in simple voice commands to activate the laser, activate the camera, and perform simple movements. "}</Typography>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ margin: "50px" }}>
        <Box
          component="img"
          src={MordoLaser}
          width="100%"
          maxWidth="250px"
          height="auto"
          sx={{ borderRadius: "10px" }}
        />
        <Typography sx={{fontWeight: "inherit", maxWidth: "250px"}} align="center" variant="caption">
          The laser is 8 watts, which can burn through cardboard and start fires. It's loads of fun (and danger).
        </Typography>
      </Box>
      <Typography sx={{fontWeight: "inherit"}} gutterBottom variant='body1'>{"The user must wear a gyro accelerometer on their glasses. There is another one on the snake chassis. The angle of the user's head is calculated by subtracting the rotation angles between the two accelerometers, which enables the snake to point its head in the same direction as its user, giving it lifelike movement."}</Typography>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ margin: "50px" }}>
        <Box
          component="img"
          src={MordoCouch}
          width="100%"
          maxWidth="250px"
          height="auto"
          sx={{ borderRadius: "10px" }}
        />
        <Typography sx={{fontWeight: "inherit", maxWidth: "250px" }}align="center" variant="caption">
          cute :)
        </Typography>
      </Box>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{"There are a couple problems with Mordo. All the processing is synchronous and done in Python, causing it to be slow and less responsive. It's also large and clunky. I'm working on V2 which will have a more robust and compact form, longer battery life, and majority of the control will be written in a multithreaded C program. I'm also working on making the movements more fluid and lifelike in general, with the ability to lock onto people or do head tracking."}</Typography>
    </React.Fragment>
  )
}

const CompBio_ld = () => {
  return (
    <React.Fragment>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{"I'm enamored with the work going on at the intersection of computational biology, morphogenesis and information theory. This provides a tractable framework for engineering self-repairing robots, full limb regeneration, and more."}</Typography>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{"As a robotics engineer, I'm intensely drawn towards this field of research because it's underleveraged. Evolution gave us self-repairing hardware that's extremely robust, generalizable and modular. Instead of trying to build robots using motors and pistons with our monkey brains, let's leverage a billion years of combinatorial optimization and the computational superiority of AI!"}</Typography>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{"My research in this domain is (currently) independent. I'm reading papers and running experiments. I'm working on a simulation which I will announce soon depending on the results."}</Typography>
    </React.Fragment>
  )
}

const Cerebellia_ld = () => {
  return (
    <React.Fragment>
      <Link href='https://cerebellia.com' target="_blank" rel="noopener"><Typography sx={{fontWeight: "inherit"}}variant="h4" gutterBottom>Cerebellia.com</Typography></Link>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{"Cerebellia is a tool which tracks the symptoms of tremor patients. Using an apple watch or our custom watch hardware, patient tremors get continually recorded and quantified. Patients can use our app to view the progression of their symptoms at any time. They may also set new habits or experiments to see how different lifestyle changes affect their symptoms. For example, a patient may wonder whether coffee makes their tremors worse. With Cerebellia, they may use algorithmic symptom analysis to see how their overall symptoms vary on days when they do have coffee versus when they don't."}</Typography>

      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ margin: "50px" }}>
        <Box
          component="img"
          src={CereWatch}
          width="100%"
          maxWidth="250px"
          height="auto"
          sx={{ borderRadius: "10px" }}
        />
        <Typography sx={{fontWeight: "inherit", maxWidth: "250px"}}align="center" variant="caption">
          Hardware we built to record tremor data. Also works with an Apple Watch.
        </Typography>
      </Box>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{"We killed this startup after 6 months. We discovered that the system for testing symptoms ultimately required too much coordination, work and analysis on the consumer side, which were often elderly disabled people. We dissolved the company and took away a ton of valuable lessons, making the experience well worth the effort."}</Typography>
    </React.Fragment>
  )
}

const Wheatley_ld = () => {
  return (
    <React.Fragment>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{"Wheatley is a teleoperated robot built by 6543 Pumatech Robotics for the FRC 2019 Deep Space competition. I was the lead for the electronics & pneumatics."}</Typography>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{"Wheatley has pneumatic pistons enabling it to climb onto platforms, pick up disks, and scoop balls for relocation."}</Typography>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{"We competed in the Oxon Hill and Haymarket regional tournaments, winning first and second place, respectively, qualifying for the district championships."}</Typography>
    </React.Fragment>
  )
}

const GPT3AI_ld = () => {
  return (
    <React.Fragment>
      <Link href='https://3214ai.com' target="_blank" rel="noopener"><Typography sx={{fontWeight: "inherit"}}variant="h4" gutterBottom>3214ai.com</Typography></Link>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'> {`
          3214ai.com is an instance of GPT-3 which was fine-tuned and prompt engineered to be a teacher assistant for my Systems course.
        `}</Typography>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{`
          Systems is the hardest class at Virginia Tech. It involves programming C thread pools, a custom shell, dynamic memory allocators and more. The TA queues often get very long, sometimes reaching over 100 students when a deadline is nigh. One of the biggest complaints from TAs was that most of the questions asked have already been answered in the course's FAQ, forum, discord or project handout. But most people aren't inclined to spend an hour combing through forum posts to find an answer to their arcane memory problem. How can we solve this issue?
        `}</Typography>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{`
        The answer is to use a language model to compress all the information across the course into an instance of GPT-3 and just ask that. There are a couple important requirements. 
        `}</Typography>
      <ul>
        <li>
          <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>Students cannot request code</Typography>
        </li>
        <li>
          <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>The AI must ignore irrelevant questions</Typography>
        </li>
        <li>
          <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>Any information involving dates must be accurate and very robust, otherwise the program is liable for missed coursework.</Typography>
        </li>
      </ul>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{`
        But the overarching challenge here is that there is a lot of course-grained information with factual answers, and only 4096 tokens in a single GPT-3 request. That's about the length of this project description. So how can I fit all the info about due dates, assignment specifics, technical questions and FAQs into a single prompt? 
        `}</Typography>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{`
        Using some non-ai creativity, I start by partitioning the request into various categories. Do you have a technical question, a question about the assignment, or a question about the course overall? I designed custom prompts containing all the information necessary for each category, and prompts to evoke the correct behavior for the request. For example, if you are asking about a due date, the information must be explicitly listed in the prompt, or the AI must admit it doesn't know. It cannot guess an incorrect date. On the other hand, if it is a technical question, the AI has aggregated information from all the linux documentation on the internet, so it is quite well suited to pull from external sources.
        `}</Typography>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{`
        I also included various sentiment classifiers to further constrain the activity of the AI to what is relevant for the course. This is necessary to convince the professor to put this in use by students. I have a fine-tuned classifier which labels the prompt as either 'text' or 'code', and blocks it if the latter if detected. This is to prevent plagiarism from the internet. I then use GPT-3's Moderation classifier to flag the question for inappropriateness, as per their terms of service. 
        `}</Typography>
      <Typography sx={{fontWeight: "inherit"}}gutterBottom variant='body1'>{`
        The end product is all the information about a course, compressed into a single chatbot. This is current undergoing review, and is already in use by a select group of student beta testers! It's extremely exciting to witness this new paradigm of language models, and even more exciting to be a part of it!
        `}</Typography>
    </React.Fragment>
  )
}

const RaceQuad_ld = () => {
  return (
    <React.Fragment>
      <Typography sx={{fontWeight: "inherit"}} gutterBottom variant='body1'>{"I built an FPV 5in 4S quadcopter for racing and freestyling. It can hit 80mph at top speed, and fly continuously for 6 minutes. I've built many drones over the past years, but often reuse parts from my current build. Flying robots are awesome!"}</Typography>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ margin: "50px" }}>
        <Box
          component="img"
          src={S500}
          width="100%"
          maxWidth="250px"
          height="auto"
          sx={{ borderRadius: "10px" }}
        />
        <Typography sx={{fontWeight: "inherit", maxWidth: "250px"}} align="center" variant="caption">
          My larger S500 platform. Used for experiments rather than racing. I'm calibrating the GPS in this picture.
        </Typography>
      </Box>
      
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ margin: "50px", marginBottom: "0px" }}>
        <Box
          component="img"
          src={Drones}
          width="100%"
          maxWidth="250px"
          height="auto"
          sx={{ borderRadius: "10px" }}
        />
        <Typography sx={{fontWeight: "inherit", maxWidth: "250px"}}align="center" variant="caption">
          One of my smaller 3" quads during a repair session.
        </Typography>
      </Box>
    </React.Fragment>
  )
}

function App() {
  const navigate = useNavigate();

  const projectsInfo = [


    {
      pic: Legs,
      tags: ["Research"],
      path: "/trec",
      title: "PANDORA: Bipedal Robot",
      shortDescription: "I'm working with the TREC Laboratory at Virginia Tech. I'm researching the use of deep reinforcement learning to control bipedal robots.",
      longDescription: <Pandora_ld />
    },
    {
      pic: GPT3,
      tags: ["Project"],
      path: "/3214ai",
      title: "AI Teacher Assistant",
      shortDescription: "Using fine-tuning and prompt engineering, I built an AI teacher assistant that can help my Systems course's overburdened TAs. 3214ai.com.",
      longDescription: <GPT3AI_ld />
    },
    {
      pic: Planarian,
      tags: ["Research"],
      path: "/compbio",
      year: "2022",
      title: "CompBio Research",
      shortDescription: "I'm researching computational biology, particularly at the convergence of morphogenesis, cellular automata and regeneration. I'm working on a simulation which I will announce soon. Gif by Dr. Levin et al. Growing Cellular Automata.",
      longDescription: <CompBio_ld />
    },
    {
      pic: UnosaLogo,
      tags: ["Startup"],
      path: "/unosa",
      year: "2022",
      title: "Unosa",
      shortDescription: "I built the most dynamic fractional NFT tool: Unosa.xyz",
      longDescription: <Unosa_ld />
    },
    {
      pic: Cerebellia,
      tags: ["Research", "Startup"],
      path: "/cerebellia",
      year: "2022",
      title: "Cerebellia",
      shortDescription: `Co-founded a tool which tracks tremors of patients with Parkinson's Disease. Cerebellia.com`,
      longDescription: <Cerebellia_ld />
    },
    {
      pic: Mordo,
      tags: ["Project"],
      path: "/mordecai",
      year: "2022",
      title: "Mordo: Advanced Wearable Robot",
      shortDescription: "Mordo v1 is a head-tracking wearable 12DOF robot with an onboard camera, AI assistant and voice-activated laser eyes.",
      longDescription: <Mordo_ld />
    },
    {
      pic: Wheatley,
      tags: ["Project"],
      path: "/wheatley",
      year: "2019",
      title: "Wheatley: FRC Robot",
      shortDescription: "I was CTO of Wheatley, a competitive FRC robot. Capable of climbing platforms and transporting balls and disks, Wheatley won first and second place in regional FRC tournaments.",
      longDescription: <Wheatley_ld />,
    },

    {
      pic: RaceQuad,
      tags: ["Project"],
      path: "/racequad",
      year: "2019",
      title: "Race Quadcopter",
      shortDescription: "I built a SOTA 4S race quad, capable of hitting >80 miles per hour at peak throttle.",
      longDescription: <RaceQuad_ld />,
    },
  ]

  const GetProjectCards = () => {
    return (
      <Grid container spacing={2}>
        {
          projectsInfo.map((cinfo, idx) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <ProjectCard pic={cinfo.pic} tags={cinfo.tags} link={cinfo.path} title={cinfo.title} shortDescription={cinfo.shortDescription} longDescription={cinfo.longDescription} />
              </Grid>
            )
          })
        }
        <Grid sx={{fontWeight: "300"}} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" color="white" item xs={12} sm={6} md={4}>
          <Typography sx={{fontWeight: "inherit"}}>
            + 2 Omitted&nbsp;(NDAs)
          </Typography>
          <ul>
            <li>
              <Typography align="left" sx={{fontWeight: "inherit"}}>
                MITRE
              </Typography>
            </li>
            <li>
              <Typography align="left" sx={{fontWeight: "inherit"}}>
                Hume Center for National Security &amp; Technology
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    )
  }

  const GetProjectPaths = (theme) => {
    return (
      projectsInfo.map((pinfo, idx) => {

        const Component = () => {
          return (
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                sx={{ color: "white", padding: "75px 10%", minHeight: "82vh" }}>
                <Button size="small" sx={{ marginBottom: "10px" }} startIcon={<KeyboardBackspaceIcon sx={{ color: "white" }} />} onClick={() => navigate("/")}>

                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
                    Back Home
                  </Typography>
                </Button>

                <Box
                  component="img"
                  src={pinfo.pic}
                  sx={{ borderRadius: "10px", width: "100%", maxWidth: "250px", marginBottom: "10px" }}
                />
                <Typography gutterBottom align="left" variant="h3">
                  {pinfo.title}
                  <Divider sx={{ height: "1px", backgroundColor: "white", width: "100%", marginTop: "10px" }} />
                </Typography>

                <Box align="left" variant="body1" sx={{fontWeight: "300"}}>
                  {pinfo.longDescription}
                </Box>
              </Box>
            </ThemeProvider>
          )
        }

        return (
          <Route path={pinfo.path} element={<Component />} key={idx} />
        )
      })
    )
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        <Box>
          <Helmet>
            <title>Home</title>
            <meta name="description" content="About Aydin Gokce" />
          </Helmet>
          <Routes>
            <Route path="/" element={<About theme={theme} projectCards={<GetProjectCards />} />} />
            {
              GetProjectPaths(theme)
            }
          </Routes>
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
      </ThemeProvider>

    </div>
  );
}

export default App;

/*

Long form descriptions archived here

3214ai.com is an instance of GPT-3 which was fine-tuned and prompt engineered to be a teacher assistant for my Systems course.

Systems is the hardest class at Virginia Tech. It involves programming C thread pools, a custom shell, dynamic memory allocators and more. The TA queues often get very long, sometimes reaching over 100 students when a deadline is nigh. One of the biggest complaints from TAs was that most of the questions asked have already been answered in the course's FAQ, forum, discord or project handout. But most people aren't inclined to spend an hour combing through forum posts to find an answer to their arcane memory problem. How can we solve this issue?

The answer is we can use a language model to compress all the information across the course into an instance of GPT-3 and just ask that. There are a couple important requirements. 
  - Students cannot request code
  - The AI must ignore irrelevant questions
  - Any information involving dates must be accurate, otherwise the program is liable for missed coursework. 
But the overarching challenge here is that there is a lot of course-grained information with factual answers, and only 4096 tokens in a single GPT-3 request. That's about the length of this project description. So how can I fit all the info about due dates, assignment specifics, technical questions and FAQs into a single prompt? 

Using some non-ai creativity, I start by partitioning the request into various categories. Do you have a technical question, a question about the assignment, or a question about the course overall? I designed custom prompts containing all the information necessary for each category, and prompts to evoke the correct behavior for the request. For example, if you are asking about a due date, the information must be explicitly listed in the prompt, or the AI must admit it doesn't know. It cannot guess an incorrect date. On the other hand, if it is a technical question, the AI has aggregated information from all the linux documentation on the internet, so it is quite well suited to pull from external sources.

I also included various sentiment classifiers to further constrain the activity of the AI to what is relevant for the course. This is necessary to convince the professor to put this in use by students. I have a fine-tuned classifier which labels the prompt as either 'text' or 'code', and blocks it if the latter if detected. This is to prevent plagiarism from the internet. I then use GPT-3's Moderation classifier to flag the question for inappropriateness, as per their terms of service. 

The end product is all the information about a course, compressed into a single chatbot. This is current undergoing review, and is already in use by a select group of student beta testers! It's extremely exciting to witness this new paradigm of language models, and even more exciting to be a part of it!

--------------------------




*/