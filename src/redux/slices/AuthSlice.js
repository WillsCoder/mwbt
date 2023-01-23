import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./Message";
import { getFirestore } from "firebase/firestore";
import { app } from "../../firebase/Firebase";
import { signIn, signUp } from "../../firebase/FirebaseService";
import { toast } from "react-toastify";

// const user = JSON.parse(localStorage.getItem("user"));
export const db = getFirestore(app);

const initialState = {
    loading: false,
    isLoggrdIn: false,
    userInfo: [],
    userToken: null,
    error: null,
    success: false,
}
export const register = createAsyncThunk(
    "/auth/register",
    async ( values, thunkAPI ) => {
        try {
                await signUp(values)
                // thunkAPI.dispatch(setMessage(response.data));
                toast.success("Registration Successful")
                
        } catch (error) {
                const message =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    thunkAPI.dispatch(setMessage(message));
                    toast.error(message)
                    return thunkAPI.rejectWithValue();
        }
    });
    export const login = createAsyncThunk(
        "/auth/login",
        async ( values, thunkAPI ) => {
            try {
                   const response = await signIn(values)
                   const message =
                            (response &&
                               response.data &&
                               response.data.message)
                    // thunkAPI.dispatch(setMessage(response.data));
                    toast.success(message)
                    return response.user;
                    
            } catch (error) {
                    const message =
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString();
                        thunkAPI.dispatch(setMessage(message));
                        toast.error(message)
                        return thunkAPI.rejectWithValue();
            }
        });
const authSlice = createSlice (
    {
        name: 'auth',
        initialState,
        reducers: {},
        extraReducers: {
            [register.pending]: (state, action) => {
                state.loading = true;
                state.error = null
            },
            [register.fulfilled]: (state, action) => {
                state.loading = false;
                state.success = true
            },
            [register.rejected]: (state, action) => {
                state.loading = false;
            },
            [login.fulfilled]: (state, action) => {
                state.isLoggrdIn = true;
                state.userInfo = action.payload
                state.userToken = action.payload.stsTokenManager.accessToken
            },
        },
    }
)

export default authSlice.reducer