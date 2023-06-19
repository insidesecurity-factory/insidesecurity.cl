import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'material-icons/iconfont/material-icons.css';
import './assets/style.css';
import logoImg from './assets/logo.png';


class Layout extends Component {
    render() {
        return (
            <div>
                <div className="header-nav-component app-bg-color-3">
                    <nav className="navbar navbar-dark navbar-expand-lg app-bg-color-3 text-light">
                        <div className="container pb-1">
                            <button
                                className="btn btn-link navbar-brand d-flex align-items-center"
                                onMouseDown={event => { this.props.navigate('/') }}>
                                <img src={logoImg} height="35" alt="Logo Inside Security" />
                            </button>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#sectionLayoutNavbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="sectionLayoutNavbarNav">
                                <ul className="navbar-nav pt-4 pb-3 py-md-0">
                                    <li>
                                        <button
                                            className={`btn btn-link nav-link d-flex align-items-center mx-2 ${document.location.pathname.startsWith('/security') ? 'active' : ''}`}
                                            onMouseDown={event => { this.props.navigate('/security') }}>
                                            Ciberseguridad
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={`btn btn-link nav-link d-flex align-items-center mx-2 ${document.location.pathname.startsWith('/factory') ? 'active' : ''}`}
                                            onMouseDown={event => { this.props.navigate('/factory') }}>
                                            F&aacute;brica aplicativa
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={`btn btn-link nav-link d-flex align-items-center mx-2 ${document.location.pathname.startsWith('/infrastructure') ? 'active' : ''}`}
                                            onMouseDown={event => { this.props.navigate('/infrastructure') }}>
                                            Infraestructura
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={`btn btn-link nav-link d-flex align-items-center mx-2 ${document.location.pathname.startsWith('/about') ? 'active' : ''}`}
                                            onMouseDown={event => { this.props.navigate('/about') }}>
                                            &iquest;Qui&eacute;nes somos?
                                        </button>
                                    </li>
                                    <li className="ms-2">
                                        <a className="btn btn-link nav-link d-flex align-items-center" href="tel:%2b56978785289">
                                            <span className="material-icons-round me-2">call</span>
                                            +56 9 7878 5289
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <this.props.body navigate={this.props.navigate} />

                <div className="container mt-5 mb-4">
                    <div className="row justify-content-md-center">
                        <div className="col-md-10 px-4 p-md-2">

                            <div className="row px-2 py-4 p-md-5 border rounded bg-white">
                                <div className="col-md-6">
                                    <h2 className="display-6 mb-3 text-center text-md-start">
                                        Cont&aacute;ctanos
                                    </h2>
                                    <p>
                                        <b>&iquest;Necesitas ayuda con tu proyecto de TI? </b>
                                        &iexcl;No dudes en ponerte en contacto con nosotros!
                                        Nuestro equipo de expertos est&aacute;n listos para ayudarte a
                                        resolver cualquier problema o inquietud que puedas tener. Ya
                                        sea que necesites asistencia t&eacute;cnica, asesoramiento
                                        o simplemente una consulta, estamos aqu&iacute; para ayudarte
                                        a llevar tu empresa al siguiente nivel en cuanto a tecnolog&iacute;a
                                        se refiere.
                                    </p>
                                    <p>
                                        Contamos con presencia en Valpara&iacute;so, Santiago de Chile y
                                        Per&uacute; para atender tus necesidades a la brevedad.
                                    </p>
                                    <p>
                                        <b>Horarios de atenci&oacute;n</b>: Lunes a Viernes de 9:00 am a 18:30 pm
                                        (horario Santiago de Chile), excepto festivos.
                                    </p>
                                    <p>
                                        <b>Ventas e informaciones comerciales</b>:<br />

                                        <a className="btn btn-link ps-0" href="mailto:ventas@insidesecurity.cl">
                                            <span className="app-material-icons align-middle me-2">mail</span>
                                            ventas@insidesecurity.cl
                                        </a>
                                        
                                        <a className="btn btn-link" href="tel:%2b56978785289">
                                            <span className="app-material-icons align-middle me-2">call</span>
                                            +56 9 7878 5289
                                        </a>
                                    </p>
                                    <p className="mb-0">
                                        <b>Informaciones generales</b>: info@insidesecurity.cl
                                    </p>
                                </div>
                                <div className="col-md-6 position-relative d-none d-md-block">
                                    <iframe
                                        className="border rounded-1 p-1 w-100 h-100 mt-4 mt-md-0"
                                        title="Oficina Inside Security"
                                        scrolling="no"
                                        marginHeight="0"
                                        marginWidth="0"
                                        frameBorder="0"
                                        src="https://maps.google.com/maps?width=100%25&amp;height=485&amp;hl=en&amp;q=Guardia%20Vieja%20181%20Of%20506.%20Providencia%20(Inside%20Security)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="text-light pt-2 app-bg-color-3">
                    <div className="container">
                        <div className="py-5">
                            <button
                                className="btn btn-link text-decoration-none p-0"
                                onMouseDown={event => { this.props.navigate('/') }}>
                            <img
                                className="mb-4" src={logoImg}
                                width="250"
                                alt="Logo Inside Security" />
                            </button>
                            <p>
                                <b>Inside Security</b> es una empresa legalmente constituida en Chile, con la
                                misi&oacute;n de ofrecer servicios y soluciones de calidad que prometan
                                <b> disminuir los riesgos asociados con la delincuencia
                                inform&aacute;tica</b> a trav&eacute;s del trabajo &eacute;tico y profesional.
                            </p>
                            <div className="row">
                                <div className="col-md-6">
                                    Copyright &copy; {(new Date()).getFullYear()} Inside Security. Todos los derechos reservados.
                                </div>
                                <div className="col-md-6 text-start text-md-end pt-3 pt-md-0">
                                    <button
                                        className="btn btn-link text-light ps-0"
                                        onMouseDown={event => { this.props.navigate('/about/privacy') }}>
                                        Privacidad
                                    </button>
                                    <button
                                        className="btn btn-link text-light"
                                        onMouseDown={event => { this.props.navigate('/about') }}>
                                        Acerca de nosotros
                                    </button>
                                    <a
                                        className="btn btn-link text-light"
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://www.linkedin.com/company/grupoinside/">
                                        <i className="bi bi-linkedin me-2"></i>
                                        Linkedin
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Layout;
