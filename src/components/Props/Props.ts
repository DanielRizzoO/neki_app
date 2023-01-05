import { TouchableOpacityProps } from "react-native"

export interface cardProps extends TouchableOpacityProps {
    title: string,
    type: string,
    value: number
}