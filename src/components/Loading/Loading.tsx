import React from 'react'
import { ActivityIndicator, Modal, View } from 'react-native'
import { ThemeContext } from '../../context/ThemeContext'

export const Loading = ({visible}) => {

    const theme = React.useContext(ThemeContext)

    return(
        <Modal transparent visible ={ visible}>
            <View style={ {flex:1, alignItems:'center', justifyContent:'center', backgroundColor: theme === 'light' ? '#fff' : '#111111'}}>
                <ActivityIndicator
                    size="large"
                    color={theme === 'light' ? '#2d949d' : '#284d6d'}
                    animating={true}
                />
            </View>
        </Modal>
    )
}