import React, { Component } from 'react';
import 'material-icons/iconfont/material-icons.css';
import './assets/style.css';
import deviceInfoApp from './assets/device-info-app.png';
import codeImg from './assets/code.png';
import trainingImg from './assets/training.jpg';


class FactoryServicesView extends Component {
    render() {
        return (
            <div className="factory-view">
                <div className="app-bg-color-2 text-light text-center text-md-start position-relative">
                    <div className="app-bg-graphic app-bg-header position-absolute start-0 top-0 w-100 h-100"></div>
                    <div className="container py-5 position-relative">
                        <div className="row justify-content-md-center">
                            <div className="col-md-10">
                                <h1 className="display-4 fw-lighter mb-3">
                                    <b>F&aacute;brica</b> Aplicativa Segura - <b>Servicios</b>
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

                <div className="mt-5 mb-4 py-4 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-5 pb-4 d-flex d-md-none align-items-center">
                                <img src={deviceInfoApp} className="img-fluid" alt="F&aacute;brica de desarrollo de software" />
                            </div>
                            <div className="col-md-5">
                                <h3 className="display-6 mb-3 text-center text-md-start">
                                    <strong>F&aacute;brica de software</strong> e integraciones
                                </h3>
                                <p className="text-center text-md-start">
                                    Contamos con expertos en la fabricaci&oacute;n de soluciones a medida,
                                    tambi&eacute;n nos adaptamos a tus soluciones legado, entregamos soporte y
                                    mantenci&oacute;n a medida. Todas nuestras soluciones cuentan con un estricto
                                    proceso de planificaci&oacute;n de Arquitectura y Seguridad, delegando cada
                                    responsabilidad al profesional adecuado para cada tarea.
                                </p>
                                <p className="text-center text-md-start">
                                    Nos basamos en los est&aacute;ndares y procedimientos internacionales recomendados
                                    a trav&eacute;s del uso de buenas pr&aacute;cticas para que tus soluciones sean
                                    completamente escalables y seguras, ahorrando costos al largo plazo.
                                </p>
                                <div className="text-center text-md-start">
                                    <button
                                        className="btn btn-primary mt-4 px-5 rounded-pill"
                                        onMouseDown={event => { this.props.navigate('/factory/technologies') }}>
                                        Nuestra tecnolog&iacute;a
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-5 px-4 d-none d-md-flex align-items-center">
                                <img src={deviceInfoApp} className="img-fluid" alt="F&aacute;brica de desarrollo de software" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-4 py-4 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-5 pb-4 d-flex align-items-center">
                                <img src={codeImg} className="img-fluid" alt="An&aacute;lisis de calidad y seguridad" />
                            </div>
                            <div className="col-md-5">
                                <h3 className="display-6 mb-3 text-center text-md-start">
                                    An&aacute;lisis de <b>calidad y seguridad</b> aplicativa
                                </h3>
                                <p className="text-center text-md-start">
                                    Contamos con servicios de an&aacute;lisis de calidad y seguridad de
                                    Software, Arquitectura y c&oacute;digo fuente (caja blanca), encontrando tus puntos
                                    d&eacute;biles que puedan afectar la continuidad operativa al corto y
                                    largo plazo, disminuyendo el riesgo por incidencias de seguridad y
                                    disponibilidad.
                                </p>
                                <p className="text-center text-md-start">
                                    En el proceso de Desarrollo de Software Seguro declarado por el <b>Framework
                                    de NIST SP-800-218</b>, exige un control de calidad aplicativo no solamente
                                    funcional sino tambi&eacute;n de seguridad. Al abarcar el an&aacute;lisis antes
                                    y durante la construcci&oacute;n de una soluci&oacute;n permite ahorrar tiempos
                                    y costos al momento de realizar correcciones como por ejemplo, cambios en la
                                    deficiencia de la arquitectura y programaci&oacute;n.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-4 py-4 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-5 pb-4 d-flex d-md-none align-items-center">
                                <img src={trainingImg} className="img-fluid" alt="Entrenamiento" />
                            </div>
                            <div className="col-md-5">
                                <h3 className="display-6 mb-3 text-center text-md-start">
                                    <b>Entrenamiento profesional</b> y charlas
                                </h3>
                                <p className="text-center text-md-start">
                                    Contamos con un &aacute;mplio conocimiento para ser un apoyo en tu f&aacute;brica
                                    de Desarrollo de Software, ofreciendo charlas y capacitaciones con contenido
                                    estandarizado y a la medida seg&uacute;n el uso de la tecnolog&iacute;a de tu
                                    compa&ntilde;&iacute;a.
                                </p>
                                <p className="text-center text-md-start">
                                    Procesos y cumplimiento de normas y est&aacute;ndares de desarrollo de software seguro,
                                    procesos y ciclos de vida de an&aacute;lisis de calidad, tanto para tu equipo de
                                    Desarrollo, QA, DBA y Arquitectos.
                                </p>
                                <p className="text-center text-md-start">
                                    La prevenci&oacute;n de incidencias y el ahorro de costos por correcciones
                                    comienza por la capacitaci&oacute;n al personal involucrado en tus proyectos.
                                    Nosotros te apoyamos a que crezcas y cumplas tus metas.
                                </p>
                            </div>
                            <div className="col-md-5 px-4 d-none d-md-flex align-items-center">
                                <img src={trainingImg} className="img-fluid" alt="Entrenamiento" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FactoryServicesView;
