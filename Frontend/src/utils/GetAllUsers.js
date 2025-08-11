import React from "react";


async function GetAllFaculty () {
      
    try {
    const res = await fetch("http://localhost:8000/api/v1/users/getAllFaculty", {
         method : "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", 
    })

    if(!res.ok) {
        const err = await res.json()
        throw new Error(err.message || "Error while fetching All users");
    }
    else {
        
        const data = await res.json();
        // console.log("here we goo",data)
        return data
    }
    }
    catch (err) {
           console.log("Their is an error while fetching the user: ",err.message)

    }
}

export {GetAllFaculty}