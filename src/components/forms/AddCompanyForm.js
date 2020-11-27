import React, { useState } from 'react'

const AddCompanyForm = (props) => {
    let {addCompany}  = props
    const initialState = { id: null, name: '', street: '' }
    const [company, setCompany] = useState(initialState)

    const handleChange = (e) => {
        const { name, street, value, } = e.target
        setCompany({ ...company, [name]: value, [street]: value })
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            // if (!company.name || !company.street) 
                addCompany(company)
                setCompany(initialState)
          }}>
        <label>Name</label>
        <input type="text" name="name" value={company.name} onChange={handleChange} />
        <label>street</label>
        <input type="text" name="street" value={company.street} onChange={handleChange}/>
        <button>Add new company</button>
        </form>
    )
}

export default AddCompanyForm