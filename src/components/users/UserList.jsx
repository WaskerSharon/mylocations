import { fetchUsers, userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../../Styles/Header.scss";
import "../../Styles/Table.scss";

export function UserList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(userDeleted({id}));
  };

  return (
    <div className="container">
      <div className="head__contain">
        <h1>Welldone</h1>

        <div className="head__contain__btns">
          <div className="two columns">
            <button
              onClick={() => dispatch(fetchUsers())}
              className="button-primary"
            >
              Load Users
            </button>
          </div>

          <div className="two columns">
            <Link to="/add-user">
              <button className="button-primary">Add User</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="table__contain">
        {loading ? (
          "Loading..."
        ) : (
          <table className="table__contain__box">
            <thead>
              <tr>
                <th className="table__contain__box--th">ID</th>
                <th className="table__contain__box--th">Name</th>
                <th className="table__contain__box--th">Email</th>
                <th className="table__contain__box--th">Actions</th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map(({ id, name, email }, i) => (
                  <tr className="table__contain__box--tr" key={i}>
                    <td className="table__contain__box--td">{id}</td>
                    <td className="table__contain__box--td">{name}</td>
                    <td className="table__contain__box--td">{email}</td>
                    <td className="table__contain__box--td">
                      <button 
                        className="button-secondary"
                        onClick={() => handleDelete(id)}>Delete</button>
                      <Link to={`/edit-user/${id}`}>
                        <button className="button-secondary">Edit</button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
