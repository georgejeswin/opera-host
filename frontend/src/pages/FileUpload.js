import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const FileUpload = () => {
  // const user = JSON.parse(localStorage.getItem('userInfo'))
  const [fileUploaded , setFileUploaded] = useState(false)
  const user = useSelector((state) => ({ ...state.user }));
  const files = useSelector((state)=> ({...state.files}))
  console.log("files state>>",files)

  let history = useHistory();
  useEffect(() => {
    if (user.name === undefined) {
      history.push("/user");
      toast.dark("Update your full name before file submission");
    }
    if(fileUploaded){
      history.push("/payments")
    }
  }, [user, history]);
  return <Form /> ;
};
