const utils = require("./formatdate");

const inputData = [
  {
    "Basic ID": "@035",
    "Corporate ID": "994001000000",
    "Corporate ID_1": "a",
    "Display Name": "aa",
    Email: "e",
    Name: "c",
    Tel: "xxx",
    Create_time: "02/08/2023 14:20",
  },
  {
    "Basic ID": "@358",
    "Corporate ID": "125556000000",
    "Corporate ID_1": "b",
    "Display Name": "bb",
    Email: "f",
    Name: "d",
    Tel: "xxXXXX",
    Create_time: "02/11/2023 13:15",
  },
  {
    "Basic ID": "@3",
    "Corporate ID": "125556000000",
    "Corporate ID_1": "b",
    "Display Name": "bb",
    Email: "f",
    Name: "d",
    Tel: "xxXXXX",
    Create_time: "2023-02-10 13:13",
  },
];

const outputData = inputData.map((item) => ({
  basic_id: item["Basic ID"],
  corporate_id: item["Corporate ID"],
  corporate_id_1: item["Corporate ID_1"],
  display_name: item["Display Name"],
  email: item["Email"] || null,
  name: item["Name"],
  tel: item["Tel"] || null,
  create_time: utils.convertDateTime(item["Create_time"]),
}));

console.log(outputData);
