import React, { useState, useEffect } from 'react'

const EditCompanyForm = props => {
    let {currentCompany, updateCompany, setEditing} = props
    
    const [ company, setCompany ] = useState(currentCompany)

    useEffect(
        () => { setCompany(props.currentCompany) },
        [ props ]
    )
    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

    const handleChange = e => {
        const { name, value } = e.target

        setCompany({ ...company, [name]: value })
    }

    return (
        <form
        onSubmit={e => {
            e.preventDefault()

            updateCompany(company.id, company)
        }}
        >
        <label>Name: </label>
        <input type="text" name="name" value={company.name} onChange={handleChange} />
        <br />
        <label>Address: </label>
        <input type="text" name="street" value={company.street} onChange={handleChange} />
        <br />
        <button>Update company</button> 
        <button onClick={() => setEditing(false)} className="button muted-button">
            Cancel
        </button>
        </form>
    )
}

export default EditCompanyForm