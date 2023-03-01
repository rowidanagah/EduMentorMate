import Error from "./Error"
import "./popup.css"
import ReactDOM from "react-dom"
import { createPortal } from 'react-dom';

import { PortalWrapper } from "./PortalCard";


const ErrorModel = ({ msg, handlePotalClose }) => {
    return (
        <PortalWrapper>
            <h2 className="display-6 mb-4">Wanring !</h2>
            <Error message={msg} />
            <ion-icon onClick={handlePotalClose} name="close-outline"><i class="fa fa-trash" aria-hidden="true"></i>
            </ion-icon>
        </PortalWrapper>
    );
};

export default ErrorModel;