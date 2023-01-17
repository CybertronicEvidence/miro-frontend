import React from 'react'
import { error500, error404, error402 } from '../../constants/assets';

const ErrorStates = ({code}) => {
    let image;
    let text;

    if ( code === 500){
      // App error
        image = error500;
        text = "Oops, sembra che ci sia un problema, ma non preoccuparti, lo risolveremo presto."
    }
    else if (code === 404){
      // Page not found
        image = error404;
        text = "La pagina che cerchi doeLa pagina che cerchi nonLa pagina che cerchi non esiste qui."
    }
    else if (code === 402){
      // Under construction
        image = error402;
        text = "Questa pagina è in costruzione"

    }

  return (
    <section className={"error__page"}>
      <div className="img" style={{backgroundImage:`url('${image}')`}}></div>

      {/* Under construction */}
      <h3>{text}</h3>
    </section>
  )
}

export default ErrorStates;