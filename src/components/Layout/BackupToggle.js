import React from 'react';
import { Row, Col } from "react-bootstrap";
import Switch from "react-bootstrap-switch";

class BackupToggle extends React.Component {
  constructor(props) {
    super(props);    
    if ((this.props.process) === 'Backup') {
      this.state = {
        text: this.props.process,
        pos: true
      };
    } else {
      this.state = {
        text: this.props.process,
        pos: false
      };
    }     
  }  
  
  onBackupSwitchChange(e, switchState) {        
    let stateValue = e.state.value;
    let backup = "Backup";
    let restore = "Restore";
    
    if (!stateValue) {
      this.setState({ text: restore, pos: stateValue });
    } else {
      this.setState({ text: backup, pos: stateValue });
    }
    
  }

  render() {
    return (
      <div>
        <p className="category">{this.state.text}</p>
        <Switch style={{ "transform": "scale(0.4)" }}
          onChange={(e, switchState) => this.onBackupSwitchChange(e, switchState)}
          onText="Bkup" offText="Res" defaultValue={this.state.pos} />           
      </div>);
  }
}

export default BackupToggle;