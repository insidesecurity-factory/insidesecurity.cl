import React, { Component } from 'react';
import './assets/style.css';
import appSecurityImg from './assets/app-security.jpg';
import factoryImg from './assets/factory.jpg';
import infrastructureImg from './assets/infrastructure.jpg';
import successCmpcImg from './assets/success/cmpc.jpg';
import successEntelImg from './assets/success/entel-chile.jpg';
import successFalabellaImg from './assets/success/falabella.jpg';
import successBancoDeChileImg from './assets/success/banco-de-chile.jpg';
import successBancoRipleyImg from './assets/success/banco-ripley.jpg';
import successBancoPichinchaImg from './assets/success/banco-pichincha.jpg';
import successGrupoSecurityImg from './assets/success/grupo-security.jpg';
import successDpWorldImg from './assets/success/dp-world.jpg';
import successEfeImg from './assets/success/efe.jpg';
import successBbvaImg from './assets/success/banco-bbva.jpg';
import successCajaLosAndesImg from './assets/success/caja-los-andes.jpg';
import successGrupoCopesaImg from './assets/success/grupo-copesa.jpg';
import successCardifImg from './assets/success/cardif.jpg';
import successConsorcioImg from './assets/success/consorcio.jpg';
import successHdiImg from './assets/success/hdi.jpg';
import successInacapImg from './assets/success/inacap.jpg';
import successSondaImg from './assets/success/sonda.jpg';
import successGtdIntesisImg from './assets/success/gtd-intesis.jpg';
import partnerAppdomeImg from './assets/partners/appdome.jpg';
import partnerAquaSecurityImg from './assets/partners/aqua-security.jpg';
import partnerAwsImg from './assets/partners/aws.jpg';
import partnerAzureImg from './assets/partners/azure.jpg';
import partnerCheckmarxImg from './assets/partners/checkmarx.jpg';
import partnerEcCouncilImg from './assets/partners/ec-council.jpg';
import partnerExtrahopImg from './assets/partners/extrahop.jpg';
import partnerGoogleSuiteImg from './assets/partners/google-suite.jpg';
import partnerGuardicoreImg from './assets/partners/guardicore.jpg';
import partnerKiuwanImg from './assets/partners/kiuwan.jpg';
import partnerKnowbe4Img from './assets/partners/knowbe4.jpg';
import partnerOffice365Img from './assets/partners/office-365.jpg';
import partnerPaloAltoImg from './assets/partners/palo-alto.jpg';
import partnerRapid7Img from './assets/partners/rapid7.jpg';
import partnerStellarImg from './assets/partners/stellar.jpg';


