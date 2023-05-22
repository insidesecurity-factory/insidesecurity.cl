import React, { Component } from 'react';
import 'material-icons/iconfont/material-icons.css';
import './assets/style.css';


class FactoryTechnologiesView extends Component {
    render() {
        return (
            <div className="factory-view">
                <div className="app-bg-color-2 text-light text-center text-md-start position-relative">
                    <div className="app-bg-graphic app-bg-header position-absolute start-0 top-0 w-100 h-100"></div>
                    <div className="container py-5 position-relative">
                        <div className="row justify-content-md-center">
                            <div className="col-md-10">
                                <h1 className="display-4 fw-lighter mb-3">
                                    <b>F&aacute;brica</b> Aplicativa Segura - <b>Tecnolog&iacute;as</b>
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

                <div className="container">
                    <div className="row justify-content-md-center pt-5">
                        <div className="col-md-10">
                            <h3 className="fw-light mb-3 d-flex align-items-center">
                                <span className="material-icons-round me-3 d-none d-md-inline">center_focus_strong</span>
                                Est&aacute;ndares y procedimientos
                            </h3>
                            <p className="mb-5">
                                Nos basamos en los est&aacute;ndares y procedimientos
                                internacionales recomendados: Framework de Desarrollo de Software Seguro
                                <b> NIST 800-218, 800-53 y 800-95</b>. Est&aacute;ndar de Seguridad de Datos para
                                la Industria de Tarjeta de Pago (Payment Card Industry Data Security
                                Standard) o <b> PCI/DSS</b>. Framework de evaluaci&oacute;n de proceso de Desarrollo
                                de Software bancario <b> SPICE ISO/IEC 15504</b>.
                            </p>

                            <h3 className="fw-light mb-3 d-flex align-items-center">
                                <span className="material-icons-round me-3 d-none d-md-inline">center_focus_strong</span>
                                Tecnolog&iacute;as robustas y seguras
                            </h3>
                            <p className="mb-5">
                                Contamos con &aacute;mplios conocimientos en tecnolog&iacute;a tradicional, anal&iacute;tica
                                y transaccional. <b>Priorizamos el uso de Frameworks y tecnolog&iacute;as robustas y
                                seguras con &aacute;mplio soporte</b> como Java Spring Boot Framework, .NET MVC5
                                Framework sobre C#, NodeJS, ReactJS Framework, Bootstrap 5 Framework y Google
                                Materials, arquitectura en microservicios, API/REST, Bus de datos reactivos y
                                Dockerizaci&oacute;n y despliegue CICD sobre servicios en nube como AWS, Azure,
                                IBM Cloud y Oracle OCI.
                            </p>

                            <h3 className="fw-light mb-3 d-flex align-items-center">
                                <span className="material-icons-round me-3 d-none d-md-inline">center_focus_strong</span>
                                Nos adaptamos a tu tecnolog&iacute;a legado
                            </h3>
                            <p className="mb-0">
                                <b>Tambi&eacute;n nos adaptamos</b> a las tecnolog&iacute;as y desarrollos legado de nuestros
                                clientes, como por ejemplo, PHP Codeigniter/Laravel, Python Django/Flask,
                                desarrollos sobre Wordpress/Joomla/Drupal, ASP VB.NET, integraciones con
                                servicios WSDL/SOAP, arquitecturas monol&iacute;ticas e infraestructura Onpremise.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FactoryTechnologiesView;
