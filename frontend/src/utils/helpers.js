import { ethers, utils } from "ethers";
import omitDeep from "omit-deep";

export function getSigner() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    return provider.getSigner();
}

export function signedTypeData(domain, types, value) {
    const signer = getSigner();
    // eslint-disable-next-line no-underscore-dangle
    return signer._signTypedData(
        omitDeep(domain, "__typename"),
        omitDeep(types, "__typename"),
        omitDeep(value, "__typename"),
    );
}

export function splitSignature(signature) {
    return utils.splitSignature(signature);
}

// check if jwt token is expired
export const isTokenExpired = (token) => {
    const payloadBase64 = token.split(".")[1];
    const decodedJson = Buffer.from(payloadBase64, "base64").toString();
    const decoded = JSON.parse(decodedJson);
    const { exp } = decoded;
    return Date.now() >= exp * 1000;
};

export function generateRandomColor() {
    const maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    const randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
}

export const nftStorageURLFixer = (url) => url?.replace("ipfs://", "https://lens.infura-ipfs.io/ipfs/");

export const fixURL = (url) => {
    const replacedURL = url?.replace("ipfs://", "https://");
    return replacedURL?.concat(".ipfs.nftstorage.link");
};

export const PublicationMainFocus = {
    VIDEO: "VIDEO",
    IMAGE: "IMAGE",
    ARTICLE: "ARTICLE",
    TEXT_ONLY: "TEXT_ONLY",
    AUDIO: "AUDIO",
    LINK: "LINK",
    EMBED: "EMBED",
};
export const baseMetadata = {
    version: "2.0.0",
    locale: "en-US",
    external_url: null,
    name: "Posted @RTUCONNECT",
    attributes: [
        {
            traitType: "string",
            key: "type",
            value: "post",
        },
    ],
    tags: ["RTUCONNECT"],
    appId: "rtutest", // change it to rtuconnect
};
