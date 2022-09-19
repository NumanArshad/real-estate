import { CircularProgress } from "@mui/material"
import React from "react"

//data null show loader, data length 0 no data else children
const NoDataLoaderWrapper = ({ data, children }) => {
    console.log("no data", { data })
    if (!Array.isArray(data)) return <div className="d-flex justify-content-center  align-items-center">
        Loading...  <CircularProgress style={{ "color": "red", marginLeft: "5px" }} /></div>
    return <>{data?.length ? children : <div className="text-center">No Data</div>}</>
}


export default NoDataLoaderWrapper