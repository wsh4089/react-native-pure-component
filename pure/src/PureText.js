import React, {
    PureComponent
} from 'react';

import {
    Text
} from 'react-native';

export default class PureText extends PureComponent{
    render() {
        console.log('render PureText');
        return (
            <Text
                {...this.props}
            />
        );
    }
}