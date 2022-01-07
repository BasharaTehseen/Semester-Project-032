import { Box, Typography, makeStyles } from '@material-ui/core';
import Youtube from '../Assets/Images/youtube.png';
import InstaTele from '../Assets/Images/InstaTele.jpeg';
import welcome from '../Assets/Images/welcome.jpg';

const useStyles = makeStyles({
    
    image: {
        width: '50%',
        height: '50%',
        align: 'center',
    }
})

const CodeForInterview = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4">Home Page</Typography>
            <Box>
                <img src={welcome} className={classes.image} />
            </Box>
        </Box>
    )
}

export default CodeForInterview;