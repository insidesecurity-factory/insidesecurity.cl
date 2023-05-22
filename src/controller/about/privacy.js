import React, { Component } from 'react';
import Layout from '../../layout';
import AboutPrivacyView from '../../views/about/privacy';


class AboutPrivacyController extends Component {
    render() {
        return (
            <Layout
                body={AboutPrivacyView}
                navigate={this.props.navigate} />
        );
    }
}

export default AboutPrivacyController;
