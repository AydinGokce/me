import React from 'react'
import PageTemplate from '../components/PageTemplate'
import { Typography } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Demo4Contrary() {
  const navigate = useNavigate()
  return (
    <PageTemplate
      child={
        <React.Fragment>
          <Typography variant="h3">Hello Contrary!</Typography>
          <Typography gutterBottom variant="body1">
            Here are demos of some of the things I've built in 2022.
          </Typography>
          <Typography variant="h4" sx={{ marginTop: '25px' }}>
            3214ai.com
          </Typography>
          <Typography gutterBottom variant="body1">
            An AI to solve my course's long TA lines
          </Typography>
          <iframe
            width="100%"
            height="315"
            style={{ maxWidth: '560px' }}
            src="https://www.youtube-nocookie.com/embed/St5cvT3JRBo?modestbranding=1"
            title="YouTube video player"
            frameborder="0"
            allow="none"
            allowfullscreen
          ></iframe>
          <Typography variant="h4" sx={{ marginTop: '45px' }}>
            Unosa.xyz
          </Typography>
          <Typography gutterBottom variant="body1">
            The most dynamic fractional NFT tool
          </Typography>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/hoL4TixbF2A"
            title="YouTube video player"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <Typography variant="h4" sx={{ marginTop: '45px' }}>
            Cerebellia
          </Typography>
          <Typography gutterBottom variant="body1">
            Our tool for tracking Parkinson's Disease symptoms
          </Typography>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/p4mnLg5IIzw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <Typography sx={{marginTop: "40px"}}>Check out my other projects on my homepage!</Typography>
          <Button
            size="small"
            sx={{ marginBottom: '10px' }}
            startIcon={<KeyboardBackspaceIcon sx={{ color: 'white' }} />}
            onClick={() => navigate('/')}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', color: 'white' }}
            >
              Back Home
            </Typography>
          </Button>
        </React.Fragment>
      }
    />
  )
}

export default Demo4Contrary
