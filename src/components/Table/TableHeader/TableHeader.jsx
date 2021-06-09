import "./TableHeader.css"

const TableHeader = () => {
    return (
        <table className="tableHeader" cellSpacing="0">
            <thead>
                <tr>
                    <th width="79">№</th>
                    <th align="left" className="paddingAndBorder" width="65%">Country</th>
                    <th align="left" className="paddingAndBorder">Total confirmed</th>
                </tr>
            </thead>
        </table>
    )
}

export default TableHeader;