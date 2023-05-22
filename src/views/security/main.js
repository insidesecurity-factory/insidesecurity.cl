import React, { Component } from 'react';
import './assets/style.css';
import secureDevelopmentImg from './assets/secure-development.jpg';
import ethicalHackingImg from './assets/ethical-hacking.jpg';
import outsourcingImg from './assets/outsourcing.jpg';
import gapImg from './assets/gap.jpg';
import cisoImg from './assets/ciso.jpg';
import certCehImg from './assets/certifications/ceh.png';
import certCrtpImg from './assets/certifications/crtp.png';
import certEcpptImg from './assets/certifications/ecppt.png';
import certEjptImg from './assets/certifications/ejpt.png';
import certEmaptImg from './assets/certifications/emapt.png';
import certEwptxImg from './assets/certifications/ewptx.png';
import certOscpImg from './assets/certifications/oscp.png';
import certOsceImg from './assets/certifications/osce.png';
import certOsweImg from './assets/certifications/oswe.png';


class SecurityMainView extends Component {
    render() {
        return (
            <div className="security-view">
                <div className="app-bg-color-2 text-light text-center text-md-start position-relative">
                    <div className="app-bg-graphic app-bg-header position-absolute start-0 top-0 w-100 h-100"></div>
                    <div className="container py-5 position-relative">
                        <div className="row justify-content-md-center">
                            <div className="col-md-10">
                                <h1 className="display-4 fw-lighter mb-3">
                                    <b>Ciberseguridad</b> defensiva y ofensiva
                                </h1>
                                <p className="lead mb-0">
                                    <b className="me-2">Ciberseguridad y Seguridad de la Informaci&oacute;n.</b>
                                    Acompa&ntilde;amos a las empresas en la creaci&oacute;n y desarrollo de su
                                    cultura y procesos de seguridad con todo el conocimiento y la experiencia
                                    que necesitas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 py-4 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-5 p-4 pt-0">
                                <img src={secureDevelopmentImg} className="img-fluid" alt="Seguridad Infraestructura" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-6 mb-3 text-center text-md-start">
                                    Acompa&ntilde;amiento de<br />
                                    <i><b>Desarrollo Seguro</b></i>
                                </h2>
                                <p className="text-center text-md-start">
                                    Contamos con el conocimiento y la experiencia necesaria para
                                    realizar el acompa&ntilde;amiento dentro de las fabricas de
                                    desarrollo &Aacute;gil y tradicionales, velando por la Seguridad,
                                    escalabilidad y buenas pr&aacute;cticas que conllevan a la
                                    disminuci&oacute;n de riesgos al corto y largo plazo,
                                    adelant&aacute;ndonos a las incidencias y disminuyendo las
                                    p&eacute;rdidas en activos e imagen corporativa.
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Lineamientos de seguridad.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Evaluaciones de amenazas.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Pentest fase pre-productiva.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Acompa&ntilde;amiento mejoras.
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
                            <div className="col-md-5 p-4 pt-0 d-md-none">
                                <img src={ethicalHackingImg} className="img-fluid" alt="Seguridad en la nube" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-5 mb-3 text-center text-md-start">
                                    Hacking &Eacute;tico<br />
                                    <i><b>Ofensivo y defensivo</b></i>
                                </h2>
                                <p className="text-center text-md-start">
                                    Contamos con profesionales especializados para ejecutar
                                    pruebas de penetraci&oacute;n ofensiva a aplicaciones Pre
                                    productivas y Productivas (caja gris y negra), perimetral
                                    Onpremise y Cloud, que permiten medir el nivel de
                                    preparaci&oacute;n de los distintos aplicativos y plataformas
                                    ante una amenaza real.
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Ethical Hacking Caja Gris.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Ethical Hacking Caja Negra.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Servicio recurrente Red Team.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Elaboraci&oacute;n de equipos.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 p-4 pt-0 d-none d-md-block">
                                <img src={ethicalHackingImg} className="img-fluid" alt="Seguridad en la nube" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 py-4 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-5 p-4 pt-0">
                                <img src={gapImg} className="img-fluid" alt="Seguridad Infraestructura" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-6 mb-3 text-center text-md-start">
                                    An&aacute;lisis GAP y<br />
                                    <i><b>Assessment Owasp SAMM</b></i>
                                </h2>
                                <p className="text-center text-md-start">
                                    SAMM proporciona una forma efectiva y medible para que
                                    todo tipo de organizaciones analicen y mejoren su postura
                                    de seguridad de software. Nuestro servicio permite evaluar
                                    en qu&eacute; nivel de madurez se encuentra la
                                    organizaci&oacute;n en sus 5 pilares.
                                </p>
                                <p>
                                    Atravez de un analisis GAP apoyamos a los clientes a detectar
                                    los riesgos y exposicion que representa la compa&ntilde;&iacute;a
                                    en la actualidad. Tambien, generar un plan de accion con
                                    prioridaddes y tiempos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-4 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-5 p-4 pt-0 d-md-none">
                                <img src={cisoImg} className="img-fluid" alt="Seguridad en la nube" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-5 mb-3 text-center text-md-start">
                                    Ciso Virtual
                                </h2>
                                <p className="text-center text-md-start">
                                    Contamos con un equipo humano para realizar las actividades
                                    necesarias que permitan planificar una estrategia de defensa
                                    ante actuales y futuras amenazas que pueda tener la
                                    organizaci&oacute;n, adem&aacute;s de gestionar los planes
                                    de acciones que deriven de auditor&iacute;as internas o
                                    externas.
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                RoadMap de implementaci&oacute;n.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Generaci&oacute;n de Normas, Pol&iacute;ticas y procedimientos.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Informes peri&oacute;dicos a comit&eacute;s.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Campa&ntilde;as de concientizaci&oacute;n.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 p-4 pt-0 d-none d-md-block">
                                <img src={cisoImg} className="img-fluid" alt="Seguridad en la nube" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 py-4 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-5 p-4 pt-0">
                                <img src={outsourcingImg} className="img-fluid" alt="Seguridad Infraestructura" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-6 mb-3 text-center text-md-start">
                                    Outsourcing de personal<br />
                                    <i><b>De Ciberseguridad</b></i>
                                </h2>
                                <p className="text-center text-md-start">
                                    Nuestro servicio de outsourcing de personal est&aacute;
                                    dise&ntilde;ado para ayudar a las empresas a encontrar
                                    y contratar a los mejores profesionales en el campo de la
                                    tecnolog&iacute;a. Contamos con un equipo de reclutadores
                                    expertos que se encargan de identificar a los candidatos
                                    m&aacute;s calificados y con experiencia en las tecnolog&iacute;as
                                    que su empresa necesita. Adem&aacute;s, nuestro servicio de
                                    outsourcing no solo le ahorra tiempo y recursos valiosos,
                                    sino que tambi&eacute;n le brinda la tranquilidad de saber
                                    que est&aacute; trabajando con profesionales confiables y
                                    altamente capacitados.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-4 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-10">
                                <h2 className="display-5 mb-3 text-center">
                                    Nuestras <b>certificaciones de seguridad</b>
                                </h2>
                                <p className="lead text-center">
                                    Contamos con profesionales especializados para ejecutar pruebas de
                                    penetraci&oacute;n ofensiva a aplicaciones Pre productivas y Productivas
                                    (caja blanca, gris y negra), perimetral Onpremise y Cloud, que permiten
                                    medir el nivel preparaci&oacute;n de los distintos aplicativos y plataformas
                                    ante una amenaza real.
                                </p>
                                <div className="row justify-content-md-center selectable-blocks">
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={certOscpImg} alt="Certificaci&oacute;n OSCP" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={certOsceImg} alt="Certificaci&oacute;n OSCE" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={certOsweImg} alt="Certificaci&oacute;n OSWE" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={certCehImg} alt="Certificaci&oacute;n CEH" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={certCrtpImg} alt="Certificaci&oacute;n CRTP" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={certEcpptImg} alt="Certificaci&oacute;n ECPPT" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={certEjptImg} alt="Certificaci&oacute;n EJPT" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={certEmaptImg} alt="Certificaci&oacute;n EMAPT" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={certEwptxImg} alt="Certificaci&oacute;n EWPTX" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SecurityMainView;
