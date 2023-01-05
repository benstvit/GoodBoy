import Banner from '../components/Banner'
import CompanyInfos from '../components/CompanyInfos'
import ErrorDisplay from '../components/ErrorDisplay'
import Form from '../components/Form'
import {getAPI} from '../api/API'
import {useState} from 'react'

export default function Index() {

  const [companyState, setCompanyState] = useState({})

  async function fetchCompany(payload) {
    const results = await getAPI(payload);
    setCompanyState(results);
  }

    return (
      <>
        <div className='bg-indigo-500 h-full'>
          <Banner />
          {companyState.data?.company && <CompanyInfos data={companyState.data.company} />}
          {companyState.data?.errorMessage && <ErrorDisplay error={companyState} />}
          <Form submitTva={payload => fetchCompany(payload)} />
        </div>
      </>
    )
  }
