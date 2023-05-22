import React, { Component } from 'react';
import Layout from '../../layout';
import HomeMainView from '../../views/home/main';


class HomeMainController extends Component {
    render() {
        return (
            <Layout
                body={HomeMainView}
                navigate={this.props.navigate} />
        );
    }
}

export default HomeMainController;
