import React, { Component } from 'react';
import HomeMainController from './controller/home/main';
import SecurityMainController from './controller/security/main';
import FactoryMainController from './controller/factory/main';
import FactoryServicesController from './controller/factory/services';
import FactoryTechnologiesController from './controller/factory/technologies';
import InfrastructureMainController from './controller/infrastructure/main';
import AboutMainController from './controller/about/main';
import AboutPrivacyController from './controller/about/privacy';


class App extends Component {

    constructor(props) {
        super(props);

        this.routes = [
            {
                path: /^\/$/i,
                controller: HomeMainController
            },
            {
                path: /^\/security[/]*$/,
                controller: SecurityMainController
            },
            {
                path: /^\/factory[/]*$/,
                controller: FactoryMainController
            },
            {
                path: /^\/factory\/services[/]*$/,
                controller: FactoryServicesController
            },
            {
                path: /^\/factory\/technologies[/]*$/,
                controller: FactoryTechnologiesController
            },
            {
                path: /^\/infrastructure[/]*$/,
                controller: InfrastructureMainController
            },
            {
                path: /^\/about[/]*$/,
                controller: AboutMainController
            },
            {
                path: /^\/about\/privacy[/]*$/,
                controller: AboutPrivacyController
            }
        ];

        this.state = {
            component: HomeMainController
        }
    }

    componentDidMount() {
        // When navigate to back
        window.addEventListener('popstate', (event) => {
            this.navigate(window.location.pathname);
        });

        // When load first time
        this.navigate(window.location.pathname);
    }

    navigate(path) {
        // Move to custom path
        window.history.pushState({ }, '', path);

        // Find route
        const route = this.routes.find(route => path.match(route.path));

        // Change component
        if(!route)
            this.setState({ component: HomeMainController });
        else
            this.setState({ component: route.controller });

        // Scroll to top
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }

    render() {
        return (
            <this.state.component navigate={ path => this.navigate(path) } />
        );
    }
}

export default App;
