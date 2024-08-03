import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncLoginCheck } from "./LoginModal/EntryFile.js";
// import { StartFunc as StartFuncLoginCheck } from "../../BranchJs/LoginModal/EntryFile.js";

const StartFunc = async () => {
    StartFuncFormLoad();
    let jVarLocalFromAdmin = await StartFuncLoginCheck({ inSuccessFunc: StartFuncShowOnDom });

    if (jVarLocalFromAdmin) {
        StartFuncShowOnDom().then();
    };
};

StartFunc();