import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/Candidate.Card';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    name: '',
    username: '',
    location: '',
    avatar: '',
    email: '',
    html_url: '',
    company: '',
  });

  // Fetch data from the GitHub API when the component mounts
  const [candidates, setCandidates] = useState<string[]>([]);

  // Implement a function to fetch a single user from the GitHub API
  const [currentIndex, setCurrentIndex] = useState(0);

  const parseCandidate = async (username:string) => {
    const user = await searchGithubUser(username);
    // console.log(user);
    setCurrentCandidate({
      name: user.name,
      username: user.login,
      location: user.location,
      avatar: user.avatar_url,
      email: user.email,
      html_url: user.html_url,
      company: user.company,
    });

    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      
      
      
      let data = await searchGithub();
      data = data.map((obj: { login: string }) => obj.login);
        
        setCandidates(data);
        // console.log(candidates);
        await parseCandidate(data[currentIndex]);
     
    }

    fetchData();
  }, []);

  const onPlus = async () => {
    // record current candidate to local storage
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    savedCandidates.push(currentCandidate);
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));


    await parseCandidate(candidates[currentIndex]);
    // console.log('Plus button clicked');
  };

  const onMinus = async () => {
    await parseCandidate(candidates[currentIndex]);
    // console.log('Minus button clicked');
  };

  return (
    <>
      <h1>Candidate Search</h1>
      <CandidateCard candidate={currentCandidate} onMinus={onMinus} onPlus={onPlus} />
      {/* <CandidateCard candidate={dummyCandidate} /> */}
    </>
)};

export default CandidateSearch;
