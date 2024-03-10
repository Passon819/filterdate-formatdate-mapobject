const inputData = [
    {
      "Basic ID": "@035",
      "Corporate ID": "994001000000",
      "Corporate ID_1": "a",
      "Display Name": "aa",
      "Email": "e",
      "Name": "c",
      "Tel": "xxx"
    },
    {
      "Basic ID": "@358",
      "Corporate ID": "125556000000",
      "Corporate ID_1": "b",
      "Display Name": "bb",
      "Email": "f",
      "Name": "d",
      "Tel": "xxXXXX"
    }
  ];
  
  const outputData = inputData.map(item => ({
    basic_id: item["Basic ID"],
    corporate_id: item["Corporate ID"],
    corporate_id_1: item["Corporate ID_1"],
    display_name: item["Display Name"],
    email: item["Email"] || null,
    name: item["Name"],
    tel: item["Tel"] || null
  }));
  
  console.log(outputData);