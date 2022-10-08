import axios from "axios";

// eslint-disable-next-line import/prefer-default-export
export const submarine = async (data) => {
    const res = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_PINATA_JWT}`,
        },
    });
    return res.data;
};
