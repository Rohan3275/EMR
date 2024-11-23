import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDonor, deleteList, getList, updateList } from "./BloodDonorListApi";
import { notify } from "../ToastMessage/message";

const initialState = {
    donor: [],
    status: "idle",
};

export const getListAsynk = createAsyncThunk("donor/getList", async () => {
    const response = await getList();
    if (!response || !response.data) {
        throw new Error("Failed to fetch donors");
    }
    return response.data;
});

export const deleteAsynk = createAsyncThunk("donor/delete", async (id) => {
    await deleteList(id.toString());
    return id;
});

export const updateAsynk = createAsyncThunk("donor/update", async ({ id, value }) => {
    const response = await updateList(id.toString(), value);
    return response.data;
});

export const addPatientAsynk = createAsyncThunk("donor/add", async (data) => {
    const response = await addDonor(data);
    return response.data;
});

export const donorSlice = createSlice({
    name: "donor",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getListAsynk.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getListAsynk.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.donor = action.payload;
            })
            .addCase(getListAsynk.rejected, (state) => {
                state.status = "failed";
                notify("Failed to fetch donors");
            })
            .addCase(addPatientAsynk.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.donor = [...state.donor, action.payload];
            })
            .addCase(addPatientAsynk.rejected, (state) => {
                state.status = "failed";
                notify("Failed to add donor");
            })
            .addCase(deleteAsynk.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.donor = state.donor.filter((donor) => donor.id !== action.payload);
            })
            .addCase(deleteAsynk.rejected, (state) => {
                state.status = "failed";
                notify("Failed to delete donor");
            })
            .addCase(updateAsynk.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.donor = state.donor.map((donor) =>
                    donor.id === action.payload.id ? action.payload : donor
                );
            })
            .addCase(updateAsynk.rejected, (state) => {
                state.status = "failed";
                notify("Failed to update donor");
            })
            .addDefaultCase((state) => {
                state.status = "idle";
            });
    },
});

export default donorSlice.reducer;
