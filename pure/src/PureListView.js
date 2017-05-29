import React, {
    PureComponent
} from 'react';

import {
    ListView
} from 'react-native';

export default class PureListView extends PureComponent{
    render() {
        return (
            <ListView
                {...this.props}
            />
        );
    }
}