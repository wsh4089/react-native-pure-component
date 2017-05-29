import React, {
    PureComponent
} from 'react';

import {
    ScrollView
} from 'react-native';

export default class PureScrollView extends PureComponent{
    render() {
        console.log('render PureScrollView');
        return (
            <ScrollView
                {...this.props}
            />
        );
    }
}