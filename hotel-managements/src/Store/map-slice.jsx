import { createSlice } from "@reduxjs/toolkit";

const initialLocationState = {
  values: {
    mobilenumber:"",
    toDate: "",
    roomname:"",
  },
  RoomName:{
    roomname:""
  }

};

const mapSlice = createSlice({
  name: "location",
  initialState: initialLocationState,
  reducers: {
    newValues(state, action) {
      state.values = action.payload;
    },
    setRoomName(state,action){
      state.RoomName = action.payload;
    }
   
  },
});

export const mapAction = mapSlice.actions;

export default mapSlice.reducer;
