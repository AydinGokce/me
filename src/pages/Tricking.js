import React from 'react'
import PageTemplate from '../components/PageTemplate'
import { Box, Typography, } from '@mui/material'



function embed1() {
    return ({
        __html: '<iframe src="https://drive.google.com/file/d/1HwW3G2VQRhrg8dEzdwt60RkjfDAhE62M/preview" width="700" height="400" allow="autoplay"></iframe>'
    })
}

function embed2() {
    return ({
        __html: '<iframe src="https://drive.google.com/file/d/1dLEVUgGrKp4INwAkEBBgVsTPLxecNUBN/preview" width="700" height="400" allow="autoplay"></iframe>'
    })
}

function embed3() {
    return ({
        __html: '<iframe src="https://drive.google.com/file/d/149PFk-eEYZK8dSTzN3_CmbZgIT2dgcnw/preview" width="700" height="400" allow="autoplay"></iframe>'
    })
}

const TrickingContent = () => {
    return (
        <Box sx={{ minHeight: "82vh", maxWidth: "1000px" }}>
            <Typography color="white" variant="h3" align="left" sx={{ fontWeight: "300" }}>
                Tricking
            </Typography>
            <Typography gutterBottom color="white" align="left" variant="body1" sx={{ fontWeight: "300" }}>
                A combination of martial arts and gymnastics, optimized for aesthetics. It's all that keeps me sane.
            </Typography>
            <Typography gutterBottom color="white" variant="body1" align="left" sx={{ fontWeight: "bold" }}>
                Featured Clips
            </Typography>
            <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
                <div dangerouslySetInnerHTML={embed3()} />
                <div dangerouslySetInnerHTML={embed2()} />
                <div dangerouslySetInnerHTML={embed1()} />
            </Box>
        </Box>
    )
}

function Tricking() {
    return (
        <PageTemplate child={<TrickingContent />} />
    )
}

export default Tricking