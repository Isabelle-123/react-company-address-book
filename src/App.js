import React, { useState } from 'react'
import Table from './components/Table'
import AddCompanyForm from './components/forms/AddCompanyForm'
import EditCompanyForm from './components/forms/EditCompanyForm'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const companyData = [
    { id: 1, name: 'Tromb1', street: 'Parkv 15' },
    { id: 2, name: 'Tromb2', street: 'Parkv 15' },
    { id: 3, name: 'Tromb3', street: 'Parkv 15' },
  ]

  const initialFormState = { id: null, name: '', street: '' }

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
    setCurrentCompany({ id: company.id, name: company.name, street: company.street })
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
          <h2>View company</h2>
          <Table companies={companies} deleteCompany={deleteCompany} editCompany={editCompany}/>
        </div>
      </div>
    </div>
  )
}

export default App