import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessages, getMessages } from "../../actions/messageActions";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useHistory } from "react-router";

const AdminViewMessages = () => {
  const messages = useSelector((state) => state.messages);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessages());
  }, []);

  const submit = (id) => {
    confirmAlert({
      title: `Are you sure to delete the message`,
      message: "Deleted message could not be retreived",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(deleteMessages(id));
            history.push("/admin/dashboard/");
            dispatch(getMessages());
          },
        },
        {
          label: "No",
          onClick: () => history.push("/admin/messages/"),
        },
      ],
    });
  };

  return (
    <div className="m-2 mt-5 mb-5" style={{ overflow: "scroll" }}>
      <table className="table table-striped" style={{ overflow: "scroll" }}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Message</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td>{message.name}</td>
              <td>{message.email}</td>
              {/* <td>{message.phone}</td> */}
              <td>{message.message}</td>
              <td
                onClick={() => {
                  submit(message._id);
                }}
              >
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminViewMessages;
