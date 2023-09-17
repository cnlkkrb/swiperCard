import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Text, View } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { useAtom } from 'jotai';
import { snapIndexAtom } from '../../utils/atom';


const BottomSheetScreen = ({bottomSheetRef}) => {
    const snapPoints = useMemo(() => ['20%', '20%', '90%'], []);
    const [snapIndex, setSnapIndex] = useAtom(snapIndexAtom)

       const handleChange = useCallback(index => {
            setSnapIndex(index)
        }, [])

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        onChange={handleChange}
        backdropComponent={(props: any) => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            pressBehavior={'collapse'}
          />
        )}
        style={{ marginHorizontal: 16 }}
        backgroundStyle={{ backgroundColor: 'white' }}>
        <View>
            <Text style={{textAlign: 'center'}}>Bottom Sheet</Text>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default BottomSheetScreen;

