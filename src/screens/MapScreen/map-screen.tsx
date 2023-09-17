import React, { useEffect, useRef } from "react";
import { SafeAreaView, Text} from "react-native";
import BottomSheetScreen from "../../components/BottomSheet/BottomSheet";
import BottomSheet from "@gorhom/bottom-sheet";

const MapScreen = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    useEffect(() => {
        bottomSheetRef.current?.present()
    }, [])

    return(
        <SafeAreaView style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text>BottomSheet</Text>
            <BottomSheetScreen bottomSheetRef={bottomSheetRef}/>
        </SafeAreaView>
    )
}

export default MapScreen;