import { useState } from 'react';
import menu from './data';
import Title from './Title';


const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  return ( 
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <menu items = {menuItems} />
      </section>
    </main>
  );
};
export default App;
