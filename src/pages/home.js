import React from 'react'

function home() {
    return (
        <React.Fragment>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                className="main-cursor " ref={mainCursor}>
                <Box display="flex"
                    justifyContent="center"
                    alignItems="center"
                    className="main-cursor-background">
                    <IconButton color="primary" aria-label="upload picture" component="label" sx={{ zIndex: 1400 }}>
                        <DoubleArrowIcon />
                    </IconButton>
                </Box>

            </Box>
            <div className="secondary-cursor" ref={secondaryCursor}>
                <div className="cursor-background"></div>
                Learn about Aydin.
            </div>
        </React.Fragment>
    )
}

export default home