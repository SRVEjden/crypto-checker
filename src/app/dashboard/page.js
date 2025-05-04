import React from 'react';
import "./dashboard.scss"
import CryptoTable from "@/app/dashboard/components/CryptoTable";

function Page(props) {
    return (
        <div>
            <CryptoTable/>
        </div>
    );
}

export default Page;