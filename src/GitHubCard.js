import { Card } from 'react-bootstrap';

const GitHubCard = ({ username, imageUrl, blurb }) => {
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} style={{ width: '275px', height: '300px' }} />
      <Card.Body>
        <Card.Title>{username}</Card.Title>
        <Card.Text>{blurb}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GitHubCard;
