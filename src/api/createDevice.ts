import axios from "axios";

async function createDevice(device: any, name: string): Promise<any> {

    return await axios({
        method: "POST",
        url: `https://xxx/api/devices`,
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
            "Grpc-Metadata-Authorization": "Bearer xxx",
        },
        data: {
            "device": {
                "applicationId": "xxx",
                "description": "",
                "devEui": device.lrw_deveui,
                "deviceProfileId": "xxx",
                "isDisabled": false,
                "joinEui": "xxx",
                "name": name,
                "skipFcntCheck": false
            },
            "deviceKeys": { "nwkKey": "xxx" }
        }
    }).then((response) => {
        return response;

    }).catch((error) => {
        return error;
    });
}

export {
    createDevice
};
