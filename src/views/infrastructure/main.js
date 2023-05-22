import React, { Component } from 'react';
import securityImg from './assets/security.jpg';
import infoClassificationImg from './assets/info-classification.jpg';
import cloudSecurityImg from './assets/cloud-security.jpg';
import iamImg from './assets/iam.jpg';
import devSecOpsImg from './assets/devsecops.jpg';
import socImg from './assets/soc.jpg';
import './assets/style.css';


class InfrastructureMainView extends Component {
    render() {
        return (
            <div className="infrastructure-view">
                <div className="app-bg-color-2 text-light text-center text-md-start position-relative">
                    <div className="app-bg-graphic app-bg-header position-absolute start-0 top-0 w-100 h-100"></div>
                    <div className="container py-5 position-relative">
                        <div className="row justify-content-md-center">
                            <div className="col-md-10">
                                <h1 className="display-4 fw-lighter mb-3">
                                    <b>Infraestructura</b> segura
                                </h1>
                                <p className="lead mb-0">
                                    <b className="me-2">Infraestructura y escalabilidad.</b>
                                    Apoyamos a nuestros clientes a mejorar su postura de
                                    <b> ciberseguridad perimetral</b>, seguridad de la
                                    informaci&oacute;n y arquitecturas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 py-4 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-5 p-4 pt-0">
                                <img src={securityImg} className="img-fluid" alt="Seguridad Infraestructura" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-6 mb-3 text-center text-md-start">
                                    Ciberseguridad
                                </h2>
                                <p className="text-center text-md-start">
                                    Ayudamos a nuestros clientes a mejorar su postura de ciberseguridad,
                                    favoreciendo la detecci&oacute;n y correcci&oacute;n oportuna de sus
                                    debilidades, el bastionado de sus arquitecturas, activos y soluciones
                                    y convirtiendo a sus colaboradores en <b>la primera l&iacute;nea de
                                    defensa contra las ciberamenazas</b>.
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Modelado de Amenazas.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Hardening preventivo.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                An&aacute;lisis de seguridad perimetral.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Gesti&oacute;n de vulnerabilidades.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Herramientas de evaluaci&oacute;n.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Protecci&oacute;n de contenedores.
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
                            <div className="col-md-5 p-4 pt-0">
                                <img src={infoClassificationImg} className="img-fluid" alt="Seguridad Infraestructura" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-6 mb-3 text-center text-md-start">
                                    Seguridad de la <b>informaci&oacute;n</b>
                                </h2>
                                <p className="text-center text-md-start">
                                    Las organizaciones tienen que ser capaces de empoderar a los
                                    empleados proporcion&aacute;ndoles la informaci&oacute;n que
                                    necesitan en donde lo necesitan, a la vez que se aseguran de
                                    que sus activos est&aacute;n protegidos.
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Compliance GDPR/NIST/PCI/DLP.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Auditor&iacute;as PCI-DSS, ISO 27K.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Continuidad de negocio.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Recuperaci&oacute;n de desastre (DRP).
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Contingencia tecnol&oacute;gica (PCT).
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                An&aacute;lisis de riesgo.
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
                                <img src={cloudSecurityImg} className="img-fluid" alt="Seguridad en la nube" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-5 mb-3 text-center text-md-start">
                                    Arquitectura de seguridad<br />
                                    <i><b>en la nube</b></i>
                                </h2>
                                <p className="text-center text-md-start">
                                    Ayudamos a nuestros clientes a dise&ntilde;ar arquitecturas cloud o
                                    h&iacute;bridas, teniendo en cuenta las particularidades del
                                    proveedor de cloud escogido. Nuestro objetivo es garantizar la
                                    seguridad y <b>maximizar la inversi&oacute;n en los entornos</b>.
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Arquitectura de Seguridad.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Auditor&iacute;as de seguridad Cloud.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Herramientas de seguridad.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                An&aacute;lisis de configuraciones.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 p-4 pt-0 d-none d-md-block">
                                <img src={cloudSecurityImg} className="img-fluid" alt="Seguridad en la nube" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-4 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-5 p-4 pt-0">
                                <img src={iamImg} className="img-fluid" alt="Gesti&oacute;n de identidad" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-5 mb-3 text-center text-md-start">
                                    Gesti&oacute;n de Identidad<br />
                                    <i><b>y Accesos / IAM</b></i>
                                </h2>
                                <p className="text-center text-md-start">
                                    Combinamos procesos, tecnolog&iacute;as y pol&iacute;ticas, para
                                    gestionar identidades digitales y definir c&oacute;mo estas
                                    identidades digitales son utilizadas para acceder a los recursos
                                    de la organizaci&oacute;n.
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Consultor&iacute;a general.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Arquitectura en identidad.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="px-4 px-md-0">
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Transferencia de conocimiento.
                                            </p>
                                            <p>
                                                <span className="app-material-icons me-2">done</span>
                                                Sistemas de gesti&oacute;n IAM.
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
                            <div className="col-md-5 p-4 pt-0 d-block d-md-none">
                                <img src={devSecOpsImg} className="img-fluid" alt="DevSecOps" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-5 mb-3 text-center text-md-start">
                                    Procesos DevSecOps
                                </h2>
                                <p className="text-center text-md-start">
                                    Reducci&oacute;n de los tiempos de entrega de valor y de respuesta
                                    a los clientes SecDevOps uniendo personas, procesos y tecnolog&iacute;a,
                                    para la entrega continua de valor a los usuarios finales, enmarcado
                                    en un contexto ciberseguro.
                                </p>
                                <p>
                                    <span className="app-material-icons me-2">done</span>
                                    Reducci&oacute;n de los tiempos de <b>entrega de valor</b> y de
                                    respuesta a los clientes.
                                </p>
                                <p>
                                    <span className="app-material-icons me-2">done</span>
                                    <b>Reducci&oacute;n del tiempo</b> invertido en el ciclo de vida
                                    de las aplicaciones.
                                </p>
                                <p>
                                    <span className="app-material-icons me-2">done</span>
                                    <b>Mejoras en la calidad</b> de las aplicaciones, a nivel funcional,
                                    de seguridad y rendimiento.
                                </p>
                                <p>
                                    <span className="app-material-icons me-2">done</span>
                                    <b>Mejora la productividad</b> de la organizaci&oacute;n y fomenta una cultura
                                    de colaboraci&oacute;n y mejora continua.
                                </p>
                            </div>
                            <div className="col-md-5 p-4 pt-0 d-none d-md-block">
                                <img src={devSecOpsImg} className="img-fluid" alt="DevSecOps" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-4 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-5 p-4 pt-0">
                                <img src={socImg} className="img-fluid" alt="CyberSoc" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-5 mb-3 text-center text-md-start">
                                    CyberSoc
                                </h2>
                                <p className="text-center text-md-start">
                                    Nuestro CyberSOC se caracteriza por trabajar <b>de forma Preventiva </b>
                                    ofreciendo an&aacute;lisis de vulnerabilidades a los sistemas que se
                                    van a monitorizar, de forma que se a&ntilde;ade una capa extra de seguridad,
                                    identificando cu&aacute;les ser&iacute;an los posibles puntos de entradas y
                                    motivaciones a los atacantes.
                                </p>
                                <p>
                                    <span className="app-material-icons me-2">done</span>
                                    <b>Prevenci&oacute;n</b>: Auditor&iacute;as de los sistemas.
                                </p>
                                <p>
                                    <span className="app-material-icons me-2">done</span>
                                    <b>Detecci&oacute;n</b>: Monitorizaci&oacute;n constante 24x7.
                                </p>
                                <p>
                                    <span className="app-material-icons me-2">done</span>
                                    <b>An&aacute;lisis</b>: Estudio y confirmaci&oacute;n de alertas.
                                </p>
                                <p>
                                    <span className="app-material-icons me-2">done</span>
                                    <b>Respuesta</b>: Reacci&oacute;n ante incidentes.
                                </p>
                                <p>
                                    <span className="app-material-icons me-2">done</span>
                                    <b>An&aacute;lisis forense</b> digital y de seguridad.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfrastructureMainView;
