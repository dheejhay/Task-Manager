import { Routes, Route, BrowserRouter } from "react-router-dom"
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  return (
    <section className="container">
      <article className=" col-md-6 offset-md-3">
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<TaskList />}/>
            <Route path='/tasks' element={<TaskList />}></Route>
            <Route path='/tasks/add' element={<TaskForm action={"add"} />}/>
            <Route path='/tasks/edit/:id' element={<TaskForm action={"edit"} />}/>
            <Route path='/tasks/:id' element={<TaskForm action={"detail"} />}/>
          </Routes>
        </BrowserRouter>
      </article>
   </section>
  );
}

export default App;
