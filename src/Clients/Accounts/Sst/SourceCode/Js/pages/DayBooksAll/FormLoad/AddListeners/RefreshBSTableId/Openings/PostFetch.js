import ConfigJson from '../../../../Config.json' with {type: "json"};

let StartFunc = async () => {
    let jVarLocalFetchUrl = `/${ConfigJson.routePath}/Openings/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

