export default function CompanyInfos({data}) {

  const language = data.language;

  const address = () => {
    if (!data.addresses[0].street) return <span className='not-italic'>Country: {data.addresses[0].country_code}</span>;

    return data.addresses[0]?.full_address;
  }

  const currencyFormatter = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });

  function activities () {
    const mains = data.activities.filter(activity => activity.classification === 'MAIN');
    return mains.map((activity, index) => {
      return <p key={index}>{activity.label.fr.label}</p>;
    })
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-1/3 bg-white p-12 shadow-md">
        <h1 className='text-black uppercase font-bold text-2xl sm:text-4xl m-2'>
          {data.company_name} <span className="font-light">{data.juridical_form?.[language]?.short}</span>
        </h1>
        <div className="flex flex-col justify-center text-xs sm:text-sm font-normal p-2 m-1">
          {activities()}
        </div>
        <div className='font-light text-xs sm:text-sm'>
          <p className='text-black italic py-2'>{address()}</p>
          <p className='text-black'>TVA: <span className="font-bold">{data.vat_formatted}</span></p>
          <p>Capital: {currencyFormatter.format(data.financial_meta.capital)}</p>
        </div>
      </div>
    </>
  )
}
