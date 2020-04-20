import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Skeleton as MuiSkeleton } from '@material-ui/lab';

const StyledSkeletonRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6px;
  max-width: 100%;
  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledSkeletonCol = styled.div`
  display: grid;
  grid-gap: 6px;
  align-content: flex-start;
`;

const Skeleton = ({ wrapperWidth, columnsCount }) => {
  const renderSkeletonItem = () => {
    const items = [];
    for (let i = 0; i < 4; i += 1) {
      items.push(
        <MuiSkeleton
          key={i}
          variant="rect"
          width={(wrapperWidth - 18) / columnsCount}
          height={Math.floor(Math.random() * 10) + 1 > 5 ? 150 : 250}
        />,
      );
    }
    return items;
  };

  const renderSkeletonCol = () => {
    const columns = [];
    for (let i = 0; i < 4; i += 1) {
      columns.push(<StyledSkeletonCol key={i}>{renderSkeletonItem()}</StyledSkeletonCol>);
    }
    return columns;
  };

  return <StyledSkeletonRow>{renderSkeletonCol()}</StyledSkeletonRow>;
};

Skeleton.propTypes = {
  wrapperWidth: PropTypes.number,
  columnsCount: PropTypes.number,
};

Skeleton.defaultProps = {
  wrapperWidth: 400,
  columnsCount: 1,
};

export default Skeleton;
