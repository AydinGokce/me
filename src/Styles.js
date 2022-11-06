const Styles = (theme) => ({
    header: {
        headerTitle: {
            [theme.breakpoints.down("sm")]: {
                fontSize: "1.5rem",
            }
        },
        headerJobs: {
            [theme.breakpoints.down("sm")]: {
                fontSize: "1rem",
                fontWeight: "1",
            },
            [theme.breakpoints.up("sm")]: {
                fontWeight: "1",
            }
        },
        headerRole: {
            [theme.breakpoints.down("sm")]: {
                fontSize: "0.8rem",
            }
        },
        headerImage: {
            [theme.breakpoints.down('md')]: {
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
                margin: '0 auto',
                maxWidth: '400px',
            },
            [theme.breakpoints.up('md')]: {
                width: '150px',
                height: '150px',
                borderRight: '1px solid white',
                marginRight: '15px'
            },
        }
    },
});

export default Styles;