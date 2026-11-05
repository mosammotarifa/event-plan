 export const achievenmentsDatas =async()=>{
    const res = await fetch("http://localhost:5000/achievements")
    if(!res.ok){
        throw new Error("faild to fetched the achievenments data")
    }
    const data = await res.json()
    return data;
}
 export const eventsDatas=async()=>{
    const res = await fetch("http://localhost:5000/events")
    if(!res.ok){
        throw new Error("failed to fetched data form the enents.")
    }
    const data = await res.json()
    return data;
}