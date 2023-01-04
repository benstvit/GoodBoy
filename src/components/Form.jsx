import {useState} from 'react'

export default function SelectName({submitTva}) {
  const state = {
    userInput: 'BE',
    errorMessage: false
  }

  const [formState, setFormState] = useState(state)

  function setTva(event) {
    setFormState({userInput: ''});
    const newState = {...formState, userInput: event.target.value };
    setFormState(newState);
  }

  function submitResults(event) {
    event.preventDefault();
    const regex = /BE\d{10}/;
    if (!regex.test(formState.userInput)) return setFormState({...formState, errorMessage: true });

    setFormState({...formState, errorMessage: false })
    submitTva(formState);
  }

  return (
    <>
      <form
        className="flex flex-col justify-center items-center h-1/3 bg-gray-200 p-10 shadow-lg"
        onSubmit={submitResults}
        >
        <label className="block text-md sm:text-xl font-serif text-gray-900 dark:text-white mb-4">
          Search for a company by TVA number :
          {formState.errorMessage && <p className='text-red-500 text-sm'>Please insert a valid TVA number (BE + 10 numbers)</p>}
          <input
            type="text"
            value={formState.userInput}
            className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent  text-sm text-center font-sans font-bold rounded-sm block w-full p-2.5 my-6"
            placeholder='Insert TVA Number'
            onChange={setTva}
          />
        </label>
        <input
          className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 border-b-2 border-indigo-600 cursor-pointer hover:border-indigo-700 rounded-md"
          type="submit"
          value="Show Company Infos"
        />
      </form>
    </>

  )
}
