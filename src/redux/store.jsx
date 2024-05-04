import {configureStore} from '@reduxjs/toolkit'
import Cartslice from './Cartslice'
export const Store = configureStore({
    reducer:{
        Cart : Cartslice
    },
});