import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from "react-native-svg"

const HearthIcon = ({width,height}: SvgProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 33 32" fill="none">
            <G clip-path="url(#clip0_1337_18022)">
                <Path d="M23.8334 2.55566C22.332 2.57902 20.8634 2.99813 19.5758 3.77069C18.2882 4.54325 17.2272 5.64188 16.5001 6.95566C15.7729 5.64188 14.712 4.54325 13.4244 3.77069C12.1368 2.99813 10.6682 2.57902 9.16676 2.55566C6.77335 2.65965 4.51838 3.70667 2.89448 5.46797C1.27059 7.22927 0.409773 9.56169 0.500107 11.9556C0.500107 18.0183 6.88143 24.6396 12.2334 29.129C13.4284 30.1331 14.9392 30.6837 16.5001 30.6837C18.0609 30.6837 19.5718 30.1331 20.7667 29.129C26.1187 24.6396 32.5001 18.0183 32.5001 11.9556C32.5904 9.56169 31.7296 7.22927 30.1057 5.46797C28.4818 3.70667 26.2268 2.65965 23.8334 2.55566Z" fill="red" />
            </G>
            <Defs>
                <ClipPath id="clip0_1337_18022">
                    <Rect width="32" height="32" fill="white" transform="translate(0.5)" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default HearthIcon;