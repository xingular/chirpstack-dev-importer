# chirstack-dev-importer

A script to import devices in Chirpstack from a JSON file.
The JSON file name is hardcoded to be `flashed_devices.json`.

The row format is as follows:

```json
{"flashed_date":"2024-08-09T13:33:08Z","flashed_duration":"13.866911261","uid":"004A0029 33363030 14473834","lrw_deveui":"294a47001450df0c","fw_name":""}
```

But only the `lrw_deveui` is relevant for the import. 

## Usage

Prerequsite: Replace all occurrences of `xxx` in the `.ts` source files with proper values.

0. Run `node --run install`
1. Run `node --run run create`
2. Follow the instructions
3. Run `node --run run update` to set the application key for each device.

To Delete all the devices providing the DevEUIs in the JSON file
use command `node --run run delete`.
