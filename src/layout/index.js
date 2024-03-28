import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'material-icons/iconfont/material-icons.css';
import './assets/style.css';
import logoImg from './assets/logo.png';
import Contact from '../components/contact';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contactArrays: {},
        };
    }

    componentDidMount() {
        this.evaluateUrlCondition();
    }

    evaluateUrlCondition() {
        const { pathname } = window.location;
        let newData = {};
        if (pathname.includes(".io")) {
            newData = {
                commercialPhone: '',
                commercialEmail: '',
                companyEmail: '',
                schedules: ''
            };
        } else if (pathname.includes(".es")) {
            newData = {
                commercialPhone: '',
                commercialEmail: '',
                companyEmail: '',
                schedules: ''
            };
        }
        else {
            newData = {
                commercialPhone: '+56 9 7878 5289',
                commercialEmail: 'ventas@insidesecurity.cl',
                companyEmail: 'info@insidesecurity.cl',
                schedules: 'Lunes a Viernes de 9:00 am a 18:30 pm (horario Santiago de Chile), excepto festivos.'
            };
        }
        this.setState({ contactArrays: newData });
    }
    
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

                <Contact contactArrays={this.state.contactArrays} />

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
