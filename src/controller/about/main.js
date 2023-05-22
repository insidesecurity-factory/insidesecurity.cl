import React, { Component } from 'react';
import Layout from '../../layout';
import AboutMainView from '../../views/about/main';


class AboutMainController extends Component {
    render() {
        return (
            <Layout
                body={AboutMainView}
                navigate={this.props.navigate} />
            );
    }
}

export default AboutMainController;
