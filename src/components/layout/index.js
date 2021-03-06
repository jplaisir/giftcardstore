import React from 'react';
import {
    AppBar, CssBaseline, Divider, Drawer, Hidden, IconButton,
    Toolbar, Typography, MenuList, MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom'; 
import { compose } from 'recompose';
//====================================================
import HartIconWithBadge from './hearticonwithbadge';
import { styles } from './styles';

export const drawerWidth = 180;

class Layout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mobileOpen: false,
        };
        this.handleDrawerToggle = () => {
            this.setState(state => ({ mobileOpen: !state.mobileOpen }));
        };
    }

    render() {
        const { classes, theme, location: { pathname } } = this.props;
        let { children } = this.props;
        const drawer = (
            <div>
                <img style = {{}} src='/img/logo.svg' alt='gift_logo'/>
                <Divider />
                <MenuList>
                    <MenuItem component = {Link} to='/' selected = { '/' === pathname }>Главная</MenuItem>
                    <MenuItem component = {Link} to='/catalog' selected = { '/catalog' === pathname }>Магазин</MenuItem>
                    <MenuItem component = {Link} to='/cards' selected = { '/card' === pathname }>Владельцам карт</MenuItem>
                    <MenuItem component = {Link} to='/support' selected = { '/support' === pathname }>Поддержка</MenuItem>
                    <MenuItem component = {Link} to='/feedback' selected = { '/feedback' === pathname }>Обратная связь</MenuItem>
                    <MenuItem component = {Link} to='/favorites' selected = { '/favorites' === pathname }>Отложено</MenuItem>
                    <MenuItem component = {Link} to='/about' selected = { '/about' === pathname }>Информация</MenuItem>
                </MenuList>
            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
              Магазин подарков
                        </Typography>
                        <HartIconWithBadge />
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    { children }
                </main>
            </div>
        );
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    withRouter
)(Layout);
