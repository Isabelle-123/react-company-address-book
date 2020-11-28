import React, { useState } from 'react'

const AddCompanyForm = (props) => {
    let {addCompany}  = props
    const initialState = { id: null, name: '', street: '', post: '' }
    const [company, setCompany] = useState(initialState)

    const handleChange = (e) => {
        const { name, value, } = e.target
        setCompany({ ...company, [name]: value })
    }

    return (
       
        <form 
        onSubmit={(e) => {
            e.preventDefault()
                addCompany(company)
                setCompany(initialState)
            }}
        > 
            <input type="text" name="name" placeholder='Company name' required value={company.name} onChange={handleChange} />
            <br />           
            <input type="text" name="street" placeholder='Street 123' required value={company.street} onChange={handleChange}/>
            <br /> 
            <input type="text" name="post" placeholder='12345 City' required value={company.post} onChange={handleChange}/>
            <br /> 
            <button>Add new company</button>
        </form>
    )
}

export default AddCompanyForm