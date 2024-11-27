import React from "react";
import styled from "styled-components";
import type Candidate from "../interfaces/Candidate.interface";

type CandidateCardProps = {
    candidate: Candidate;
    onPlus?: (() => void) | null;
    onMinus?: (() => void) | null;
};

const Card = styled.div`
    border-radius: 8px;
    // padding: 16px;
    margin: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardAvatar = styled.img`
    border-radius: 15% 15% 0 0;
    width: auto;
    height: 300px;
`;

const CardName = styled.h2`
    font-size: 1.5em;
    margin: 0;
`;

const CardBody = styled.div`
    margin-top: 16px;
`;

const CardUsername = styled.p`
    font-size: 1em;
    color: #555;
`;

const CardActions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
`;

const CandidateCard = ({
    candidate,
    onPlus,
    onMinus,
}: CandidateCardProps) => {
    return (
        <>
            {candidate?.username ? (
                <Card>
                    <CardHeader>
                        <CardAvatar
                            src={candidate.avatar}
                            alt={candidate.name}
                        />
                        <CardName>{candidate.name}</CardName>
                    </CardHeader>
                    <CardBody>
                        <CardUsername>{candidate.username}</CardUsername>
                        <p>{candidate.location}</p>
                        <p>{candidate.email}</p>
                        <p>{candidate.company}</p>
                        <a href={candidate.html_url} target="_blank" rel="noreferrer">
                            View on GitHub
                        </a>
                        <CardActions>
                            <button 
                                onClick={onMinus || (() => {})} 
                                style={{ border: '1px solid red', borderRadius: '50%', backgroundColor: 'red', color: 'black' }}
                            >
                                -
                            </button>
                            <button 
                                onClick={onPlus || (() => {})}
                                style={{ border: '1px solid green', borderRadius: '50%', backgroundColor: 'green', color: 'black' }}
                            >
                                +
                            </button>
                        </CardActions>
                    </CardBody>
                </Card>
            ) : 
                <Card className="card--empty">
                    <p>No candidate found</p>
                </Card>
            }
        </>
    );
};

export default CandidateCard;
