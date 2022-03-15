import {} from 'react-native'
import { 
    responsiveScreenHeight, 
    responsiveScreenWidth, 
    responsiveScreenFontSize
} from 'react-native-responsive-dimensions'

const CONST_HEIGHT_SIZE = 10
const CONST_WIDTH_SIZE = 10

export function heightPercentage(height: number): number {
    const percentage = (height / CONST_HEIGHT_SIZE) * 100;

    return responsiveScreenHeight(percentage)
}

export function widthPercentage(width: number): number {
    const percentage = (width / CONST_WIDTH_SIZE) * 100;

    return responsiveScreenWidth(percentage)
}

export function fontPercentage(size: number): number {
    const percentage = size * 0.135;

    return responsiveScreenFontSize(percentage)
}