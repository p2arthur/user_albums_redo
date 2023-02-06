import { useEffect } from "react";
import { fetchUsers } from "../store";
import { useDispatch } from "react-redux";

function UsersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return <div>Users List</div>;
}

export default UsersList;
