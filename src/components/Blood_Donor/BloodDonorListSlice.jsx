import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addDonor, deleteList, getList, updateList } from "./BloodDonorListApi"
import { notify } from "../ToastMessage/message";



const initialState = {
    donor: [],
    status: 'idle'
}

export const getListAsynk = createAsyncThunk('donor/getList', async () => {
    const response = await getList();
    return response.data
})

export const deleteAsynk = createAsyncThunk('donor/delete', async (id) => {
    const response = await deleteList(id.toString());
    return id
})

export const updateAsynk = createAsyncThunk('donor/update', async ({ id, value }) => {
    const response = await updateList(id.toString(), value);
    return response.data
})

export const addPatientAsynk = createAsyncThunk('donor/add', async (data) => {
    const response = await addDonor(data);
    return response.data
})

export const donorSlice = createSlice({
    name: 'donor',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getListAsynk.fulfilled, (state, action) => {
            state.status = 'idle';
            state.donor = action.payload
        }).addCase(addPatientAsynk.fulfilled, (state, action) => {
            state.status = 'idle';
            state.donor.push(action.payload)
        })

            .addCase(deleteAsynk.fulfilled, (state, action) => {
                state.status = "idle";
                state.donor = state.donor.filter(donor => donor.id !== action.payload)
            }).addCase(deleteAsynk.rejected, (state) => {
                state.status = 'idle';
                

            })
    }
})

export default donorSlice.reducer