import axios from "axios";

export function getList() {
    return axios.get("http://localhost:3000/Donor")
}

export function deleteList(id) {
    return axios.delete(`http://localhost:3000/Donor/${id}`)
}

export function updateList(id, value) {
    return axios.put(`http://localhost:3000/Donor/${id}`, value);
}

export function addDonor(data)
{
    return axios.post("http://localhost:3000/Donor",data)
}