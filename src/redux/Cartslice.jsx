import {createSlice} from '@reduxjs/toolkit'

const Cartslice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers : {
        additem : (state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {additem} = Cartslice.actions

export default Cartslice.reducer