import React from 'react';
import './main.css';
import BackupCard from './BackupCard';
import SearchBar from './Searchbar';

class Main extends React.Component {
  componentDidMount() {
    let acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click",
        function () {
          this.classList.toggle("active");
          let panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        }
      );
    }
  }

  render() {
    return (
       <div>
          <SearchBar />
        <div className="card-body">
          <h4 className="card-title">Boat Type</h4>
          <div className="accordions">
            <div className="card-accordion">
              <button className="accordion">SSBN</button>
              <div className="panel">
                <div className="blue-crew"><BackupCard boat="Alabama Blue" color="primary" process="Backup" /></div>
                <div className="gold-crew"><BackupCard boat="Alabama Gold" color="warning" process="Restore" /></div>
              </div>
            </div>
            <div className="card-accordion">
              <button className="accordion">SSGN</button>
              <div className="panel">
                <div className="blue-crew"><BackupCard boat="Ohio Blue" color="primary" process="Restore" /></div>
                <div className="gold-crew"><BackupCard boat="Ohio Gold" color="warning" process="Backup" /></div>
              </div>
            </div>
            <div className="card-accordion">
              <button className="accordion">SSNVA</button>
              <div className="panel">
                <BackupCard boat="Nebraska Blue" color="primary" process="Restore"/>
              </div>
            </div>
            <div className="card-accordion">
              <button className="accordion">LEARN</button>
              <div className="panel">
                <BackupCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;