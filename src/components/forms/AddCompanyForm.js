import React, { useState } from 'react'

const AddCompanyForm = (props) => {
    let {addCompany}  = props
    const initialState = { id: null, name: '', username: '' }
    const [company, setCompany] = useState(initialState)

    const handleChange = (e) => {
        const { name, username, value, } = e.target
        setCompany({ ...company, [name]: value, [username]: value })
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            // if (!company.name || !company.username) 
                addCompany(company)
                setCompany(initialState)
          }}>
        <label>Name</label>
        <input type="text" name="name" value={company.name} onChange={handleChange} />
        <label>Username</label>
        <input type="text" name="username" value={company.username} onChange={handleChange}/>
        <button>Add new company</button>
        </form>
    )
}

export default AddCompanyForm