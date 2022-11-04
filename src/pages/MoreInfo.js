import React from 'react';
import {useParams} from 'react-router-dom';
import RepoInfo from './RepoInfo';
import Portfolio from './Portfolio';

const MoreInfo = () => {
    const {portfolioId}= useParams();

  return (
    <div>
        <h1>{[portfolioId].name}</h1>
        <p>{[portfolioId].description}</p>
    </div>
  )
}

export default MoreInfo;