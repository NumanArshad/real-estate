
import React, { useEffect, useState } from "react"
import request from "../utils/request"
import blogs from "../jsx/components/noDataFallBackResponse/blogs.json"

import SaleAgentsFallBack from "../jsx/components/noDataFallBackResponse/sale-agents.json"

const DEFAULT_DATA = {
    propertiesList: { data: null, total: 0 },
    propertiesByCategory: null,
    saleAgents: null,
    blogsList: null,
    setPaginationValue: null
}
const homeDataContext = React.createContext(DEFAULT_DATA)

const HomeDataContextProvider = ({
    children }) => {

    const { propertiesList: DEFAULT_PROPERTIES_LIST, ...REST_DEFAULT_DATA } = DEFAULT_DATA

    const [data, setData] = useState(REST_DEFAULT_DATA)

    const [propertiesList, setPropertiesList] = useState(DEFAULT_PROPERTIES_LIST)

    const [paginationValue, setPaginationValue] = useState({ page: 1 })

    useEffect(() => {

        request.get(`/properties/activeProperties?page=${paginationValue.page}`).then((res) => {
            console.log("res data is", res)
            const { activeProperties, propertiesByCategory, saleAgents, approvedBlogsList } = res.data?.data
            setPropertiesList(prev => ({ ...activeProperties, data: [...(paginationValue.page > 1 ? prev?.data : []), ...activeProperties?.data] }))
            if (paginationValue.page === 1) {
                setData({
                    propertiesByCategory,
                    saleAgents: saleAgents, //saleAgents?.length ? saleAgents : SaleAgentsFallBack,
                    blogsList: approvedBlogsList //approvedBlogsList?.length ? approvedBlogsList : blogs
                })
            }
        })
    }, [paginationValue])

    console.log({ data })

    return <homeDataContext.Provider value={{ setPaginationValue, propertiesList, ...data }}>
        {children}
    </homeDataContext.Provider>

}

export {
    HomeDataContextProvider, homeDataContext
}