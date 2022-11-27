import React from 'react';
import useTitle from '../../hooks/useTitle';

const Dashboard = () => {
    useTitle('Dashboard');
    
    return (
        <div>
            <h1>Welcome to Admin Dashboard</h1>
        </div>
    );
};

export default Dashboard;