import * as React from 'react';

import { View, Text } from 'react-native';

const ListPost = ({
    post
}) => {
    const {title, category} = post;
    return (   
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default ListPost