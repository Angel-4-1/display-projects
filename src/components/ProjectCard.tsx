import React, { FC } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface ProjectCardProps {
	title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
	title,
  description,
  imageUrl,
  linkUrl,
}) => {
	return <Card style={{
    width: '18rem',
    margin: '10px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <Card.Header style={{
      width: '100%'
    }}>
      {title}
    </Card.Header>

    <Card.Img variant="top" src={imageUrl} style={{
      width: '200px',
      height: 'auto',
      marginTop: '10px',
      borderRadius: '5px'
    }}/>

    <Card.Body>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>

    <Button variant="primary" href={linkUrl} target='_blank'
      style={{
        marginBottom: '1rem'
      }}
    >Discover</Button>
  </Card>
}

export default ProjectCard;