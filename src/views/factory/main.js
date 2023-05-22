import React, { Component } from 'react';
import './assets/style.css';
import saveMoneyImg from './assets/save-money.jpg';
import sprintSecurityImg from './assets/sprint-security.jpg';
import teachingImg from './assets/teaching.jpg';
import technologiesImg from './assets/technologies.jpg';


class FactoryMainView extends Component {
    render() {
        return (
            <div className="factory-view">
                <div className="app-bg-color-2 text-light text-center text-md-start position-relative">
                    <div className="app-bg-graphic app-bg-header position-absolute start-0 top-0 w-100 h-100"></div>
                    <div className="container py-5 position-relative">
                        <div className="row justify-content-md-center">
                            <div className="col-md-10">
                                <h1 className="display-4 fw-lighter mb-3">
                                    <b>F&aacute;brica</b> Aplicativa Segura
                                </h1>
                                <p className="lead mb-0">
                                    <b className="me-2">Soluciones Seguras y Escalables.</b>
                                    Disminuye costos por riesgos de seguridad, errores de
                                    planificaci&oacute;n y correcci&oacute;n de vulnerabilidades.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 py-4 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-5 p-4 d-flex align-items-center">
                                <img src={saveMoneyImg} className="img-fluid" alt="Costo beneficio" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-6 mb-3 text-center text-md-start">
                                    La mejor opci&oacute;n en<br />
                                    <i><b className="fw-bolder">costo beneficio y seguridad</b></i>
                                </h2>
                                <p className="text-center text-md-start">
                                    Disminuye los costos por riesgos de seguridad, errores de
                                    planificaci&oacute;n y correcci&oacute;n por vulnerabilidades eligiendo
                                    la experiencia y el profesionalismo.
                                </p>

                                <div className="d-block d-md-none mt-4 px-4">
                                    <p>
                                        <span className="app-material-icons me-2">done</span>
                                        La seguridad es
                                        <span className="fw-bold"> una prioridad</span>.
                                    </p>
                                    <p>
                                        <span className="app-material-icons me-2">done</span>
                                        Uso de est&aacute;ndares y
                                        <span className="fw-bold"> buenas pr&aacute;cticas</span>.
                                    </p>
                                    <p className="mb-0">
                                        <span className="app-material-icons me-2">done</span>
                                        Arquitectura
                                        <span className="fw-bold"> escalable</span>.
                                    </p>
                                </div>

                                <div className="d-none d-md-block my-4">
                                    <div className="row text-center">
                                        <div className="col-6 col-md-4">
                                            <p className="app-material-icons display-3 mt-2 app-text-color-1">security</p>
                                            <p className="lead">
                                                <span className="fw-normal">La seguridad es</span><br />
                                                <span className="fw-bold">una prioridad</span>
                                            </p>
                                        </div>
                                        <div className="col-6 col-md-4">
                                            <p className="app-material-icons display-3 mt-2 app-text-color-1">verified</p>
                                            <p className="lead">
                                                <span className="fw-normal">Uso de est&aacute;ndares,</span><br />
                                                <span className="fw-bold">Buenas pr&aacute;cticas</span>
                                            </p>
                                        </div>
                                        <div className="col-6 col-md-4">
                                            <p className="app-material-icons display-3 mt-2 app-text-color-1">published_with_changes</p>
                                            <p className="lead">
                                                <span className="fw-normal">Arquitectura</span><br />
                                                <span className="fw-bold">Escalable</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-4 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-5 p-4 d-flex d-md-none align-items-center">
                                <img src={sprintSecurityImg} className="img-fluid" alt="Desarrollo de software" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-5 mb-3 text-center text-md-start">Lo hacemos por t&iacute;</h2>
                                <p className="mb-4 mb-md-5 text-center text-md-start">
                                    Ofrecemos un abanico de soluciones <b>orientadas a la seguridad</b> en la
                                    f&aacute;brica de soluciones aplicativas. Delega la ejecuci&oacute;n en nuestras
                                    manos profesionales, ahorrando tiempo y costos de gesti&oacute;n,
                                    <b> aumentando la productividad, velocidad y cumplimiento normativo</b>.
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                F&aacute;brica de aplicaciones.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                F&aacute;brica de integraciones.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Consultor&iacute;a profesional.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                An&aacute;lisis de calidad y arquitectura.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                An&aacute;lisis de seguridad Caja Blanca.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Correcci&oacute;n de vulnerabilidades.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-md-start">
                                    <button
                                        className="btn btn-primary mt-4 px-5 rounded-pill"
                                        onMouseDown={event => { this.props.navigate('/factory/services') }}>
                                        Leer m&aacute;s
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-5 py-4 px-4 d-none d-md-flex align-items-center">
                                <img src={sprintSecurityImg} className="img-fluid" alt="Desarrollo de software" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-4 py-md-5">
                    <div className="container">

                        <div className="row justify-content-md-center">
                            <div className="col-md-5 p-4 d-flex align-items-center">
                                <img src={teachingImg} className="img-fluid" alt="Capacitaciones" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-5 mb-3 text-center text-md-start">Tu lo haces, te apoyamos</h2>
                                <p className="mb-4 mb-md-5 text-center text-md-start">
                                    Ofrecemos un abanico de soluciones orientadas a la
                                    <b> implementaci&oacute;n y seguridad en tu f&aacute;brica de
                                        soluciones aplicativas</b>. Te entregamos toda nuestra
                                    experiencia para que puedas crear y escalar tus &aacute;reas
                                    de Desarrollo de Software Seguro.
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Cumplimiento normativo.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Integraci&oacute;n de seguridad.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Charlas y capacitaciones.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Auditor&iacute;a de procesos NIST.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-md-start">
                                    <button
                                        className="btn btn-primary mt-4 px-5 rounded-pill"
                                        onMouseDown={event => { this.props.navigate('/factory/services') }}>
                                        Leer m&aacute;s
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="py-4 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-5 p-4 d-flex d-md-none align-items-center">
                                <img className="img-fluid" src={technologiesImg} alt="Tecnolog&iacute;as" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-6 mb-3 text-center text-md-start">
                                    Utilizamos<br />
                                    <i><b>Tecnolog&iacute;as de mercado</b></i>
                                </h2>
                                <p className="text-center text-md-start">
                                    Nos basamos en los est&aacute;ndares y procedimientos
                                    internacionales recomendados: Framework de Desarrollo de Software Seguro
                                    <b> NIST 800-218, 800-53 y 800-95</b>. Est&aacute;ndar de Seguridad de
                                    Datos para la Industria de Tarjeta de Pago (Payment Card Industry Data
                                    Security Standard) o <b> PCI/DSS</b>. Framework de evaluaci&oacute;n de
                                    proceso de Desarrollo de Software bancario <b> SPICE ISO/IEC 15504</b>.
                                </p>
                                <div className="text-center text-md-start">
                                    <button
                                        className="btn btn-primary mt-4 px-5 rounded-pill"
                                        onMouseDown={event => { this.props.navigate('/factory/technologies') }}>
                                        Leer m&aacute;s
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-5 p-4 d-none d-md-flex align-items-center">
                                <img className="img-fluid" src={technologiesImg} alt="Tecnolog&iacute;as" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FactoryMainView;
