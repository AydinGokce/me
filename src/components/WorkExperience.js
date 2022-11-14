import React from 'react'

import { useMediaQuery, Box, Typography, Grid, Fade, Divider, CssBaseline, Accordion, AccordionDetails, AccordionSummary, Link, IconButton, Chip, Card, CardMedia, CardContent, ThemeProvider } from '@mui/material'

function WorkExperience(props) {

    const { logo, position, tags, dates, description } = props;

    return (
        <Box display="flex" sx={{ color: "white" }}>
            <Box
                component="img"
                src={logo}
                sx={{
                    height: "50px",
                    width: "50px",
                    marginRight: "10px",
                    objectFit: "contain",
                }}
            />
            <Box display="flex" flexDirection="column">
                <Typography variant="body1" align="left" sx={{fontWeight: "400"}}>
                    {position}
                </Typography>
                <Box display="flex">
                    {tags.map((tag, ind) => {
                        return (
                            <Box display="flex" justifyContent="center" alignItems="center" key={ind} variant="outlined" sx={{ backgroundColor: "#c7c7c7", color: "#111111", marginRight: "5px", padding: "0px 9px", borderRadius: "10px" }}>
                                <Typography variant="caption" sx={{fontWeight: "300"}}>
                                    {tag}
                                </Typography>
                            </Box>
                        )
                    })}
                </Box>
                <Typography variant="body2" align="left" sx={{fontWeight: "1"}}>
                    {dates}
                </Typography>
                <Typography variant="body2" align="left">
                    {description.map((line, ind) => {
                        return (
                            <Typography key={ind} variant="body2" align="left" sx={{fontWeight: "300"}}>
                                •&nbsp;{line}
                            </Typography>
                        )
                    })}
                </Typography>
            </Box>
        </Box>
    )
}

export default WorkExperience