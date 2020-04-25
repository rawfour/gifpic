import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import errorImg from '../assets/img/error.jpg';

const StyledErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 20px;
`;

const ErrorView = ({ t }) => {
  return (
    <>
      <SectionTitle>{t('Error')}</SectionTitle>
      <StyledErrorWrapper>
        <StyledImg src={errorImg} alt="not_found" />
        <Link to="/images">
          <Button variant="contained" color="primary">
            Back to main page
          </Button>
        </Link>
      </StyledErrorWrapper>
    </>
  );
};

ErrorView.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(ErrorView);
