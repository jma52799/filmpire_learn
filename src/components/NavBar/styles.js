import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

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
        [theme.breakpoints.up('sm')] : { //whatever style you put here will only show up on devices higher than 'small' (phone)
            display: 'none',
        },
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        }
    },
    drawerPaper: {
        width: drawerWidth,
    },
    linkButton: {
        '&:hover': { //applies these styles only when <linkButton> is hovered
            color: 'white !important',
            textDecoration: 'none',
        }
    }
}));