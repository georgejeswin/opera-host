import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const FileUpload = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const user = useSelector((state) => ({ ...state.user }));

  let history = useHistory();
  useEffect(() => {
    if (user.name === undefined) {
      history.push("/user");
      toast.dark("Update your full name before file submission");
    }
    if (fileUploaded) {
      history.push("/payments");
    }
  }, [user, history]);
  return <Form />;
};
