import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomeView from './views/HomeView';
import CropRecommendationView from './views/CropRecommendationView';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            {/* El Navbar flotante se posiciona fijo, así que no necesita estar dentro de un contenedor de flujo normal */}
            <Navbar />

            <div className="min-h-screen pt-28 bg-gradient-to-br from-green-50 to-green-100 font-serif">
                <Route render={({ location }) => (
                    <TransitionGroup className="relative w-full h-full min-h-[calc(100vh-7rem)]"> {/* Ajusta la altura mínima para las transiciones */}
                        <CSSTransition
                            key={location.key}
                            timeout={500}
                            classNames="fade"
                        >
                            {/*
                                El Switch necesita la prop 'location' cuando está dentro de TransitionGroup
                                para asegurarse de que renderiza el componente correcto para la ruta actual.
                            */}
                            <Switch location={location}>
                                <Route path="/" exact component={HomeView} />
                                <Route path="/inicio" component={CropRecommendationView} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />
            </div>

            {/*
                Estilos CSS para las animaciones de transición.
                Hemos ajustado el 'top' y 'height' para que las páginas se superpongan correctamente
                dentro del nuevo contenedor principal.
            */}
            <style>
                {`
                /* Estilo base para los componentes de página */
                .fade-enter {
                    opacity: 0;
                    transform: translateX(100%); /* La nueva página comienza fuera de la pantalla a la derecha */
                    position: absolute; /* Asegura que las páginas se superpongan durante la transición */
                    width: 100%; /* Asegura que la página ocupe todo el ancho */
                    top: 0; /* Asegura que la página se posicione desde la parte superior del TransitionGroup */
                    height: 100%; /* Asegura que la página ocupe toda la altura del TransitionGroup */
                }
                .fade-enter-active {
                    opacity: 1;
                    transform: translateX(0%); /* La nueva página se desliza hacia el centro */
                    transition: opacity 500ms ease-in-out, transform 500ms ease-in-out; /* Duración y tipo de transición */
                    position: absolute;
                    width: 100%;
                    top: 0;
                    height: 100%;
                }
                .fade-exit {
                    opacity: 1;
                    transform: translateX(0%); /* La página actual comienza en el centro */
                    position: absolute;
                    width: 100%;
                    top: 0;
                    height: 100%;
                }
                .fade-exit-active {
                    opacity: 0;
                    transform: translateX(-100%); /* La página actual se desliza fuera de la pantalla a la izquierda */
                    transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
                    position: absolute;
                    width: 100%;
                    top: 0;
                    height: 100%;
                }

                /* Contenedor para manejar el posicionamiento absoluto de las páginas */
                .transition-group {
                    position: relative;
                    width: 100%;
                    /* min-h-[calc(100vh-7rem)] ajusta la altura para que el contenido de la página
                       no se corte y se desplace correctamente con el padding del body.
                       7rem (112px) es el pt-28 que dimos al div principal. */
                    min-height: calc(100vh - 7rem);
                    overflow: hidden; /* Oculta el contenido que se desliza fuera de la vista */
                }
                `}
            </style>
        </Router>
    );
};

export default App;

