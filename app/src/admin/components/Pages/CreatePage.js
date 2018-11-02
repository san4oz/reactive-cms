import React from "react";
import {Create} from "../Shared/InternalPages/CRUD";

const CreatePage = () => (
    <div>
        <form className="simple-form">
            <label>Url</label>
            <input type="text"/>  
            <label>Title</label>
            <input type="text"/>   
            <label>Content</label>
            <textarea />             
        </form>
    </div>
);

export default (props) => Create(<CreatePage {...props} />, 'pages');