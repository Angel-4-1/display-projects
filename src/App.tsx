import React from 'react';
import './App.css';
import { PROJECTS_LIST } from './projectsList';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="App">
      <div style={{
        margin: '20px',
      }}>
        <h1>Projects</h1>
      </div>
      { PROJECTS_LIST.map((project, index) => {
        return <>
          <div style={{
            textAlign: 'left',
            margin: '10px 10px 10px 30px',
          }}>
            <h3 style={{
              fontWeight: 'bold',
            }}>
              <img src={project.icon} style={{
                width: '50px',
                height: 'auto',
                marginRight: '10px'
              }}/>
              {project.name}</h3>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            margin: '10px 10px 30px 10px',
            justifyContent: 'center',
          }}>
            { project.projects.map((subProject, index) => {
              return <ProjectCard 
                title={subProject.title}
                description={subProject.description}
                imageUrl={subProject.imageUrl}
                linkUrl={subProject.linkUrl}/>
            })}
          </div>
        </>
      })}
    </div>
  );
}

export default App;
