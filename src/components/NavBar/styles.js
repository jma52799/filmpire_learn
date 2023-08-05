import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    toolbar: {
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '240px',
        [theme.breakpoints.down('sm')] : { //whatever style you put here will only show up on devices smaller than 'small'
            marginLeft:'0',
            flexWrap: 'wrap',
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')] : { //whatever style you put here will only show up on devices higher than 'small'
            display: 'none',
        },
    }
}));