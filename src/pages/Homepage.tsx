import React from 'react';
import Navigation from '../components/navigation/Navigation';
import { useSearchUsersQuery } from '../store/github/github.api';

const Homepage = () => {
    const {isLoading, isError, data} = useSearchUsersQuery("max");
    return (
        <div>
            <Navigation/>
        </div>
    );
};

export default Homepage;