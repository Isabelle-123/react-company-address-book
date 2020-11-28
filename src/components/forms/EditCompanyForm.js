import React, { useState, useEffect } from 'react'

const EditCompanyForm = props => {
    let {currentCompany, updateCompany, setEditing} = props
    
    const [ company, setCompany ] = useState(currentCompany)

    useEffect(
        () => { setCompany(props.currentCompany) },
        [ props ]
    )

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
        <input type="text" name="name" value={company.name} onChange={handleChange} />
        <br />
        <input type="text" name="street" value={company.street} onChange={handleChange} />
        <br />
        <input type="text" name="post" value={company.post} onChange={handleChange} />
        <br />
        <button>Update company</button> 
        <button onClick={() => setEditing(false)}>
            Cancel
        </button>
        </form>
    )
}

export default EditCompanyForm