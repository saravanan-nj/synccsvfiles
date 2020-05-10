const newLine = /\r?\n/;


class csvToJson {

    static async csvToJson(csvFile: File): Promise<Array<Object>> {
        let fieldDelimiter = ',';
        let contents = await csvFile.text();
        let lines = contents.split(newLine);
        let headers = lines[0].split(fieldDelimiter);
        let jsonResult = [];

        for (let i = 1; i < lines.length; i++) {
          let currentLine = lines[i].split(fieldDelimiter);
          if (currentLine.length > 0 && csvToJson.isNotEmpty(currentLine)) {
            jsonResult.push(csvToJson.buildJsonResult(headers, currentLine));
          }
        }
        return jsonResult;
    }

    static buildJsonResult(headers, currentLine): Object {
        let jsonObject = {};
        for (let j = 0; j < headers.length; j++) {
            let propertyName = headers[j].trim();

            let value = currentLine[j];
            jsonObject[propertyName] = value;
        }
        return jsonObject;
    }

    static isNotEmpty(values: Array<String>) {
        let isNotEmpty = values.some((value) => {
            let boo = value.trim() !== '';
            return boo;
        });
        return isNotEmpty;
    }
}

export { csvToJson };
