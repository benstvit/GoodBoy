import axios from 'axios'

const getConfig = {
  url: "https://04ibs0zhna.execute-api.eu-central-1.amazonaws.com/staging/company",
  headers: {
        'Authorization': "Basic aW5zdXJnYXRlOmluc3VyZ2F0ZQ==",
        'Content-Type': 'application/json'
        },
  method: 'get',
}

export const getAPI = async (payload) =>{
  const {data, status} = await axios({
    ...getConfig,
    url: `${getConfig.url}?number=${payload.userInput}`,
  }).catch((error) => {
    console.log(error.message);
    console.log(error.response.status)
  });

  return {data, status}
}
