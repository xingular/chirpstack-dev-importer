import { createDevice } from "./api/createDevice";
import { promptName, promptStartNumber } from "./prompts";
import fs from 'fs';

let rawData = fs.readFileSync('flashed_devices.json');
let stringData = "[" + rawData.toString('utf8').replace(/[^,{[](?=\n *["[{\d])/gm, '$&,') + "]";
let devices = JSON.parse(stringData);

(async function main() {

    const name = await promptName();
    const startNumber = await promptStartNumber();

    for (let i = 0; i < devices.length; i++) {
        let deviceName = name + (i + startNumber);
        let response = await createDevice(devices[i], deviceName);
        if (response.status == 200) {
            console.log(deviceName, response.status);
        } else {
            console.error(deviceName, response.response.status + ' ' + response.response.data.message);
        }
    }
})();
