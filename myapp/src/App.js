
import './App.css';
import StudentTable from './components/StudentTable';
import {students} from './components/StudentsDb';

function App() {
  return (
    <div className="App">
    <h1>Student Information Portal</h1>
     <table>
        <tbody>
          <tr>
              <td>
                    <StudentTable StudentTable students={students}></StudentTable>
              </td>
          
          </tr>


        </tbody>

      </table>
    </div>
  );
}

export default App;
