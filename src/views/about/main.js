import React, { Component } from 'react';
import './assets/style.css';
import securityImg from './assets/security.png';
import davidReyesImg from './assets/david-reyes.png';
import staffImg from './assets/staff.jpg';


class AboutMainView extends Component {
    render() {
        return (
            <div className="about-view">
                <div className="app-bg-color-2 text-light text-center text-md-start position-relative">
                    <div className="app-bg-graphic app-bg-header position-absolute start-0 top-0 w-100 h-100"></div>
                    <div className="container py-5 position-relative">
                        <div className="row justify-content-md-center">
                            <div className="col-md-10">
                                <h1 className="display-4 fw-lighter mb-3">
                                    Acerca de <b>nosotros</b>
                                </h1>
                                <p className="lead mb-0">
                                    Nuestra visi&oacute;n <b>se refleja en nuestros resultados</b>,
                                    nuestro compromiso con nuestros clientes es completa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-4">
                    <div className="row justify-content-md-center pt-5">
                        <div className="col-md-10">

                            <div className="d-block d-lg-none text-center mb-3">
                                <img
                                    className="border p-1 rounded-circle"
                                    width="200"
                                    src={davidReyesImg}
                                    alt="David Reyes Letelier" />
                            </div>
                            <div className="d-md-flex align-items-center mb-5">
                                <img
                                    className="d-none d-lg-inline border p-1 rounded-circle float-start me-4"
                                    width="200"
                                    src={davidReyesImg}
                                    alt="David Reyes Letelier" />
                                <p className="lead fst-italic text-center text-lg-start">
                                    Inside Security es una empresa legalmente constituida en Chile
                                    con sedes en Valpara&iacute;so, Santiago de Chile y Per&uacute;, que
                                    nace con la misi&oacute;n de ofrecer servicios y soluciones de calidad
                                    que prometan disminuir los riesgos asociados con la delincuencia
                                    inform&aacute;tica a trav&eacute;s del trabajo &eacute;tico y profesional.<br />
                                    <span className="d-block fw-bolder pt-3">David Reyes Letelier. Gerente General de Inside Security.</span>
                                </p>
                            </div>

                            <h2 className="d-none d-lg-block my-5 pt-4 display-6">
                                &iquest;Qu&eacute; nos diferencia?
                            </h2>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <h3>Talento, conocimiento y experiencia</h3>
                                    <p>
                                        A trav&eacute;s del talento de nuestros colaboradores, constantes capacitaciones
                                        y experiencia tanto personal como corporativa, los servicios y productos
                                        de Inside Security tienen la calidad y excelencia requerida con los m&aacute;s
                                        altos est&aacute;ndares.
                                    </p>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <h3>Soluciones altamente seguras</h3>
                                    <p>
                                        La seguridad como prioridad agrega un valor importante en cada servicio
                                        y producto, marcando una gran diferencia con respecto a la gran mayor&iacute;a
                                        de las compa&ntilde;&iacute;as dedicadas a la fabricaci&oacute;n de soluciones en Chile.
                                    </p>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <h3>No a la dependencia</h3>
                                    <p>
                                        Ofreceremos confianza y conocimiento a trav&eacute;s de la entrega de todos nuestros
                                        c&oacute;digos fuentes en la fabricaci&oacute;n de soluciones a medida y la erradicaci&oacute;n
                                        de uso de componentes obsoletos evitando as&iacute; una dependencia t&eacute;cnica.
                                    </p>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <h3>Precios competitivos</h3>
                                    <p>
                                        Mantenemos precios competitivos sin arriesgar la calidad de los trabajos
                                        realizados. Esto se logra a trav&eacute;s de buen equilibrio y coordinaci&oacute;n,
                                        entre talento, cargas de trabajo, organizaci&oacute;n y desempe&ntilde;o. Esto nos
                                        posiciona como la mejor alternativa comercial del mercado.
                                    </p>
                                </div>
                            </div>

                            <div className="row justify-content-md-center mt-4 p-3 p-md-5 pt-5 mb-0 mb-md-5 app-bg-angle-color rounded border">
                                <div className="col-md-6 p-0 p-md-4 pb-5 d-flex d-md-none align-items-center">
                                    <img src={securityImg} className="img-fluid" alt="Inside Security, desarrollo de software" />
                                </div>
                                <div className="col-md-6">
                                    <h2 className="display-6 mb-3 text-center text-md-start">No a la delincuencia</h2>
                                    <p>
                                        Valoramos la honradez y la &eacute;tica por sobre el conocimiento,
                                        resguardando as&iacute; la confidencialidad de la informaci&oacute;n
                                        manipulada en nuestros servicios, por lo cual, todos nuestros
                                        colaboradores cuentan con un proceso de selecci&oacute;n muy
                                        estricto, dado a las circunstancias, <b>nadie puede contar con
                                        antecedentes que afecten la &eacute;tica e integridad de la
                                        informaci&oacute;n</b>.
                                    </p>
                                    <p>
                                        Nos aseguramos de velar por la calidad de la revisi&oacute;n del
                                        c&oacute;digo generado para <b>evitar la incrustaci&oacute;n de malware
                                        programado o funcionalidades maliciosas</b>.
                                    </p>
                                    <p className="mb-0">
                                        Sabemos que un gran proyecto requiere del trabajo en equipo,
                                        por lo cual nos adaptamos y creamos el ambiente necesario
                                        para que nuestros clientes puedan <b>escalar sus soluciones
                                        de manera segura y proyectarse a largo plazo</b>.
                                    </p>
                                </div>
                                <div className="col-md-6 px-4 d-none d-md-flex align-items-center">
                                    <img src={securityImg} className="img-fluid" alt="Seguridad" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="text-light app-bg-color-1 my-4 py-5 position-relative">
                    <div className="splash-up d-none d-lg-block w-100 position-absolute"></div>
                    <div className="container position-relative">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-5 px-0 px-md-4 pt-3 pt-md-0 ps-0 mb-3 mb-md-0">
                                <img src={staffImg} className="img-fluid rounded border p-1" alt="Staff Insidesecurity" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-6 mb-3 text-center text-md-start">
                                    Nuestro equipo humano
                                </h2>
                                <p className="text-center text-md-start">
                                    En nuestro equipo de trabajo, contamos con un grupo de profesionales
                                    altamente capacitados y apasionados por la tecnolog&iacute;a. Desde
                                    programadores y dise&ntilde;adores hasta especialistas en redes y seguridad
                                    inform&aacute;tica, nuestro equipo de expertos trabaja incansablemente para
                                    ofrecer soluciones innovadoras y personalizadas a nuestros clientes. Adem&aacute;s,
                                    nos enorgullece decir que cada miembro de nuestro equipo cuenta con una amplia
                                    experiencia y conocimiento en el campo de la tecnolog&iacute;a. En conjunto,
                                    estamos comprometidos en ofrecer un servicio excepcional y de calidad a cada
                                    uno de nuestros clientes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="splash-down d-none d-lg-block w-100 position-absolute"></div>
                </div>
            </div>
        );
    }
}

export default AboutMainView;
