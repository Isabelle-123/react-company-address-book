import React, { useState } from 'react'
import Table from './components/Table'
import AddCompanyForm from './components/forms/AddCompanyForm'
import EditCompanyForm from './components/forms/EditCompanyForm'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const companyData = [
    { id: 1, name: 'MyCompany', street: 'Parkv 15', post: '12345 Stockholm'},
    { id: 2, name: 'AnotherCompany', street: 'Parkv 15', post: '12345 Stockholm'},
    { id: 3, name: 'OneMoreCompany', street: 'Parkv 15', post: '12345 Stockholm'},
  ]

  const initialFormState = { id: null, name: '', street: '', post: '' }

  const [companies, setCompanies] = useState(companyData)
  const [editing, setEditing] = useState(false)
  const [currentCompany, setCurrentCompany] = useState(initialFormState)

  
  const addCompany = (company) => {
    company.id = uuidv4()
    setCompanies([...companies, company])
  }

  const deleteCompany = (id) => {
    setCompanies(companies.filter(company => company.id !== id))
  }

  const editCompany = (company) => {
    setEditing(true)
    setCurrentCompany({ id: company.id, name: company.name, street: company.street, post: company.post })
  }

  const updateCompany = (id, updatedCompany) => {
    setEditing(false)
    setCompanies(companies.map((company) => (company.id === id ? updatedCompany : company)))
  }

  return (
    <div className="container">
      <h1>Company address book</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? 
            <div>
              <h2>Edit company</h2>
              <EditCompanyForm
                editing={editing}
                setEditing={setEditing}
                currentCompany={currentCompany}
                updateCompany={updateCompany}
              />
            </div>
          :
            <div>
              <h2>Add company</h2>
              <AddCompanyForm addCompany={addCompany} />
            </div>
          }
        </div>
        <div className="flex-large">
          <h2>Company addresses</h2>
          <Table companies={companies} deleteCompany={deleteCompany} editCompany={editCompany} />
        </div>
      </div>
    </div>
  )
}

export default App