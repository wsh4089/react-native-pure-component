import React, {
    PureComponent
} from 'react';

import {
    View
} from 'react-native';

export default class PureView extends PureComponent{
    render() {
        console.log('render PureView');

        return (
            <View
                {...this.props}
            />
        );
    }
}