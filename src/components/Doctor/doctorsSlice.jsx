import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addDoctors, deleteDoctorList, getDoctors } from "./doctersApi";



const initialState = {
    doctors: [],
    status: 'idle'
}

export const getdoctorsListAsynk = createAsyncThunk('doctors/getList', async () => {
    const response = await getDoctors();
    return response.data
})

export const deleteDoctorsAsynk = createAsyncThunk('doctors/delete', async (id) => {
    const response = await deleteDoctorList(id.toString());
    return id
})

// export const updateAsynk = createAsyncThunk('patient/update', async ({ id, value }) => {
//     const response = await updateList(id.toString(), value);
//     return response.data
// })

export const addDoctorAsynk = createAsyncThunk('doctors/add', async (data) => {
    const response = await addDoctors(data);
    return response.data
})

export const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getdoctorsListAsynk.fulfilled, (state, action) => {
            state.status = 'idle';
            state.doctors = action.payload
        })
            .addCase(addDoctorAsynk.fulfilled, (state, action) => {
                state.status = 'idle';
                state.doctors.push(action.payload)
            })

            .addCase(deleteDoctorsAsynk.fulfilled, (state, action) => {
                state.status = "idle";
                state.doctors = state.doctors.filter(doctors => doctors.id !== action.payload)
            }).addCase(deleteDoctorsAsynk.rejected, (state) => {
                state.status = 'idle';

            })
    }
})

export default doctorsSlice.reducer