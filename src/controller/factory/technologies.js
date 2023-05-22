import React, { Component } from 'react';
import Layout from '../../layout';
import FactoryTechnologiesView from '../../views/factory/technologies';


class FactoryTechnologiesController extends Component {
    render() {
        return (
            <Layout
                body={FactoryTechnologiesView}
                navigate={this.props.navigate} />
        );
    }
}

export default FactoryTechnologiesController;
