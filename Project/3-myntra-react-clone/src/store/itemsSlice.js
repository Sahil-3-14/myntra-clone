import {createSlice} from "@reduxjs/toolkit"


const itemsSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        addInitialItems: ((state, action) => {
            // console.log("reducer here" , state, action);
            return action.payload 
            
        })
    }

})

export const itemsActions = itemsSlice.actions;

export default itemsSlice;


