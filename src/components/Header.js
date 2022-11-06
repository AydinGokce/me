import React from 'react'
import { useMediaQuery, Box, Typography, Grid, } from '@mui/material'
import { TextLoop } from "react-text-loop-next";
import MeRectangle from '../assets/me_rectangle.png'
import PiSlices from '../assets/pislices.gif'
import Pythagoras from '../assets/pythagoras.png'
import Styles from '../Styles';

function Header(props) {
    const { variant, theme } = props;

    const styles = Styles(theme);
    const notSmall = useMediaQuery(theme.breakpoints.up('sm'))

    if (variant === 'small') {
        return (
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
            >
                <Grid display='flex' container spacing={0} sx={{ height: 'min-content', marginBottom: '10px' }}>
                    <Grid item xs={6} sm={4} display='flex' sx={{ border: '1px solid white', padding: '0px', height: 'min-content' }}>
                        <Box
                            component='img'
                            src={MeRectangle}
                            sx={{
                                width: '100%',
                            }}
                        />
                    </Grid>
                    {
                        notSmall && <Grid item xs={6} sm={4} display='flex' sx={{ border: '1px solid white', padding: '0px', height: 'min-content' }}>
                        <Box
                            component='img'
                            src={Pythagoras}
                            sx={{
                                width: '100%',
                            }}
                        />
                    </Grid>
                    }
                    
                    <Grid item xs={6} sm={4} display='flex' sx={{ border: '1px solid white', padding: '0px', height: 'min-content' }}>
                        <Box
                            component='img'
                            src={PiSlices}
                            sx={{
                                width: '100%',
                            }}
                        />
                    </Grid>
                </Grid>
                <Typography variant='h3' color='white' sx={{ fontWeight: '1' }}>
                    Hi! I'm Aydin
                </Typography>
                <Box display='flex' justifyContent='flex-start' alignItems='flex-start'>
                    <Typography variant='h5' color='white' sx={{ fontWeight: '1', }}>
                        I'm a&nbsp;
                    </Typography>
                    <TextLoop interval={2000} mask={true}>
                        <Typography variant='h5' color='white' sx={{ fontWeight: '1' }}>researcher</Typography>
                        <Typography variant='h5' color='white' sx={{ fontWeight: '1' }}>engineer</Typography>
                        <Typography variant='h5' color='white' sx={{ fontWeight: '1' }}>entrepreneur</Typography>
                    </TextLoop>
                </Box>
            </Box>
        )
    }
    else if (variant === 'large') {
        return (
            <Grid container
                alignItems='center'
                display='flex'
                sx={{ height: 'min-content', border: '1px solid white', width: '100%' }}>


                <Grid item xs={12} md={8} display='flex' alignItems='center'>

                    <Box
                        component='img'
                        src={MeRectangle}
                        sx={styles.header.headerImage}
                    />
                    <Box display="flex" flexDirection="column" width="max-content">
                        <Typography align="left" variant="h2" color="white" sx={styles.header.headerTitle}>
                            Hi! I'm Aydin
                        </Typography>
                        <Box display="flex" width="max-content" alignItems='center' justifyContent='center'>
                        <Typography variant="h4" align="left" color="white" sx={styles.header.headerJobs}>I'm a&nbsp;</Typography>
                            <TextLoop>
                                <Typography variant="h4" align="left" color="white" sx={styles.header.headerJobs}>engineer</Typography>
                                <Typography variant="h4" align="left" color="white" sx={styles.header.headerJobs}>entrepreneur</Typography>
                                <Typography variant="h4" align="left" color="white" sx={styles.header.headerJobs}>researcher</Typography>
                            </TextLoop>
                        </Box>
                    </Box>


                </Grid>

                <Grid xs={12} md={4} item display='flex' justifyContent='flex-end' sx={{ right: 0, marginLeft: 'auto', height: 'min-content' }}>
                    <Box
                        component='img'
                        src={Pythagoras}
                        sx={{
                            borderLeft: '1px solid white',
                            width: '150px',
                            height: '150px'
                        }}
                    />
                    <Box
                        component='img'
                        src={PiSlices}
                        sx={{
                            borderLeft: '1px solid white',
                            width: '150px',
                            height: '150px'
                        }}
                    />
                </Grid>
            </Grid>
        )
    }
    else {
        return (
            <div>sex</div>
        )
    }

}

export default Header;