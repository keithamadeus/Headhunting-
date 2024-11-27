// import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  // import { Link } from 'react-router-dom';

    return (
      <nav>
        <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
          <li style={{ marginRight: '20px' }}>
        <Link 
          to="/" 
          style={{ 
            color: 'white', 
            fontWeight: 'bold', 
            textDecoration: 'none' 
          }}
          onMouseOver={(e) => e.currentTarget.style.color = 'lightgrey'}
          onMouseOut={(e) => e.currentTarget.style.color = 'white'}
        >
          Candidate Search
        </Link>
          </li>
          <li>
        <Link 
          to="/SavedCandidates" 
          style={{ 
            color: 'white', 
            fontWeight: 'bold', 
            textDecoration: 'none' 
          }}
          onMouseOver={(e) => e.currentTarget.style.color = 'lightgrey'}
          onMouseOut={(e) => e.currentTarget.style.color = 'white'}
        >
          Saved Candidates
        </Link>
          </li>
        </ul>
      </nav>
    );
  return (
    <div>Nav</div>
  )
};

export default Nav;
