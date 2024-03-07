import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from "@react-native-oh-tpl/react-native-scrollable-tab-view";

export default () => {
    const [tabBarTabIndex, setTabBarTabIndex] = useState(0);

    return (
        <View>
            <Text>initialPage</Text>
            <View style={{ height: 100 }}>
                <Text>prerenderingSiblingsNumber:0</Text>
                <ScrollableTabView prerenderingSiblingsNumber={0}>
                    <View tabLabel="Tab #101"></View>
                    <View tabLabel="Tab #102"></View>
                    <View tabLabel="Tab #103"></View>
                    <View tabLabel="Tab #104"></View>
                    <View tabLabel="Tab #105"></View>
                </ScrollableTabView>
            </View>
            <View style={{ height: 100 }}>
                <Text>prerenderingSiblingsNumber:1</Text>
                <ScrollableTabView prerenderingSiblingsNumber={1}>
                    <View tabLabel="Tab #101"></View>
                    <View tabLabel="Tab #102"></View>
                    <View tabLabel="Tab #103"></View>
                    <View tabLabel="Tab #104"></View>
                    <View tabLabel="Tab #105"></View>
                </ScrollableTabView>
            </View>
        </View>
    );
}