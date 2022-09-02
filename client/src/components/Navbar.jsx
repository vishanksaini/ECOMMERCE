import { Badge } from "@material-ui/core";
import { ExitToApp, Search, ShoppingCartOutlined } from "@material-ui/icons";
// import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
// import LogoutIcon from "@mui/icons-material/Logout";
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'

const Container = styled.div`
  height: 60px;

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
  position:relative;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Error = styled.div`
  color: red;
`;

// const Tooltip = styled.span`
//   visibility: hidden;
//   position: absolute;
//   z-index: 100;
//   bottom: -10px;
//   left: 427px;

//   border: 0.5px solid black;
//   &:hover {
//     visibility: visible;
//   }
// `;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout(dispatch);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ZORO</Logo>
        </Center>
        <Right>
          {!user && (
            <Link to="/register">
              <MenuItem>REGISTER</MenuItem>
            </Link>
          )}
          {!user && (
            <Link to="/login">
              <MenuItem>SIGN IN</MenuItem>
            </Link>
          )}
          <MenuItem onClick={handleLogout} disabled={isFetching}>
            <ExitToApp />
          </MenuItem>

          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
