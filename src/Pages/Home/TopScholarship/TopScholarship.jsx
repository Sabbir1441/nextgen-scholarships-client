import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const TopScholarship = () => {

    const [topScholarship , setTopScholarship] = useState([]);
    useEffect(() => {
        fetch('Scholarship.json')
        .then(res => res.json())
        .then(data => setTopScholarship(data))
    })

    return (
        <section>
            <SectionTitle
            heading={'Top scholarship'}
            ></SectionTitle>
        </section>
    );

};

export default TopScholarship;