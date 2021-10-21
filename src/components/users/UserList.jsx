import { fetchUsers, userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
          <table className="table__contain__elem">
            <thead className="table__contain__elem--head">
              <tr>
                <th className="table__contain__elem--th">ID</th>
                <th className="table__contain__elem--th">Name</th>
                <th className="table__contain__elem--th">Email</th>
                <th className="table__contain__elem--th">Actions</th>
              </tr>
            </thead>
            <tbody className="table__contain__elem--body">
              {entities.length &&
                entities.map(({ id, name, email }, i) => (
                  <tr className="table__contain__elem--tr" key={i}>
                    <td data-aria-label="ID" className="table__contain__elem--td">{id}</td>
                    <td data-aria-label="Name" className="table__contain__elem--td">{name}</td>
                    <td data-aria-label="Email" className="table__contain__elem--td email--cell">{email}</td>
                    <td data-aria-label="Actions" className="table__contain__elem--td">
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
