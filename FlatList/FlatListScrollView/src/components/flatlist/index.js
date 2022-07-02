import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import style from './style'

const FlatListComponent = () => {

    const data = [
        {
            title: 'Primero Item da lista',
            id: "123132-123132-456"
        },
        {
            title: 'Segundo Item da lista',
            id: "89877-456564-123"
        },
        {
            title: "Terceiro item da lista",
            id: "45665-45645-789"
        },
        {
            title: "Terceiro item da lista",
            id: "45665333-45645-789"
        }
    ]

    const Item = ({ title }) => (
        <View>
            <Text>{title}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <View style={style.containerBox}>
            <View style={style.containerScroll}>
                <ScrollView>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </ScrollView>
            </View>

            <View style={style.containerList} >
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default FlatListComponent