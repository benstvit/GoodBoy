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
  const tva = payload.userInput;

  const {data, status} = await axios({
    ...getConfig,
    url: `${getConfig.url}?number=${tva}`,
  }).catch((error) => {
    if (error.response) {
      const status = error.response.status;
      console.log(error.response.data);
      console.log(`status: ${status}`);
      console.log(error.response.headers);

      if (status === 400) {
        return {
          data: { errorMessage: error.message },
          status: status
        }
      } else {
        return {
          data: { errorMessage: error.message },
          status: status
        }
      }
    }
    console.log(error.config);
  });

  return {data, status};
}
