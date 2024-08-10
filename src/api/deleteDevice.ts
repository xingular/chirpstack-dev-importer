import axios from "axios";

async function deleteDevice(devEUI: string): Promise<any> {
  return await axios({
    method: "DELETE",
    url: `https://xxx/api/devices/${devEUI}`,
    headers: {
      "accept": "application/json",
      "Content-Type": "application/json",
      "Grpc-Metadata-Authorization": "Bearer xxx",
    }
  }).then((response) => {
    return response;
  })
    .catch((error) => {
      return error;
    });
}

import fs from 'fs';

let rawData = fs.readFileSync('flashed_devices.json');
let stringData = "[" + rawData.toString('utf8').replace(/[^,{[](?=\n *["[{\d])/gm, '$&,') + "]";
let devices = JSON.parse(stringData);

for (let device of devices) {
  let devEUI = device.lrw_deveui;
  deleteDevice(devEUI).then((response) => {
    if (response.status == 200) {
      console.log(devEUI, response.status);
    } else {
      console.error(devEUI, response.response.status);
    }
  })
}
