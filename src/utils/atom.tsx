import AsyncStorage from '@react-native-async-storage/async-storage'
import { atom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

const storage = createJSONStorage(() => AsyncStorage)

export const snapIndexAtom = atomWithStorage('snapIndexAtom', {}, storage)
