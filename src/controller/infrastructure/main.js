import React, { Component } from 'react';
import Layout from '../../layout';
import InfrastructureMainView from '../../views/infrastructure/main';


class InfrastructureMainController extends Component {
    render() {
        return (
            <Layout
                body={InfrastructureMainView}
                navigate={this.props.navigate} />
            );
    }
}

export default InfrastructureMainController;
