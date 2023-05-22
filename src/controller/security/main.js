import React, { Component } from 'react';
import Layout from '../../layout';
import SecurityMainView from '../../views/security/main';


class SecurityMainController extends Component {
    render() {
        return (
            <Layout
                body={SecurityMainView}
                navigate={this.props.navigate} />
            );
    }
}

export default SecurityMainController;
