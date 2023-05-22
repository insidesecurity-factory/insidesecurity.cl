import React, { Component } from 'react';
import Layout from '../../layout';
import FactoryMainView from '../../views/factory/main';


class FactoryMainController extends Component {
    render() {
        return (
            <Layout
                body={FactoryMainView}
                navigate={this.props.navigate} />
            );
    }
}

export default FactoryMainController;
