import React from "react";

const TableProduct = () => {
    let arr = [
        {nama: 'Mickey', pekerjaan: 'Developer'},
        {nama: 'Minnie', pekerjaan: 'House Wife'}
    ]

    const renderArr = () => {
        return (
            arr.map((val,i) => (
                <tr>
                    <td>{i+1}</td>
                    <td>{val.nama}</td>
                    <td>{val.pekerjaan}</td>
                </tr>))
          )
    }
    return (
        <div>
            <table className="table-bordered" align="center">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Pekerjaan</th>
                    </tr>
                </thead>
                <tbody>
                    {renderArr()}
                </tbody>
            </table>
        </div>
    )
}

export default TableProduct;