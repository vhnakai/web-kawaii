import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Privacidade = () => {
    return(
        <div id="page-priva">
            <div className="content">
                <header>
                    <h1>LOLOLOLOLOLOLO</h1>
                </header>
                <main>
                    <h1>
                        Seu Marketplace de coleta de residuos.
                    </h1>
                    <p>
                        ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.

                    </p>
                    <Link to="/create-point">
                        <strong>Cadastre um ponto de coleta</strong>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Privacidade;