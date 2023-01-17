import React from 'react'
import { error500, error404, error402 } from '../../constants/assets';

const ErrorStates = ({code}) => {
    let image;

    if ( code === 500){
        image = error500;
    }
    else if (code === 404){
        image = error404;
    }
    else if (code === 402){
        image = error402;
    }

  return (
    <div className="error__page--content">
          <div className="img" style={{backgroundImage:`url('${image}')`}}></div>
    </div>
  )
}

export default ErrorStates;