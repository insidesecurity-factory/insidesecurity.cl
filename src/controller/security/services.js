import React, { Component } from 'react';
import Layout from '../../layout';
import SecurityServicesView from '../../views/security/services';


class SecurityServicesController extends Component {
    render() {
        return (
            <Layout
                body={SecurityServicesView}
                navigate={this.props.navigate} />
        );
    }
}

export default SecurityServicesController;
