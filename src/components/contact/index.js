import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'material-icons/iconfont/material-icons.css';
import './assets/style.css';

class Contact extends Component {
    render() {

        const { commercial_phone, commercial_email, company_email, schedules } = this.props.contactArrays;

        return (
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
                                    Contamos con presencia en Chile, Per&uacute; y Espa&ntilde;a para
                                    atender tus necesidades a la brevedad.
                                </p>
                                <p>
                                    <b>Horarios de atenci&oacute;n</b>: {schedules ? schedules : ""}
                                </p>
                                <p>
                                    <b>Ventas e informaciones comerciales</b>:<br />

                                    <a className="btn btn-link ps-0" href={`mailto:${commercial_email ? commercial_email : ""}`}>
                                        <span className="app-material-icons align-middle me-2">mail</span>
                                        {commercial_email ? commercial_email : ""}
                                    </a>
                                    
                                    <a className="btn btn-link" href={`tel:${commercial_phone ? commercial_phone : ""}`}>
                                        <span className="app-material-icons align-middle me-2">call</span>
                                        {commercial_phone ? commercial_phone : ""}
                                    </a>
                                </p>
                                <p className="mb-0">
                                    <b>Informaciones generales</b>: {company_email ? company_email : ""}
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
        )
    }
}

export default Contact;
