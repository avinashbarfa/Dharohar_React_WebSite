import React from "react";

import { Link } from "react-router-dom";
import {
    AppBar,
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
    const [anchor, setAnchor] = React.useState(null);
    const open = Boolean(anchor);
    const isMobile = useMediaQuery('(max-width:800px)');
    const handleMenu = (event : any) => {
        setAnchor(event.currentTarget);
    };
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
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
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
                                        >
                                            <Typography variant="h6"> Home </Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/chiffon-gorgette-saree"
                                        >
                                            <Typography variant="h6"> Chiffon Gorgette Sarees </Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/khathan-silk-saree"
                                        >
                                            <Typography variant="h6"> Khathan Silk Saree </Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/resham-mushrise-sarees"
                                        >
                                            <Typography variant="h6"> Resham Mushrise Sarees </Typography>
                                        </MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <div style={{ marginRight: "2rem" }}>
                                    <StyledLink
                                        to="/"
                                    >
                                        Home
                                    </StyledLink>
                                    <StyledLink
                                        to="/chiffon-gorgette-saree"
                                    >
                                        Chiffon Gorgette Sarees
                                    </StyledLink>
                                    <StyledLink
                                        to="/khathan-silk-saree"
                                    >
                                        Khathan Silk Saree
                                    </StyledLink>
                                    <StyledLink
                                        to="/resham-mushrise-sarees"
                                    >
                                        Resham Mushrise Sarees
                                    </StyledLink>
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
`
