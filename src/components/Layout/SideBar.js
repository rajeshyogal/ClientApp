import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main';
import Account from '../../views/Account';
import BoatManagement from '../../views/BoatManagement';
import Cobra from '../../views/Cobra';
import Message from '../../views/Message';
import VmConfig from '../../views/VmConfig';
import './Layout.css';

const SideBar = () => {
  return (
    <div className="sidebarnav">
      <BrowserRouter>
        <Route path='/' exact component={Main} />
        <Route path='/vm' component={VmConfig} />
        <Route path='/boat' component={BoatManagement} />
        <Route path='/account' component={Account} />
        <Route path='/message' component={Message} />
        <Route path='/cobra' component={Cobra} />
      </BrowserRouter>
    </div>
  );

}
export default SideBar;