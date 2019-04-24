import PropTypes from 'prop-types';
import React from 'react';
import {requireNativeComponent} from 'react-native';

class MapView extends React.Component {
    render() {
        return <ViewDesign
            str_Value="new"/>;
    }
}

var ViewDesign = requireNativeComponent('TestDemo', MapView);
module.exports = ViewDesign;

// import { requireNativeComponent } from 'react-native';
//
// requireNativeComponent automatically resolves 'RNTMap' to 'RNTMapManager'
// module.exports = requireNativeComponent('TestDemo');