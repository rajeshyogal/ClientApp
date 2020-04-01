import React from 'react';
import { CircularProgressbar as CircularProgress, buildStyles } from 'react-circular-progressbar';



const CirProgress = () => {
  const percentage = 75;
  const styles = buildStyles({
    rotation: 0.25,
    textSize: '16px',
    pathColor: `rgba(62, 152, 199, ${percentage / 100}))`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7'
  });

  return (
    <div>
      <CircularProgress
        value={percentage}
        styles={styles}
        text={`${percentage}%`} />
    </div>); 
}

export default CirProgress;

