import React from "react"
import { useParams } from "react-router"

const withRouter=(Wdc) => props => {
    const params=useParams();
    return (
        <Wdc {...props} params={params} />
    )


}
export default withRouter;