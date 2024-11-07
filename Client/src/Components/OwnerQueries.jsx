import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { API_ENDPOINTS, PROPERTY_IMAGE } from '../Services/Endpoints';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OwnerQueries = () => {
    const userId = useSelector((state) => state.userData.id);
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        const fetchQueries = async () => {
            const response = await axios.get(API_ENDPOINTS.contact.owner + userId);
            setQueries(response.data);
        };
        fetchQueries();
    }, [userId]);

    return (
        <div>
            <h1>Submitted Queries</h1>
            {queries.map(query => (
                <div key={query.id}>
                    <h2>Property ID: {query.propertyId}</h2>
                    <Link to={`/property/${query.propertyId}`} className='text-white bg-blue-700 my-2 px-3 py-2 rounded-md border-none hover:bg-slate-700'>
          Go to Property
        </Link>
                    <p>{query.message}</p>
                </div>
            ))}
        </div>
    );
};

export default OwnerQueries;
