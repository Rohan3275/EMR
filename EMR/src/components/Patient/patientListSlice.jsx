import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addPatient, deleteList, getList, updateList } from "./patientListApi"



const initialState = {
    patient: [],
    status: 'idle'
}

export const getListAsynk = createAsyncThunk('patient/getList', async () => {
    const response = await getList();
    return response.data
})

export const deleteAsynk = createAsyncThunk('patient/delete', async (id) => {
    const response = await deleteList(id.toString());
    return id
})

export const updateAsynk = createAsyncThunk('patient/update', async ({ id, value }) => {
    const response = await updateList(id.toString(), value);
    return response.data
})

export const addPatientAsynk = createAsyncThunk('patient/add', async (data) => {
    const response = await addPatient(data);
    return response.data
})

export const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getListAsynk.fulfilled, (state, action) => {
            state.status = 'idle';
            state.patient = action.payload
        }).addCase(addPatientAsynk.fulfilled, (state, action) => {
            state.status = 'idle';
            state.patient.push(action.payload)
        })

            .addCase(deleteAsynk.fulfilled, (state, action) => {
                state.status = "idle";
                state.patient = state.patient.filter(patient => patient.id !== action.payload)
            }).addCase(deleteAsynk.rejected, (state) => {
                state.status = 'idle';

            })
    }
})

export default patientSlice.reducer