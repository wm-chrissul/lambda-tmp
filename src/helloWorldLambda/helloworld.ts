import * as fs from "fs";
import * as path from "path";

export const getFileData = (): Buffer => {
    const data = fs.readFileSync(path.join(__dirname, 'test.pdf'))

    return data
}
