import { Outlet } from 'react-router-dom';
import ProSidebar from './components/ProSidebar';

export default function App() {
  return (
    <div className='wrapper' style={{display: 'flex'}}>
      <div className="sidebar_container">
        <ProSidebar />
      </div>
      <main style={{ flex: 1, padding: '20px 0' }}>
        <Outlet /> 
      </main>
    </div>
  );
}

