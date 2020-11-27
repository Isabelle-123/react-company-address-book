import React from 'react'

const Table = (props) => {

    let { companies, deleteCompany, editCompany } = props

    return (
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            { companies.length > 0 ? 
                companies.map(company => (
                <tr key={company.id}>
                    <td>{company.name}</td>
                    <td>{company.street}</td>
                    <td>
                    <button className="button muted-button" onClick={() => editCompany(company)}>Edit</button>
                    <button className="button muted-button" onClick={() => deleteCompany(company.id)}>Delete</button>
                    </td>
                </tr>
                ))
            :
                <tr>
                    <td colSpan={3}>No companies</td>
                </tr>
            }

        </tbody>
        </table>
    )
}

export default Table