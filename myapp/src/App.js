import logo from './logo.svg';
import './App.css';
import StudentTable from './components/StudentTable';

function App() {
  return (
    <div className="App">
     <table>
        <tbody>
          <tr>
              <td>
                    <StudentTable></StudentTable>
              </td>
          
          </tr>

        </tbody>

      </table>
    </div>
  );
}

export default App;
