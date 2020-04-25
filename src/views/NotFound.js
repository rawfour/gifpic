import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import notFound from '../assets/img/notFound.jpg';

const StyledNotFoundWrapper = styled.div`
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

const Notfound = ({ t }) => {
  return (
    <>
      <SectionTitle>{t('Not_found')}</SectionTitle>
      <StyledNotFoundWrapper>
        <StyledImg src={notFound} alt="not_found" />
        <Link to="/images">
          <Button variant="contained" color="primary">
            Back to main page
          </Button>
        </Link>
      </StyledNotFoundWrapper>
    </>
  );
};

Notfound.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(Notfound);
