import React, { useState } from "react";
import About from "./pages/aboutme";
import Form from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import NavTabs from "./component/Navigation"

export default function PortfolioContainer() {

    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        if (currentPage === "About") {
            return <About />
        }

    
    if (currentPage === 'Portfolio') {
        return <Portfolio />
    }

    if (currentPage === 'Contact') {
        return <Form />

       
    }

    return <Resume />
}

const handlePageChange = (page) => setCurrentPage(page);

return (
  <div>
    {/* We are passing the currentPage from state and the function to update it */}
    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    {/* Here we are calling the renderPage method which will return a component  */}
    {renderPage()}
  </div>
);
}




