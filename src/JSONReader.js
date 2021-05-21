import fs from "fs"
export default class JSONReader {
    jsonObject;

    constructor(route) {
        fs.readFile(route, 'utf8', (err, jsonString) => {
            if (err) {
                console.log("Error reading file from disk:", err)
                return
            }
            try {
                this.jsonObject = JSON.parse(jsonString)
            } catch (e) {
                console.error(e);
            }
        });
    }
}

