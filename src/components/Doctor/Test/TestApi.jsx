
import axios from "axios";

export function getTestList() {
    return axios.get("http://localhost:3000/appointment")
}