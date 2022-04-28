var axios = require('axios');



async function loadGare(){
  try{
    const response = await axios.get("https://api.wedosport.net/rest/v2_test/gare?");
    return response.data;
  }catch(e){
    console.log(e);
    return;
  }
}

module.exports = loadGare;