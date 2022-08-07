
import React, { useEffect, useState } from "react"
import request from "../utils/request"

const DEFAULT_DATA = {
    propertiesList: [],
    propertiesByCategory: [],
    saleAgents: [],
    blogsList: []
}
const homeDataContext = React.createContext(DEFAULT_DATA)

const HomeDataContextProvider = ({
    children }) => {

    const [data, setData] = useState(DEFAULT_DATA)

    useEffect(() => {
        request.get("/properties/activeProperties").then((res) => {
            console.log("res data is", res)
            const { activeProperties, propertiesByCategory, saleAgents, approvedBlogsList } = res.data?.data
            setData({
                propertiesList: activeProperties?.data,
                propertiesByCategory,
                saleAgents,
                blogsList: approvedBlogsList
            })
        })
    }, [])



    return <homeDataContext.Provider value={data}>
        {children}
    </homeDataContext.Provider>

}

export {
    HomeDataContextProvider, homeDataContext
}