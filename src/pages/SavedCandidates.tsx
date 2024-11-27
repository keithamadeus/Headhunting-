import { useState } from "react";

const SavedCandidates = () => {

  const [candidates, setCandidates] = useState(JSON.parse(localStorage.getItem('savedCandidates') || '[]'));

  return (
    <>
      <h1>Potential Candidates</h1>
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
          {candidates.length > 0 ? (
        candidates.map((candidate: any) => (
          <tr key={candidate.username}>
            <td>
          <img src={candidate.avatar} alt={candidate.name} height="100px" />
            </td>
            <td style={{ padding: '5px', wordWrap: 'break-word', maxWidth: '150px' }}>{candidate.name}</td>
            <td style={{ padding: '5px', wordWrap: 'break-word', maxWidth: '150px' }}>{candidate.username}</td>
            <td style={{ padding: '5px', wordWrap: 'break-word', maxWidth: '150px' }}>{candidate.location}</td>
            <td style={{ padding: '5px', wordWrap: 'break-word', maxWidth: '150px' }}>{candidate.email}</td>
            <td style={{ padding: '5px', wordWrap: 'break-word', maxWidth: '150px' }}>{candidate.company}</td>
            <td style={{ padding: '5px', wordWrap: 'break-word', maxWidth: '150px' }}>
          <a href={candidate.html_url} target="_blank" rel="noreferrer">
            View on GitHub
          </a>
            </td>
            <td>
          <button
            onClick={() => {
              const newCandidates = candidates.filter((c: any) => c.username !== candidate.username);
              setCandidates(newCandidates);
              localStorage.setItem('savedCandidates', JSON.stringify(newCandidates));
            }}
          >
            Reject
          </button>
            </td>
          </tr>
        ))
          ) : (
        <tr>
          <td colSpan={8} style={{ textAlign: 'center', fontWeight: 'bold' }}>No candidates available</td>
        </tr>
          )}
        </tbody>
      </table>
      
    </>
  );
};

export default SavedCandidates;
