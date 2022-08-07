exports.paginationProps = (req) => {
    let { limit, page } = req?.query
    limit = limit || 10;
    const skip = ((page || 1) - 1) * limit;
    return { limit, skip }
}

