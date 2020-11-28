import React from 'react'

const Table = (props) => {

    let { companies, deleteCompany, editCompany } = props

    return (
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Street address</th>
            <th>Post address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            { companies.length > 0 ? 
                companies.map(company => (
                <tr key={company.id}>
                    <td>{company.name}</td>
                    <td>{company.street}</td>
                    <td>{company.post}</td>
                    <td>
                    <button onClick={() => editCompany(company)}>Edit</button>
                    <button onClick={() => deleteCompany(company.id)}>Delete</button>
                    </td>
                </tr>
                ))
            :
                <tr>
                    <td colSpan={3}>No companies added</td>
                </tr>
            }

        </tbody>
        </table>
    )
}

export default Table