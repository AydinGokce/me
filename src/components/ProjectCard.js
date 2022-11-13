import React, { useState, useEffect } from 'react'
import { useMediaQuery, Box, Typography, Grid, Fade, Divider, Button, Accordion, AccordionDetails, AccordionSummary, Link, IconButton, Chip, Card, CardMedia, CardContent, CardActions, AccordionActions } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function ProjectCard(props) {

    const { link, pic, shortDescription, tags, title } = props;
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        console.log(isHovered);
    }, [isHovered])

    return (
        <Card sx={{ backgroundColor: "#111111" }}>
            <Box display="flex" flexDirection="column">
                <CardMedia sx={{
                    maxHeight: "200px",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Box
                        component="img"
                        width="100%"
                        src={pic}
                    />
                </CardMedia>
                <Box display="flex" sx={{height: "25px", marginTop: "-25px"}}>
                    {
                        tags.map((tag, ind) => {
                            return (
                                <Chip
                                    key={ind}
                                    variant="filled"
                                    sx={{ margin: "0px 5px", height: "min-content", color: "white", backgroundColor: "#111111" }}
                                    label={tag}
                                />
                            )
                        })
                    }
                </Box>
            </Box>
            <CardActions display="flex" flexDirection="column" sx={{ backgroundColor: "inherit", padding: "0px" }}>
                    <Accordion sx={{ backgroundColor: "inherit", color: "white", border: "1px solid white", width: '100%' }} >
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}>
                            <Box display="flex" flexDirection="column">
                                <Typography variant="body1" align="left">
                                    {title}
                                </Typography>
                            </Box>
                        </AccordionSummary>
                        <Divider variant="middle" sx={{ backgroundColor: "white", height: "1px" }} />
                        <AccordionDetails display="flex" alignItems="center" justifyContent="center">
                            <Typography variant={"body2"} sx={{ color: "white" }}>
                                {shortDescription}
                            </Typography>
                        </AccordionDetails>
                        <Divider variant="middle" sx={{ backgroundColor: "white", height: "1px" }} />
                        <AccordionActions>
                            <Button color="inherit" variant="contained" sx={{ margin: "10px auto", backgroundColor: "transparent", border: "1px solid white", borderRadius: "5px" }}
                                onMouseEnter={() => { setIsHovered(true) }}
                                onMouseLeave={() => { setIsHovered(false) }}
                                onClick={() => navigate(link)} endIcon={<ArrowCircleRightIcon sx={isHovered ? { color: "#111111" } : { color: "white" }} />} >
                                <Typography color={isHovered ? "#111111" : "white"}>
                                    See More
                                </Typography>
                            </Button>
                        </AccordionActions>
                    </Accordion>
            </CardActions>

        </Card>
    )
}

export default ProjectCard