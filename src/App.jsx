import NotebookPanel from './components/NotebookPanel';
import PageList from './components/PageList';
import NoteEditor from './components/NoteEditor';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="notebook-panel">
        <NotebookPanel />
      </div>
      <div className="page-list">
        <PageList />
      </div>
      <div className="note-editor">
        <NoteEditor />
      </div>
    </div>
  );
}

export default App;