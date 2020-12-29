import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition';
library.add(fas);


const App: React.FC = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="coffee" theme="primary" size="10x" />
        <Menu defaultIndex='0'
          onSelect={
            (index) => { alert(index) }
          } defaultOpenSubMenus={['2']}>
          <MenuItem  >
            cool link
          </MenuItem>
          <MenuItem  >
            cool link2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown1
            </MenuItem>
            <MenuItem>
              dropdown2
            </MenuItem>
          </SubMenu>
          <MenuItem >
            cool link3
          </MenuItem>
        </Menu>
        <Button size="lg" onClick={() => {
          setShow(!show)
        }} >toggo</Button>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
        >
          <div>
            <p>dssssssssss</p>
            <p>dssssssss1222ss</p>
            <p>dsssssssss111s</p>
          </div>
        </Transition>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-top"
          wrapper
        >
          <Button btnType="primary" size="lg">bihe</Button>
        </Transition>
      </header>

    </div>
  );
}

export default App;
