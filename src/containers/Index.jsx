import Banner from '../components/Banner'
import CompanyInfos from '../components/CompanyInfos'
import Form from '../components/Form'
import {getAPI} from '../api/API'
import {useState} from 'react'

export default function Index() {

  const [companyState, setCompanyState] = useState({})

  async function fetchCompany(payload) {
    await getAPI(payload).then(results => setCompanyState(results));
  }

    return (
      <>
        <div className='bg-indigo-500 h-full'>
          <Banner />
          {companyState.data && <CompanyInfos data={companyState.data.company} />}
          <Form submitTva={payload => fetchCompany(payload)} />
        </div>
      </>
    )
  }
