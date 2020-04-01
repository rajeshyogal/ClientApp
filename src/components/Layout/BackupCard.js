import React from 'react';
import Card from 'react-bootstrap/Card'
import './main.css';
import BackupToggle from './BackupToggle';

const BackupCard = props => {

  return (
    <div className="container-fluid">
        <Card border={props.color} style={{ width: '20rem' }}>        
        <Card.Body>
          <div className="row">
            <div className="col"><Card.Title style={{ fontSize: "20px", textAlign: "center" }}>{props.boat}</Card.Title></div>
            <div className="col text-center" style={{ textAlign: "right" }}><BackupToggle process={props.process} /></div>
          </div>
          <div className="card-footer">            
            <div className="stats">
              <li style={{ "fontSize": "14px", "listStyle": "none" }}>Last backup: 08/10/2018</li>
              <li style={{ "fontSize": "14px", "listStyle": "none" }}>Last Restore: 08/11/2018</li>
              <li style={{ "fontSize": "14px", "listStyle": "none" }}>Last CTQS Upload: 08/11/2019</li>
              <li style={{ "fontSize": "14px", "listStyle": "none" }}>Last ADQR Upload: 08/11/2018</li>
            </div>
          </div>
          
        </Card.Body>
      </Card>      
    </div>
  );
}
export default BackupCard;

