import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async function () {
        const { data: usersData } = await axios.get("https://jsonplaceholder.typicode.com/users")
        // const { data: dataPosts } = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=500")
        console.log(usersData);

        const data = usersData.map(user => ({
            id: user.id.toString(),
            name: user.name,
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.address.city.toLowerCase(),
            bio: user.company.catchPhrase,
            followers: Math.round(Math.random() * 200 + 300),
            following: Math.round(Math.random() * 200 + 300),
       
        }))
        console.log("kuwqduuguihqw");
        return data
    }
)
