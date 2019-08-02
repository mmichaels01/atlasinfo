import React from 'react';
import Layout from './Layout';
import MapView from './map/MapView';
import SupportView from './support/SupportView';
import PrivacyView from './privacy/PrivacyView';
import CalculatorsView from './tools/ToolsView';
import ContactView from './contact/ContactView';
import DevelopmentView from './development/DevelopmentView';

import { Route } from 'react-router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#074ba6', 
        },
        secondary: {
            main: '#FC6100',
        },
        background: {
            //paper: '#062651'
        }
    },
    typography: {
        useNextVariants: true,
    },
});

export default () => (
    <MuiThemeProvider theme={theme}>
        <Layout>
            <Route exact path='/' component={MapView} />
            <Route path='/map' component={MapView} />
            <Route path='/calculators' component={CalculatorsView} />
            <Route path='/privacy' component={PrivacyView} />
            <Route path='/contact' component={ContactView} />
            <Route path='/support' component={SupportView} />
            <Route path='/development' component={DevelopmentView} />
        </Layout>
    </MuiThemeProvider>
);
