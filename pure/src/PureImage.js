import React, {
    PureComponent
} from 'react';

import {
    Image
} from 'react-native';

export default class PureImage extends PureComponent {
    render() {
        console.log('render PureImage');
        
        return (
            <Image
                {...this.props}
            />
        );
    }
}