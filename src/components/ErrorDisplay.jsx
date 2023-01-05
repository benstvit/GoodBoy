export default function ErrorDisplay({error}) {

  const message = () => {
   if (error.status === 400) return (
      <div className='flex flex-col justify-center items-center'>
        <h2>We are sorry, we could not find any matching company in our database.</h2>
      </div>
   )

   return (
    <div className='flex flex-col justify-center items-center'>
      <h2>Something went wrong!</h2>
      <h2>We are working on the matter. Please try again later</h2>
    </div>
   )
  }

  return (
    <>
      <div className="flex justify-center items-center h-1/3 bg-white p-12 shadow-md">
        {message()}
      </div>
    </>
  )
}
