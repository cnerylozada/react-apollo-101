import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <div>Header</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
