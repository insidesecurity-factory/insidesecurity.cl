import React, { Component } from 'react';
import Layout from '../../layout';
import InfrastructureServicesView from '../../views/infrastructure/services';


class InfrastructureServicesController extends Component {
    render() {
        return (
            <Layout
                body={ InfrastructureServicesView }
                navigate={this.props.navigate} />
        );
    }
}

export default InfrastructureServicesController;
