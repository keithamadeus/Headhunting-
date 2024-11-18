import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/Candidate.Card';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate>({
    name: '',
    username: '',
    location: '',
    avatar: '',
    email: '',
    html_url: '',
    company: '',
  });

  // Fetch data from the GitHub API when the component mounts
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  // Implement a function to fetch a single user from the GitHub API
  const [currentIndex, setCurrentIndex] = useState(0);


  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
