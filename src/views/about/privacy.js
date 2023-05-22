import React, { Component } from 'react';
import './assets/style.css';


class AboutPrivacyView extends Component {
    render() {
        return (
            <div className="privacy-view">
                <div className="app-bg-color-2 text-light text-center text-md-start position-relative">
                    <div className="app-bg-graphic app-bg-header position-absolute start-0 top-0 w-100 h-100"></div>
                    <div className="container py-5 position-relative">
                        <div className="row justify-content-md-center">
                            <div className="col-md-10">
                                <h1 className="display-4 fw-lighter mb-3">
                                    Privacidad y <b>confidencialidad</b>
                                </h1>
                                <p className="lead mb-0">
                                    Mantenemos tu protecci&oacute;n y privacidad de los datos resguardados.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-4">
                    <div className="row justify-content-md-center pt-5">
                        <div className="col-md-10">
                            <h3 className="mb-3">Resguardo de la informaci&oacute;n</h3>
                            <p>
                                En este sitio web, nos tomamos en serio tu privacidad y nos comprometemos
                                a proteger tus datos personales. Utilizamos tecnologías de seguridad de
                                última generación para proteger tus datos de cualquier posible acceso
                                no autorizado. Además, nunca compartimos tus datos personales con terceros
                                sin tu consentimiento explícito. Siempre puedes acceder a tus datos
                                personales y actualizarlos o eliminarlos si lo deseas.
                            </p>
                            <p>
                                Si tienes alguna pregunta o inquietud sobre la privacidad de tus datos en
                                este sitio web, no dudes en contactarnos. Estamos aquí para asegurarnos
                                de que tus datos estén protegidos y que puedas navegar por nuestro sitio
                                con confianza.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default AboutPrivacyView;
