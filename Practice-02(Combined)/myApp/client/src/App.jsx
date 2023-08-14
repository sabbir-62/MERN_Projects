import './App.css'
import CreatePage from './pages/CreatePage';
import ReadPage from './pages/ReadPage';
import UpdatePage from './pages/UpdatePage';
import Common from './components/Common/Common';


const App = () => {
    return (
        <div>
            <Common/>
            <CreatePage/>
            <ReadPage/>
            <UpdatePage/>
        </div>
    );
};

export default App;