import React, {
    PureComponent
} from 'react';

import {
    ListView
} from 'react-native';

export default class PureListView extends PureComponent {
    render() {
        console.log('render PureListView');
        return (
            <ListView
                {...this.props}
            />
        );
    }
}