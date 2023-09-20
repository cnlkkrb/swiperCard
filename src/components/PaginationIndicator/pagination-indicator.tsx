import React from "react";
import { Animated } from "react-native";

type IndicatorProps = {
    currentIndex: number,
    dotAnimation: any,
    cards: any
}

const PaginationIndicator = ({ currentIndex, dotAnimation, cards }: IndicatorProps) => {
    return cards.map((_:number, index: number) => (
        <Animated.View
            key={index}
            style={{
                flex:1,
                height: 10,
                borderRadius: 5,
                backgroundColor: index === currentIndex ? '#33BCA3' : '#ccc',
                margin: 5,
                transform: [
                    {
                        scale: dotAnimation.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [1, 1, 1],
                            extrapolate: 'clamp',
                        }),
                    },
                ],
            }}
        />
    ));
}
export default PaginationIndicator;