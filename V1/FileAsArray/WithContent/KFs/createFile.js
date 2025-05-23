import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../../CommonExpose/returnRootDir.js";
const CommonDataPath = "Data";

let StartFunc = ({ inFileName, inInsertData }) => {
    const LocalFileName = inFileName;
    let LocalInsertData = inInsertData;
    let LocalReturnData = { KTF: false };
    const LocalDataPath = StartFuncCommonExpose();
    const LocalFilePath = `${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`;

    try {
        fs.writeFileSync(LocalFilePath, JSON.stringify(LocalInsertData), { flag: 'wx' });

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = `File ${LocalFileName}.json was Created in ${CommonDataPath} folder`;
        return LocalReturnData;
    } catch (err) {
        if (err.code === 'EEXIST') {
            LocalReturnData.KReason = `${LocalFileName} File already exists in ${CommonDataPath} folder .`;
            return LocalReturnData;

        } else {
            console.error(`Error creating ${LocalFileName} file: , ${err}`);
            LocalReturnData.KReason = `Error creating ${LocalFileName} file: , ${err}`;
            return LocalReturnData;
        };
    };

    return LocalReturnData;
};

export { StartFunc };
