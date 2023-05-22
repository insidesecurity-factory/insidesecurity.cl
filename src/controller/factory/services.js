import React, { Component } from 'react';
import Layout from '../../layout';
import FactoryServicesView from '../../views/factory/services';


class FactoryServicesController extends Component {
    render() {
        return (
            <Layout
                body={FactoryServicesView}
                navigate={this.props.navigate} />
        );
    }
}

export default FactoryServicesController;
