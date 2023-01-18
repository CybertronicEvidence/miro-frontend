import React from 'react'
import { bulbIcon, questionIcon, spiral } from '../../../constants/assets';

const Body = () => {
    return (
        <section className='fill'>

            <div className='content'>

                <div>
                    <h1>Come funziona</h1>

                    <p>
                        Miro è semplicissmo da utilizzare, infatti ti basterà creare un
        nuovo account completamente gratuito e avrai subito
        l'accesso al tuo assistente digitale.
                    </p>

                </div>


                <div className='mt-4'>

                    <h2>Cosa puoi chiedermi</h2>

                    <div className='articles'>

                        <article>
                            <img
                                src={questionIcon}
                                alt="Domande"
                            />

                            <div>
                            <h2>
                                Domande
                            </h2>

                            <p>
                                Puoi chiedere una qualsiasi domanda e
il tuo assistente sarà subito pronto a
fornirti una risposta dettagliata.
                            </p>
                            </div>
                        </article>

                        <article>
                            <img
                                src={spiral}
                                alt="Scrivere qualcosa"
                            />

                            <div>
                                <h2>
                                    Scrivere qualcosa
                                </h2>

                                <p>
                                Puoi chiedere di farti scrivere un
    qualsiasi testo, che si tratti di ricerche,
    temi, articoli, caption, contratti o
    qualsiasi altro tipo di testo.
                                </p>
                            </div>
                        </article>


                        <article>
                            <img
                                src={bulbIcon}
                                alt="Idee"
                            />

                            <div>
                                <h2>
                                    Idee
                                </h2>

                                <p>
                                Manchi di creatività? Nessun problema.
    Con il tuo assistente fare brainstorming
    non sarà un problema.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        Aumenta la tua
produttività del
1000%

        Inizia

        </section>
    )
}

export default Body;
