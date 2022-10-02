import React from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import NavBar from "../components/NavBar/NavBar";
import { GET_EXPLORE } from "../graphQL/queries";

function Explore() {
    const { data } = useQuery(GET_EXPLORE);
    console.log(data);
    return (
        <div>
            <NavBar />
        </div>
    );
}

export default Explore;