class HomeMainView extends Component {
    render() {
        return (
            <div className="home-main-view">
                <header className="app-bg-primary text-light">
                    <div className="pb-5 position-relative">
                        <div className="app-bg-graphic app-bg-header position-absolute start-0 top-0 w-100 h-100"></div>
                        <svg className="position-absolute bottom-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path fill="#ffffff" d="M0 100L0 92.631L1000 0L1000 100Z" />
                        </svg>
                        <div className="container py-md-5 position-relative text-center text-md-start">
                            <div className="row py-5 mb-md-5 header-content">
                                <div className="col-lg-7 col-md-9">

                                    <h1 className="display-1 fw-lighter mb-5">
                                        <div>
                                            <i><b>Nos adaptamos</b></i><br />
                                            A tus necesidades
                                        </div>
                                    </h1>
                                    <p className="lead mb-5">
                                        <div>
                                            Seguridad e Innovaci&oacute;n digital que marca la diferencia.
                                        </div>
                                    </p>
                                    <p>
                                        <a
                                            href="/Brochure%20Insidesecurity.pdf"
                                            className="btn btn-outline-light mb-3 mb-md-0 me-md-3 px-5 py-2 rounded-pill d-block d-md-inline-block"
                                            download>
                                            <span className="d-flex align-items-middle justify-content-center">
                                                <span className="material-icons-round me-2">file_download</span>
                                                Descargar brochure
                                            </span>
                                        </a>
                                        <a
                                            href="tel:%2b56978785289"
                                            className="btn btn-outline-light px-5 py-2 rounded-pill d-block d-md-inline-block">
                                            <span className="d-flex align-items-middle justify-content-center">
                                                <span className="material-icons-round me-2">call</span>
                                                Cont&aacute;ctanos ahora
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="mt-5 py-4 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-5 p-4 pt-0">
                                <img src={appSecurityImg} className="img-fluid" alt="Seguridad Infraestructura" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-6 mb-3 text-center text-md-start">
                                    <i><b>Seguridad Inform&aacute;tica</b></i><br />
                                    y de la Informaci&oacute;n
                                </h2>
                                <p className="text-center text-md-start">
                                    Nuestros servicios de ciberseguridad est&aacute;n dise&ntilde;ados
                                    para proteger su negocio de las amenazas digitales en constante
                                    evoluci&oacute;n. Ofrecemos soluciones personalizadas que se adaptan
                                    a las necesidades &uacute;nicas de su empresa, desde la evaluaci&oacute;n
                                    de riesgos hasta la implementaci&oacute;n de medidas de seguridad,
                                    nuestro equipo altamente capacitado est&aacute; listo para ayudarlo a proteger
                                    sus datos confidenciales y asegurarse de que su negocio est&eacute;
                                    siempre protegido.
                                </p>
                                <div className="text-center text-md-start">
                                    <button
                                        className="btn btn-primary mt-4 px-5 rounded-pill"
                                        onMouseDown={event => { this.props.navigate('/security') }}>
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
                            <div className="col-md-5 p-4 pt-0 d-md-none">
                                <img src={factoryImg} className="img-fluid" alt="Seguridad en la nube" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-5 mb-3 text-center text-md-start">
                                    <i><b>F&aacute;brica de Desarrollo</b></i><br />
                                    de Software Seguro
                                </h2>
                                <p className="text-center text-md-start">
                                    En Inside Security creemos que el desarrollo de software seguro es
                                    fundamental para proteger su negocio contra las amenazas digitales.
                                    Nuestro equipo altamente capacitado est&aacute; comprometido con la
                                    creaci&oacute;n de software seguro y de alta calidad que cumpla con
                                    los m&aacute;s altos est&aacute;ndares de seguridad, desde la
                                    planificaci&oacute;n hasta su implementaci&oacute;n.
                                </p>
                                <div className="text-center text-md-start">
                                    <button
                                        className="btn btn-primary mt-4 px-5 rounded-pill"
                                        onMouseDown={event => { this.props.navigate('/factory') }}>
                                        Leer m&aacute;s
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-5 p-4 pt-0 d-none d-md-block">
                                <img src={factoryImg} className="img-fluid" alt="Seguridad en la nube" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 py-4 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-5 p-4 pt-0">
                                <img src={infrastructureImg} className="img-fluid" alt="Seguridad Infraestructura" />
                            </div>
                            <div className="col-md-5">
                                <h2 className="display-6 mb-3 text-center text-md-start">
                                    <b><i>Infraestructura</i></b>,<br />
                                    Redes y Sistemas
                                </h2>
                                <p className="text-center text-md-start">
                                    En Inside Security, nos especializamos en servicios de infraestructura TI
                                    segura para proteger su negocio de las amenazas digitales. Ofrecemos
                                    soluciones personalizadas y de alta calidad que se adaptan a las necesidades
                                    &uacute;nicas de su empresa. Desde la implementaci&oacute;n de pol&iacute;ticas
                                    de seguridad, la formaci&oacute;n de empleados y el an&aacute;lisis de riesgos
                                    de seguridad en su red. Trabajamos incansablemente para mantener su negocio
                                    seguro y protegido, para que pueda concentrarse en lo que realmente importa:
                                    hacer crecer su negocio.
                                </p>
                                <div className="text-center text-md-start">
                                    <button
                                        className="btn btn-primary mt-4 px-5 rounded-pill"
                                        onMouseDown={event => { this.props.navigate('/infrastructure') }}>
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
                            <div className="col-md-10">
                                <h2 className="display-5 mb-3 text-center">
                                    Casos de &eacute;xito
                                </h2>
                                <p className="lead text-center">
                                    Desde el a&ntilde;o 2007 acompa&ntilde;amos a las empresas
                                    en la creaci&oacute;n y desarrollo de su cultura y
                                    procesos de seguridad. Contamos con una &aacute;mplia
                                    experiencia y casos de &eacute;xito demostrables en <b>m&aacute;s de 50 empresas</b>.
                                </p>
                                <div className="row justify-content-md-center selectable-blocks">
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successEntelImg} alt="Entel Chile" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successBancoDeChileImg} alt="Banco de Chile" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successBbvaImg} alt="Banco BBVA" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successBancoRipleyImg} alt="Banco Ripley" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successGrupoSecurityImg} alt="Grupo security" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successBancoPichinchaImg} alt="Banco Pichincha" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successFalabellaImg} alt="Falabella" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successCajaLosAndesImg} alt="Caja los Andes" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successHdiImg} alt="HDI Seguros" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successDpWorldImg} alt="DP World" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successEfeImg} alt="Grupo EFE" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successGrupoCopesaImg} alt="Grupo Copesa" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successCardifImg} alt="Cardif" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successCmpcImg} alt="CMPC" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successConsorcioImg} alt="Consorcio" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successSondaImg} alt="Sonda" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successGtdIntesisImg} alt="GTD Intesis" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={successInacapImg} alt="Inacap" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*
                <div className="py-4 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-10">
                                <h2 className="display-5 mb-3 text-center">
                                    Partners Estrat&eacute;gicos
                                </h2>
                                <p className="lead text-center">
                                    Inside Security cuenta con una &aacute;mplia gama de Partners
                                    para apoyar en las necesidades de nuestros clientes.
                                </p>
                                <div className="row justify-content-md-center selectable-blocks">
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={partnerAppdomeImg} alt="Appdome" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={partnerAquaSecurityImg} alt="Aqua Security" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={partnerAwsImg} alt="Amazon AWS" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={partnerAzureImg} alt="Microsoft Azure" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={partnerCheckmarxImg} alt="Checkmarx" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={partnerEcCouncilImg} alt="Ec-Council" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={partnerExtrahopImg} alt="Extrahop" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={partnerGoogleSuiteImg} alt="Google Suite" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={partnerGuardicoreImg} alt="Guardicore" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={partnerKiuwanImg} alt="Kiuwan" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={partnerKnowbe4Img} alt="Knowbe4" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={partnerOffice365Img} alt="Office 365" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={partnerPaloAltoImg} alt="Palo Alto" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={partnerRapid7Img} alt="Rapid 7" />
                                    </div>
                                    <div className="col-6 col-md-2">
                                        <img className="p-3 m-1 img-fluid border rounded" src={partnerStellarImg} alt="Stellar" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                */}
            </div>
        );
    }
}

export default HomeMainView;
