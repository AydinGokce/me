import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import { useMediaQuery, Box, Typography, Button, Grid, Fade, Divider, Accordion, createTheme, ThemeProvider, CssBaseline, AccordionDetails, AccordionSummary, Link, IconButton, Chip, Card, CardMedia, CardContent, ButtonBase } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


function ProjectParser(props) {

    const { pinfo, theme } = props;
    const pathName = `${window.location}`.split("#").pop();
    const project = pinfo.find((project) => project.path === pathName);
    const navigate = useNavigate();
    console.log(pathName)
    if (project === undefined) {
        return <Navigate to="/" />
    }
    else {
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
                        src={project.pic}
                        sx={{ borderRadius: "10px", width: "100%", maxWidth: "250px", marginBottom: "10px" }}
                    />
                    <Typography gutterBottom align="left" variant="h3">
                        {project.title}
                        <Divider sx={{ height: "1px", backgroundColor: "white", width: "100%", marginTop: "10px" }} />
                    </Typography>

                    <Box align="left" variant="body1" sx={{ fontWeight: "300" }}>
                        {project.longDescription}
                    </Box>
                </Box>
            </ThemeProvider>
        )
    }
}

export default ProjectParser