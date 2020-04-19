import React from 'react';
import styled from 'styled-components';
import SearchIcon from 'assets/svg/SearchIcon.svg';

const StyledSearchbarWrapper = styled.form`
  flex-basis: 100%;
  order: 2;
  ${({ theme }) => theme.breakpoints.sm} {
    flex-basis: 300px;
    order: 0;
    margin-left: 20px;
  }
  ${({ theme }) => theme.breakpoints.md} {
    flex-basis: 400px;
  }
`;

const StyledSearchInput = styled.input`
  width: 100%;
  border-radius: 30px;
  padding: 1.3rem 2rem 1.3rem 5.6rem;
  margin-top: 20px;
  border: none;
  background: url(${SearchIcon}) no-repeat 1.8rem 50%;
  background-color: ${({ theme }) => theme.colors.grayBackground};
  transition: 0.5s;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.6rem;
  &:focus {
    box-shadow: 0 0 30px 0 rgba(43, 86, 112, 0.1);
    background-color: ${({ theme }) => theme.colors.focusBackground};
  }
  ${({ theme }) => theme.breakpoints.sm} {
    margin: 0;
    width: 220px;
    &:focus {
      width: 100%;
    }
  }
  ${({ theme }) => theme.breakpoints.md} {
    width: 350px;
  }
`;

const Searchbar = () => {
  return (
    <StyledSearchbarWrapper>
      <StyledSearchInput type="text" placeholder="Search..." />
    </StyledSearchbarWrapper>
  );
};

export default Searchbar;

// box-shadow: ${({ theme }) => console.log(theme)};
