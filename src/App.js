import "./styles.css";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <div className="App">
      <div className="menu"></div>
      <div className="menu"></div>
      <div className="menu"></div>
      <Sidebar />
      <h1>
        <img
          className="header"
          src="https://img.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
          alt="new"
        />
        Courses
      </h1>
      <h3>Manage Courses(23)</h3>

      <input type="search" placeholder="Enter Course name to Search" />
      <div className="color">
        <div className="bulk">
          <label>
            <img
              className="size"
              src="https://img.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
              alt="new"
            />
            Bulk Create
          </label>
          <label>
            <img
              className="size"
              src="https://img.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
              alt="new"
            />
            Bulk Update
          </label>

          <label>
            {" "}
            <img
              className="size"
              src="https://img.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
              alt="new"
            />
            Bulk Enroll
          </label>
          <label>
            {" "}
            <img
              className="size"
              src="https://img.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
              alt="new"
            />
            Bulk Restart
          </label>

          <label>
            {" "}
            <img
              className="size"
              src="https://img.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
              alt="new"
            />
            Course Word Upload
          </label>
        </div>

        <p className="head">
          <select>
            <option>Action</option>
          </select>
          <select>
            <option>25</option>
          </select>
          <select>
            <option>Regular</option>
          </select>
        </p>
        <table>
          <tr>
            {" "}
            <td>
              {" "}
              <input type="checkbox" />
            </td>{" "}
            <th>status</th>
            <th> branch</th>
            <th>course code</th>
            <th>course name</th>
            <th> modules</th>
          </tr>
          <tr>
            <td>
              {" "}
              <input type="checkbox" />
            </td>
            <td>rajesh kumar </td>
            <td>rajesh kumar </td>
            <td>rajesh kumar </td>
            <td>rajesh kumar </td>
            <td>rajesh kumar </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
