import { useState } from "react";

const SavedCandidates = () => {

  const [candidates, setCandidates] = useState(JSON.parse(localStorage.getItem('savedCandidates') || '[]'));



  return (
    <>
      <h1>Potential Candidates</h1>
      {/* table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Username</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Profile</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate: any) => (
            <tr key={candidate.username}>
              <td>
                <img src={candidate.avatar} alt={candidate.name} height="100px" />
              </td>
              <td>{candidate.name}</td>
              <td>{candidate.username}</td>
              <td>{candidate.location}</td>
              <td>{candidate.email}</td>
              <td>{candidate.company}</td>
              <td>
                <a href={candidate.html_url} target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
              </td>
              <td>
                <button
                  onClick={() => {
                    // const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
                    const newCandidates = candidates.filter((c: any) => c.username !== candidate.username);
                    setCandidates(newCandidates);
                    localStorage.setItem('savedCandidates', JSON.stringify(newCandidates));

                  }}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Terniary Operator to say no canidates are avaliable */}
    </>
  );
};

export default SavedCandidates;
