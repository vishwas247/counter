import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice ({
    name:'count',
    initialState:{
        currentCount:0
    },
    reducers:{
        increaseCount:(state,action) => {
            console.log('state.currentCount'+state.currentCount)
            state.currentCount += 1
        },

        decreaseCount:(state,action) => {
            state.currentCount -= 1
        }
    }
})

export default slice.reducer
