import {createSlice} from '@reduxjs/toolkit';

// create userSlice with 3 variables: name, email and profiLePhoto and 2 reducers: signIn and SignOut
const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    profilePhoto: '',
  },
  reducers: {
    setSignIn: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.profilePhoto = action.payload.profilePhoto;
    },
    setSignOut: (state) => {
      state.name = '';
      state.email = '';
      state.profilePhoto = '';
    },
  },
});

//export the userSlice, the reducer and the variables

export const {setSignIn, setSignOut} = userSlice.actions;

export const selectName = (state) => state.user.name;
export const selectEmail = (state) => state.user.email;
export const selectProfilePhoto = (state) => state.user.profilePhoto;

export default userSlice.reducer;

