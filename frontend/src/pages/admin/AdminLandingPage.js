import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMultipleFile, getFiles } from "../../actions/fileActions";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./AdminLandingPage.css";
import { IconButton } from "@material-ui/core";
import { deleteUsers } from "../../actions/userActions";
import GoogleDocsViewer from "react-google-docs-viewer";

const AdminLandingPage = () => {
  const files = useSelector((state) => state.files);
  const history = useHistory();

  const dispatch = useDispatch();
  const [showFiles, setShowFiles] = useState(false);
  const [fileList, setFileList] = useState({});

  useEffect(() => {
    dispatch(getFiles());
  }, []);

  const submit = (file) => {
    confirmAlert({
      title: `Are you sure to delete ${file?.name}`,
      message:
        "User's files and account will be deleted, confirm before deletion",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(deleteUsers(file.user));
            dispatch(deleteMultipleFile(file._id));
            setShowFiles(false);
          },
        },
        {
          label: "No",
          onClick: () => history.push("/admin/dashboard"),
        },
      ],
    });
  };

  const handleClick = async (file) => {
    const list = {
      name: file.name,
      user: file.user,
      cvfile: [
        {
          fileName: file?.cvfile[0]?.fileName,
          filePath: file?.cvfile[0]?.filePath,
          fileSize: file?.cvfile[0]?.fileSize,
          fileType: file?.cvfile[0]?.fileType,
        },
      ],
      degreefile: [
        {
          fileName: file?.degreefile[0]?.fileName,
          filePath: file?.degreefile[0]?.filePath,
          fileSize: file?.degreefile[0]?.fileSize,
          fileType: file?.degreefile[0]?.fileType,
        },
      ],
      experiencefile: [
        {
          fileName: file?.experiencefile[0]?.fileName,
          filePath: file?.experiencefile[0]?.filePath,
          fileSize: file?.experiencefile[0]?.fileSize,
          fileType: file?.experiencefile[0]?.fileType,
        },
      ],
      ieltsfile: [
        {
          fileName: file?.ieltsfile[0]?.fileName,
          filePath: file?.ieltsfile[0]?.filePath,
          fileSize: file?.ieltsfile[0]?.fileSize,
          fileType: file?.ieltsfile[0]?.fileType,
        },
      ],
      lorfile: [
        {
          fileName: file?.lorfile[0]?.fileName,
          filePath: file?.lorfile[0]?.filePath,
          fileSize: file?.lorfile[0]?.fileSize,
          fileType: file?.lorfile[0]?.fileType,
        },
      ],
      plustwofile: [
        {
          fileName: file?.plustwofile[0]?.fileName,
          filePath: file?.plustwofile[0]?.filePath,
          fileSize: file?.plustwofile[0]?.fileSize,
          fileType: file?.plustwofile[0]?.fileType,
        },
      ],
      psfile: [
        {
          fileName: file?.psfile[0]?.fileName,
          filePath: file?.psfile[0]?.filePath,
          fileSize: file?.psfile[0]?.fileSize,
          fileType: file?.psfile[0]?.fileType,
        },
      ],
      sopfile: [
        {
          fileName: file?.sopfile[0]?.fileName,
          filePath: file?.sopfile[0]?.filePath,
          fileSize: file?.sopfile[0]?.fileSize,
          fileType: file?.sopfile[0]?.fileType,
        },
      ],
      sslcfile: [
        {
          fileName: file?.sslcfile[0]?.fileName,
          filePath: file?.sslcfile[0]?.filePath,
          fileSize: file?.sslcfile[0]?.fileSize,
          fileType: file?.sslcfile[0]?.fileType,
        },
      ],
      amount: file?.amount,
      paided: file?.paided,
    };
    await setFileList(list);

    setShowFiles(!showFiles);
  };

  const handleDelete = (file) => {
    submit(file);
  };

  const url = "https://oxetest.tk";

  return (
    <div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-4 col-sm-12 margin__none display__users">
            <table className="admin__userName-table col-sm-12 ">
              <tbody className="pt-5 mt-5 ">
                {files.map((file) => (
                  <tr className="files__row margin__none">
                    <td>
                      <div
                        className="user__name"
                        onClick={() => handleClick(file)}
                      >
                        <h3 className="userName__h1">{file?.name}</h3>
                        <IconButton
                          className="pl-3"
                          onClick={() => handleDelete(file)}
                        >
                          <small>
                            <i className="fas fa-trash-alt fa-1x delete__icon"></i>
                          </small>
                        </IconButton>
                      </div>
                    </td>
                    <br />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-6">
            {showFiles ? (
              <ul className="show__files mt-5">
                <h1 className="userName__show-h1">{fileList?.name}</h1>
                {fileList.paided ? (
                  <h4 className="text-success">Payment : Done</h4>
                ) : (
                  <h4 className="text-danger">Payment : Not Done</h4>
                )}

                <h5 className="text-danger">Amount : {fileList?.amount} </h5>
                <h5>1. Updated curriculum vitae ( CV )</h5>
                {fileList.cvfile[0].filePath ? (
                  <li>
                    <p>{fileList?.cvfile[0]?.fileName}</p>
                    {fileList.cvfile[0]?.fileType === "image/png" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.cvfile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.cvfile[0]?.fileType === "image/jpg" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.cvfile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.cvfile[0]?.fileType === "image/jpeg" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.cvfile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.cvfile[0]?.fileType == "application/pdf" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.cvfile[0].filePath}`}
                      />
                    ) : fileList.cvfile[0]?.fileType ==
                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.cvfile[0].filePath}`}
                      />
                    ) : fileList.cvfile[0]?.fileType ==
                      "application/octet-stream" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.cvfile[0].filePath}`}
                      />
                    ) : (
                      <h5>
                        File format not supported {fileList.cvfile[0]?.fileType}
                      </h5>
                    )}
                  </li>
                ) : (
                  <h3 className="p-2">File Not uploaded</h3>
                )}

                <li>
                  <h5>2. Front and back page of passport copy</h5>
                  <p>{fileList?.psfile[0]?.fileName}</p>
                  {fileList.psfile[0]?.fileType === "image/png" ? (
                    <img
                      className="adminFiles__img"
                      src={`${url}/${fileList.psfile[0].filePath}`}
                      alt="file name"
                    />
                  ) : fileList.psfile[0]?.fileType === "image/jpg" ? (
                    <img
                      className="adminFiles__img"
                      src={`${url}/${fileList.psfile[0].filePath}`}
                      alt="file name"
                    />
                  ) : fileList.psfile[0]?.fileType === "image/jpeg" ? (
                    <img
                      className="adminFiles__img"
                      src={`${url}/${fileList.psfile[0].filePath}`}
                      alt="file name"
                    />
                  ) : fileList.psfile[0]?.fileType == "application/pdf" ? (
                    <GoogleDocsViewer
                      width="100%"
                      height="300px"
                      fileUrl={`${url}/${fileList.psfile[0].filePath}`}
                    />
                  ) : fileList.psfile[0]?.fileType ==
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
                    <GoogleDocsViewer
                      width="100%"
                      height="300px"
                      fileUrl={`${url}/${fileList.psfile[0].filePath}`}
                    />
                  ) : fileList.psfile[0]?.fileType ==
                    "application/octet-stream" ? (
                    <GoogleDocsViewer
                      width="100%"
                      height="300px"
                      fileUrl={`${url}/${fileList.psfile[0].filePath}`}
                    />
                  ) : (
                    <h5>
                      File format not supported {fileList.psfile[0]?.fileType}
                    </h5>
                  )}
                </li>
                <li>
                  <h5>3. SSLC Certificate</h5>
                  <p>{fileList?.sslcfile[0]?.fileName}</p>

                  {fileList.sslcfile[0]?.fileType === "image/png" ? (
                    <img
                      className="adminFiles__img"
                      src={`${url}/${fileList.sslcfile[0].filePath}`}
                      alt="file name"
                    />
                  ) : fileList.sslcfile[0]?.fileType === "image/jpg" ? (
                    <img
                      className="adminFiles__img"
                      src={`${url}/${fileList.sslcfile[0].filePath}`}
                      alt="file name"
                    />
                  ) : fileList.sslcfile[0]?.fileType === "image/jpeg" ? (
                    <img
                      className="adminFiles__img"
                      src={`${url}/${fileList.sslcfile[0].filePath}`}
                      alt="file name"
                    />
                  ) : fileList.sslcfile[0]?.fileType == "application/pdf" ? (
                    <GoogleDocsViewer
                      width="100%"
                      height="300px"
                      fileUrl={`${url}/${fileList.sslcfile[0].filePath}`}
                    />
                  ) : fileList.sslcfile[0]?.fileType ==
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
                    <GoogleDocsViewer
                      width="100%"
                      height="300px"
                      fileUrl={`${url}/${fileList.sslcfile[0].filePath}`}
                    />
                  ) : fileList.sslcfile[0]?.fileType ==
                    "application/octet-stream" ? (
                    <GoogleDocsViewer
                      width="100%"
                      height="300px"
                      fileUrl={`${url}/${fileList.sslcfile[0].filePath}`}
                    />
                  ) : (
                    <h5>
                      File format not supported {fileList.sslcfile[0]?.fileType}
                    </h5>
                  )}
                </li>
                <li>
                  <h5>4. Plus two Certificate</h5>

                  <p>{fileList?.plustwofile[0]?.fileName}</p>
                  {fileList.plustwofile[0]?.fileType === "image/png" ? (
                    <img
                      className="adminFiles__img"
                      src={`${url}/${fileList.plustwofile[0].filePath}`}
                      alt="file name"
                    />
                  ) : fileList.plustwofile[0]?.fileType === "image/jpg" ? (
                    <img
                      className="adminFiles__img"
                      src={`${url}/${fileList.plustwofile[0].filePath}`}
                      alt="file name"
                    />
                  ) : fileList.plustwofile[0]?.fileType === "image/jpeg" ? (
                    <img
                      className="adminFiles__img"
                      src={`${url}/${fileList.plustwofile[0].filePath}`}
                      alt="file name"
                    />
                  ) : fileList.plustwofile[0]?.fileType == "application/pdf" ? (
                    <GoogleDocsViewer
                      width="100%"
                      height="300px"
                      fileUrl={`${url}/${fileList.plustwofile[0].filePath}`}
                    />
                  ) : fileList.plustwofile[0]?.fileType ==
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
                    <GoogleDocsViewer
                      width="100%"
                      height="300px"
                      fileUrl={`${url}/${fileList.plustwofile[0].filePath}`}
                    />
                  ) : fileList.plustwofile[0]?.fileType ==
                    "application/octet-stream" ? (
                    <GoogleDocsViewer
                      width="100%"
                      height="300px"
                      fileUrl={`${url}/${fileList.plustwofile[0].filePath}`}
                    />
                  ) : (
                    <h5>
                      File format not supported{" "}
                      {fileList.plustwofile[0]?.fileType}
                    </h5>
                  )}
                </li>
                <h5>
                  5. Degree certificate with consolidated mark sheet and
                  semester certificates
                </h5>
                {fileList?.degreefile[0]?.filePath ? (
                  <li>
                    <p>{fileList?.degreefile[0]?.fileName}</p>

                    {fileList.degreefile[0]?.fileType === "image/png" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.degreefile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.degreefile[0]?.fileType === "image/jpg" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.degreefile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.degreefile[0]?.fileType === "image/jpeg" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.degreefile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.degreefile[0]?.fileType ==
                      "application/pdf" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.degreefile[0].filePath}`}
                      />
                    ) : fileList.degreefile[0]?.fileType ==
                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.degreefile[0].filePath}`}
                      />
                    ) : fileList.degreefile[0]?.fileType ==
                      "application/octet-stream" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.degreefile[0].filePath}`}
                      />
                    ) : (
                      <h5>
                        File format not supported{" "}
                        {fileList.degreefile[0]?.fileType}
                      </h5>
                    )}
                  </li>
                ) : (
                  <h3 className="p-5">File Not uploaded</h3>
                )}

                <h5>6. English language test result -IELTS ( If any )</h5>

                {fileList.ieltsfile[0].filePath ? (
                  <li>
                    <p>{fileList.ieltsfile[0].fileName}</p>

                    {fileList.ieltsfile[0]?.fileType === "image/png" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.ieltsfile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.ieltsfile[0]?.fileType === "image/jpg" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.ieltsfile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.ieltsfile[0]?.fileType === "image/jpeg" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.ieltsfile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.ieltsfile[0]?.fileType == "application/pdf" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.ieltsfile[0].filePath}`}
                      />
                    ) : fileList.ieltsfile[0]?.fileType ==
                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.ieltsfile[0].filePath}`}
                      />
                    ) : fileList.ieltsfile[0]?.fileType ==
                      "application/octet-stream" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.ieltsfile[0].filePath}`}
                      />
                    ) : (
                      <h5>
                        File format not supported{" "}
                        {fileList.ieltsfile[0]?.fileType}
                      </h5>
                    )}
                  </li>
                ) : (
                  <h3 className="p-5">File Not uploaded</h3>
                )}

                <h5>7. Experience letter ( If any )</h5>

                {fileList.experiencefile[0].filePath ? (
                  <li>
                    <p>{fileList?.experiencefile[0]?.fileName}</p>

                    {fileList.experiencefile[0]?.fileType === "image/png" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.experiencefile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.experiencefile[0]?.fileType === "image/jpg" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.experiencefile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.experiencefile[0]?.fileType ===
                      "image/jpeg" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.experiencefile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.experiencefile[0]?.fileType ==
                      "application/pdf" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.experiencefile[0].filePath}`}
                      />
                    ) : fileList.experiencefile[0]?.fileType ==
                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.experiencefile[0].filePath}`}
                      />
                    ) : fileList.experencefile[0]?.fileType ==
                      "application/octet-stream" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.experiencefile[0].filePath}`}
                      />
                    ) : (
                      <h5>
                        File format not supported{" "}
                        {fileList.experiencefile[0]?.fileType}
                      </h5>
                    )}
                  </li>
                ) : (
                  <h3 className="p-5">File Not uploaded</h3>
                )}
                {/* <li>


                  <p>{fileList?.experiencefile[0]?.fileName}</p>
               
                    
                    src={`${url}/${fileList?.experiencefile[0]?.filePath}`}
                    type="image/pdf"
                    width="100%"
                    height="300px"
                  />
                </li> */}
                <h5>
                  8. Statement of purpose - SOP for your selected programmes
                </h5>
                {fileList?.sopfile[0]?.filePath ? (
                  <li>
                    <p>{fileList?.sopfile[0]?.fileName}</p>

                    {fileList.sopfile[0]?.fileType === "image/png" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.sopfile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.sopfile[0]?.fileType === "image/jpg" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.sopfile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.sopfile[0]?.fileType === "image/jpeg" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.sopfile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.sopfile[0]?.fileType == "application/pdf" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.sopfile[0].filePath}`}
                      />
                    ) : fileList.sopfile[0]?.fileType ==
                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.sopfile[0].filePath}`}
                      />
                    ) : fileList.sopfile[0]?.fileType ==
                      "application/octet-stream" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.sopfile[0].filePath}`}
                      />
                    ) : (
                      <h5>
                        File format not supported{" "}
                        {fileList.sopfile[0]?.fileType}
                      </h5>
                    )}
                  </li>
                ) : (
                  <h3 className="p-5">File Not uploaded</h3>
                )}
                <h5>9. Letter of reccomendation</h5>
                {fileList?.lorfile[0]?.filePath ? (
                  <li>
                    <p>{fileList?.lorfile[0]?.fileName}</p>

                    {fileList.lorfile[0]?.fileType === "image/png" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.lorfile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.lorfile[0]?.fileType === "image/jpg" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.lorfile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.lorfile[0]?.fileType === "image/jpeg" ? (
                      <img
                        className="adminFiles__img"
                        src={`${url}/${fileList.lorfile[0].filePath}`}
                        alt="file name"
                      />
                    ) : fileList.lorfile[0]?.fileType == "application/pdf" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.lorfile[0].filePath}`}
                      />
                    ) : fileList.lorfile[0]?.fileType ==
                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.lorfile[0].filePath}`}
                      />
                    ) : fileList.lorfile[0]?.fileType ==
                      "application/octet-stream" ? (
                      <GoogleDocsViewer
                        width="100%"
                        height="300px"
                        fileUrl={`${url}/${fileList.lorfile[0].filePath}`}
                      />
                    ) : (
                      <h5>
                        File format not supported{" "}
                        {fileList.lorfile[0]?.fileType}
                      </h5>
                    )}
                  </li>
                ) : (
                  <h3 className="p-5">File Not uploaded</h3>
                )}
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLandingPage;
