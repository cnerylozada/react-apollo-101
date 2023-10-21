import { Outlet, Link } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <div
        style={{
          padding: "8px",
          marginBottom: "16px",
          background: "#fcffed",
          borderBottom: "1px solid #ccc",
        }}
      >
        <div>
          <Link to="/home">Home</Link>
        </div>
        <div>
          <Link to="/all-authors">All Authors</Link>
        </div>
        <div>
          <Link to="/all-books">All Books</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
