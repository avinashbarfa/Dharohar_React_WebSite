import React, {useState} from "react";

import { Link } from "react-router-dom";
import {
    AppBar, Button,
    IconButton,
    Menu,
    MenuItem,
    Slide,
    Toolbar,
    Typography,
    useMediaQuery, useScrollTrigger
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import styled from "styled-components";

const HideOnScroll = (props: any) => {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction={"down"} in={!trigger}>
            {children}
        </Slide>
    );
}

const Header = (props: any) => {
    const [anchor, setAnchor] = useState(null);
    const open = Boolean(anchor);
    const isMobile = useMediaQuery('(max-width:800px)');
    const handleMenu = (event : any) => {
        setAnchor(event.currentTarget);
    };
    const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
    const open2 = Boolean(anchorEl2);
    const handleClick = (event: any) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl2(null);
    };

    const textileMenu = (
        <>
            <Typography
                aria-controls={open ? 'basic-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{color: '#ffffff', cursor: "pointer", textAlign: 'center'}}
            >
                Textiles
            </Typography>
            <StyledMenu
                id="basic-menu"
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem>
                    <StyledLink
                        onClick={() => { setAnchor(null); setAnchorEl2(null); }}
                        to="/chiffon-gorgette-saree"
                    >
                        Chiffon Gorgette Sarees
                    </StyledLink>
                </MenuItem>
                <MenuItem>
                    <StyledLink
                        onClick={() => { setAnchor(null); setAnchorEl2(null); }}
                        to="/khathan-silk-saree"
                    >
                        Khathan Silk Saree
                    </StyledLink>
                </MenuItem>
                <MenuItem>
                    <StyledLink
                        onClick={() => { setAnchor(null); setAnchorEl2(null); }}
                        to="/resham-mushrise-sarees"
                    >
                        Resham Mushrise Sarees
                    </StyledLink>
                </MenuItem>
            </StyledMenu>
        </>
    );

    return (
        <RootContainer>
            <HideOnScroll {...props}>
                <AppBar style={{ backgroundColor: "#313d53" }}>
                        <StyledToolbar>
                            <Typography
                                variant="h5"
                                component="p"
                                color="#ffffff"
                            >
                                Dharohar
                            </Typography>
                            {isMobile ? (
                                <>
                                    <IconButton
                                        edge="start"
                                        aria-label="menu"
                                        onClick={handleMenu}
                                    >
                                        <MenuIcon style={{ color: '#ffffff' }}/>
                                    </IconButton>
                                    <StyledMenu
                                        id="menu-appbar"
                                        anchorEl={anchor}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right"
                                        }}
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right"
                                        }}
                                        open={open}
                                    >
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/"
                                            style={{color: '#ffffff', cursor: "pointer", textAlign: 'center', textDecoration: 'none' }}
                                        >
                                            Home
                                        </MenuItem>
                                        {textileMenu}
                                    </StyledMenu>
                                </>
                            ) : (
                                <div style={{ marginRight: "2rem", display: "flex" }}>
                                    <StyledLink
                                        to="/"
                                    >
                                        Home
                                    </StyledLink>
                                    {textileMenu}
                                </div>
                            )}
                        </StyledToolbar>
                    </AppBar>
            </HideOnScroll>
        </RootContainer>
    );
};

export default Header;

const RootContainer = styled.div`
  flexGrow: 1;
  background-color: #313d53;
  margin-bottom: 64px;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  margin: 0 12px;
  :hover {
    color: #ffffff;
  }
`;
const StyledMenu = styled(Menu)`
  .MuiMenu-paper {
    background-color: #313d53;
  }`;
