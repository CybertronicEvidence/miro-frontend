import React from 'react';
import {siteLogo} from '../../../constants/assets';

const EmptyState = ()=>{
    return(
        <div className="chat_empty">
            <div className="logo">
                <img
                    src={siteLogo}
                    alt="Miro"
                />
            </div>

            <div className="desp_container">

                <div className="desp">
                    <b>Esempi di cosa puoi chiedermi</b>
                    <div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                </div>

                <div className="desp">

                    <b>Quello che poso fare</b>

                    <div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                </div>


                <div className="desp">

                    <b>I miei limiti</b>
                    <div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                </div>

            </div>


            <h3>Connettimi a Siri</h3>

            <div className="ddlr">
                <span>Lorem ipsum dolor sic amet</span>

                <a href="#">Scopri di piu</a>
            </div>
        </div>
    )
}


export default EmptyState;