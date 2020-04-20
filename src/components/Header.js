import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from 'assets/img/logo.png';
import SettingsIcon from '@material-ui/icons/Settings';
import Searchbar from 'components/Searchbar';
import Tooltip from 'components/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const StyledHeader = styled.header`
  width: 100%;
`;

const StyledToolbar = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  flex-wrap: wrap;
  @media ${({ theme }) => theme.breakpoints.sm} {
    justify-content: flex-start;
  }
`;

const StyledLogoWrapper = styled(Link)`
  flex-basis: 80px;
  outline: 0;
  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-basis: 100px;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    flex-basis: 130px;
  }
`;

const StyledLogo = styled.img`
  display: block;
  width: 100%;
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  transition: 0.5s;
`;

const StyledSettingsWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  color: ${({ theme }) => theme.colors.text};
  &:hover ${StyledSettingsIcon} {
    transform: rotate(120deg);
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-left: auto;
  }
`;

const useStyles = makeStyles(() => ({
  customIcon: {
    fontSize: '2.2rem',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <StyledHeader>
      <StyledToolbar>
        <StyledLogoWrapper to={`${process.env.PUBLIC_URL}/images`}>
          <StyledLogo src={logo} alt="logo" />
        </StyledLogoWrapper>
        <Searchbar />
        <Tooltip title="Settings">
          <StyledSettingsWrapper to={`${process.env.PUBLIC_URL}/settings`}>
            <StyledSettingsIcon className={classes.customIcon} />
          </StyledSettingsWrapper>
        </Tooltip>
      </StyledToolbar>
    </StyledHeader>
  );
};

export default Header;

//  @media ${({ theme }) => theme.breakpoints.up('md')} {
//   flex-basis: 200px;
// }
