import React from 'react';
import { StatusBar, View, Text  } from 'react-native';
// import { Container, Content as ContentNative,} from 'native-base'

import Header from '../header';
import { colors, fonts, styles } from '../../styles';
import { Icon } from '..';

export const Container = (props) => (
    <View style={[(props.style == undefined)? {flex: 1,} : props.style ]}>

        <StatusBar backgroundColor={colors.primary} />
        {!props.noHeader && <Header {...props} />}

        {props.label &&
        <View style={styles.containerTitleLabel}>  
            <Icon name={props.icon} size={25} style={{color: props.color}} />
            <Text style={styles.textLabel}>{props.label}</Text>
        </View>}

        {props.children}


    </View>
);
