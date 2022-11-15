import React from 'react'

import { useMediaQuery, Box, Typography, Button, Grid, Fade, Divider, Accordion, createTheme, ThemeProvider, CssBaseline, AccordionDetails, AccordionSummary, Link, IconButton, Chip, Card, CardMedia, CardContent, ButtonBase } from '@mui/material'

function Tricking() {
    return (
        <Box sx={{minHeight: "82vh", maxWidth: "1000px"}}>
            <Typography color="white" variant="h3" sx={{ fontWeight: "300" }}>
                Tricking
            </Typography>
            <Typography gutterBottom color="white" variant="body1" sx={{ fontWeight: "300" }}>
                A combination of martial arts and gymnastics, optimized for aesthetics. I love training it. A good session is more refreshing than a good night's sleep.
            </Typography>
            <Typography color="white" variant="body1" align="left" sx={{ fontWeight: "bold" }}>
                Featured Clips
            </Typography>
        </Box>
    )
}

export default Tricking