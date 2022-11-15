import React from 'react'

import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function PageTemplate(props) {
    const navigate = useNavigate();
    return (
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
            {props.child}
        </Box>
    )
}

export default PageTemplate