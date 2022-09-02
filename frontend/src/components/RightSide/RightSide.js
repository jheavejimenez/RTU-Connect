import React, {useState} from "react";
import "./RightSide.css";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";


function RightSide() {
    const [modalOpened, setModalOpened] = useState(false);
    return (
        <div className="RightSide">
            <div className="navIcons">
                <img src="frontend/src/components/RightSide/RightSide" alt=""/>
                {/*<UilSetting/>*/}
                <img src="frontend/src/components/RightSide/RightSide" alt=""/>
                <img src="frontend/src/components/RightSide/RightSide" alt=""/>
            </div>

            <TrendCard/>

            <button className="button r-button" onClick={() => setModalOpened(true)}>
                Share
            </button>
            <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
        </div>
    );
}

export default RightSide;
