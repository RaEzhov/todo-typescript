import React from "react";
import {useNavigate} from "react-router-dom";

const AboutPage: React.FC = () => {
    const navigate = useNavigate();
    return (<>
        <h1>About us.</h1>
        <button className="btn" onClick={() => navigate(-1)}>Вернуться назад</button>
    </>);
};

export default AboutPage;
