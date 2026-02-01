import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';
import { Footer } from '../components';

export const MainLayout = () => {
  return (
    <div id="wrapper">
      <a href="#" id="back-to-top"></a>
      
      <Navbar />
      
      <Outlet />

      <Footer />
    </div>
  );
};