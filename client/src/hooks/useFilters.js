import { useState, useEffect } from "react";

export default function useFilters() {
    const [filters, setFilters] = useState({});

    const onChangeFilter = (e) => {
        setFilters((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };

    return { filters, onChangeFilter };
}
