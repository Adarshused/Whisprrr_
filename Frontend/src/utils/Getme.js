
export async function fetchCurrentUser() {
 
   try{
     const res =  await fetch(`${process.env.BASE_URL}/api/v1/users/getme`, {
        method : "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", 
       })
       if(!res.ok) 
        throw new Error("Not Authenticated")
       else{
        const data = await res.json() 
        return data
       } 
    }
    catch(err){
      console.log("Their is an error while fetching the user: ",err)
    }
}
