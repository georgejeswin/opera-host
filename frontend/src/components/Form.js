import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import uploadIMG from "../components/images/upload-right.png";
import "./Form.css";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import {
  // apiUrl,
  // getSingleFiles,
  cvFileUpload,
  // singleFileUpload,
  psFileUpload,
  SslcFileUpload,
  PlusTwoFileUpload,
  DegreeFileUpload,
  IeltsFileUpload,
  ExperienceFileUpload,
  SopFileUpload,
  LorFileUpload,
  // getMultipleFiles,
} from "../data/api";
import Uploader from "./Uploader";
// import { updateUser } from "../actions/userActions";
// import { createOrUpdateUser } from "../functions/auth";
// const api = "http://localhost:8000/";

const Form = () => {
  let history = useHistory();
  const [uploading, setUploading] = useState(false);
  // const dispatch = useDispatch();
  // const user = useSelector((state) => ({ ...state.user }));

  // const userinfo = localStorage.getItem("userInfo");
  // console.log("info>>>>>", userinfo);
  // const [singleFiles, setSingleFiles] = useState([]);
  const [cvFiles, setCvFiles] = useState([]);
  const [psFiles, setPsFiles] = useState([]);
  const [sslcFiles, setSslcFiles] = useState([]);
  const [plusTwoFiles, setPlusTwoFiles] = useState([]);
  const [degreeFiles, setDegreeFiles] = useState([]);
  const [ieltsFiles, setIeltsFiles] = useState([]);
  const [experienceFiles, setExperienceFiles] = useState([]);
  const [sopFiles, setSopFiles] = useState([]);
  const [lorFiles, setLorFiles] = useState([]);

  const [cvFileName, setCvFileName] = useState(
    "1. Updated curriculum vitae ( CV )"
  );
  const [passportFileName, setPassportFileName] = useState(
    "2 fileInput__item. Front and back page of passport copy"
  );
  const [sslcFileName, setSslcFileName] = useState("3. SSLC Certificate");
  const [plustwoFileName, setPlustwoFileName] = useState(
    "4. Plus two Certificate"
  );
  const [degreeFileName, setDegreeFileName] = useState(
    "5. Degree certificate with consolidated mark sheet and semester certificates"
  );
  const [ietlsFileName, setIeltsFileName] = useState(
    "6. English language test result -IELTS  ( If any )"
  );
  const [experienceFileName, setExperienceFileName] = useState(
    "7. Experience letter ( If any )"
  );
  const [sopFileName, setSopFileName] = useState(
    "8. Statement of purpose - SOP for your selected programmes"
  );
  const [lorFileName, setLorFileName] = useState("9. Letter of reccomendation");
  const userInfo = useSelector((state) => state.user);

  function onCvFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 1042678) {
      toast.error("File size greater than 1 MB, Please compress and upload");
      // console.log("cv size>>>>", e.target?.files[0].size); 1242678
      e.target.value = "";
      setCvFiles("");
    } else {
      setCvFiles(e.target?.files[0]);
      setCvFileName(e.target?.files[0]?.name);
    }
  }
  function onPsFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 1042678) {
      toast.error("File size greater than 1 MB, Please compress and upload");
      e.target.value = "";
      setPsFiles("");
    } else {
      setPsFiles(e.target?.files[0]);
      setPassportFileName(e.target?.files[0]?.name);
    }
  }
  function onSslcFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 1042678) {
      toast.error("File size greater than 1 MB, Please compress and upload");
      e.target.value = "";

      setSslcFiles("");
    } else {
      setSslcFiles(e.target?.files[0]);
      setSslcFileName(e.target?.files[0]?.name);
    }
  }
  function onPlusTwoFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 1042678) {
      toast.error("File size greater than 1 MB, Please compress and upload");
      e.target.value = "";

      setPlusTwoFiles("");
    } else {
      setPlusTwoFiles(e.target?.files[0]);
      setPlustwoFileName(e.target?.files[0]?.name);
    }
  }
  function onDegreeFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 1042678) {
      toast.error("File size greater than 1 MB, Please compress and upload");
      e.target.value = "";
      setDegreeFiles("");
    } else {
      setDegreeFiles(e.target?.files[0]);
      setDegreeFileName(e.target?.files[0]?.name);
    }
  }
  function onIeltsFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 1042678) {
      toast.error("File size greater than 1 MB, Please compress and upload");
      e.target.value = "";

      setIeltsFiles("");
    } else {
      setIeltsFiles(e.target?.files[0]);
      setIeltsFileName(e.target?.files[0]?.name);
    }
  }
  function onExperienceFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 1042678) {
      toast.error("File size greater than 1 MB, Please compress and upload");
      e.target.value = "";

      setExperienceFiles("");
    } else {
      setExperienceFiles(e.target?.files[0]);
      setExperienceFileName(e.target?.files[0]?.name);
    }
  }
  function onSopFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 1042678) {
      toast.error("File size greater than 1 MB, Please compress and upload");
      e.target.value = "";

      setSopFiles("");
    } else {
      setSopFiles(e.target?.files[0]);
      setSopFileName(e.target?.files[0].name);
    }
  }
  function onLorFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 1042678) {
      toast.error("File size greater than 1 MB, Please compress and upload");
      e.target.value = "";

      setLorFiles("");
    } else {
      setLorFiles(e.target?.files[0]);
      setLorFileName(e.target?.files[0]?.name);
    }
  }

  const uploadCvFile = async () => {
    if (cvFiles) {
      const formData = new FormData();
      formData.append("cvfile", cvFiles);
      await cvFileUpload(formData, userInfo);
      console.log("uploaded");
    } else {
      console.log("no cv file");
    }
  };
  const uploadPsFile = async () => {
    const formData = new FormData();
    formData.append("psfile", psFiles);
    await psFileUpload(formData, userInfo);
    console.log("uploaded");
  };
  const uploadSslcFile = async () => {
    const formData = new FormData();
    formData.append("sslcfile", sslcFiles);
    await SslcFileUpload(formData, userInfo);
    console.log("uploaded");
  };
  const uploadPlusTwoFile = async () => {
    const formData = new FormData();
    formData.append("plustwofile", plusTwoFiles);
    await PlusTwoFileUpload(formData, userInfo);
    console.log("uploaded");
  };
  const uploadDegreeFile = async () => {
    if (degreeFiles) {
      const formData = new FormData();
      formData.append("degreefile", degreeFiles);
      await DegreeFileUpload(formData, userInfo);
      console.log("uploaded");
    } else {
      console.log("no degree file");
    }
  };
  const uploadIeltsFile = async () => {
    if (ieltsFiles) {
      const formData = new FormData();
      formData.append("ieltsfile", ieltsFiles);
      await IeltsFileUpload(formData, userInfo);
      console.log("uploaded");
    } else {
      console.log("no ielts file");
    }
  };
  const uploadExperienceFile = async () => {
    if (experienceFiles) {
      const formData = new FormData();
      formData.append("experiencefile", experienceFiles);
      await ExperienceFileUpload(formData, userInfo);
      console.log("uploaded");
    } else {
      console.log("no experience file");
    }
  };
  const uploadSopFile = async () => {
    if (sopFiles) {
      const formData = new FormData();
      formData.append("sopfile", sopFiles);
      await SopFileUpload(formData, userInfo);
      console.log("uploaded");
    } else {
      console.log("no sop file");
    }
  };
  const uploadLorFile = async () => {
    if (lorFiles) {
      const formData = new FormData();
      formData.append("lorfile", lorFiles);
      await LorFileUpload(formData, userInfo);
      console.log("uploaded");
    } else {
      console.log("no lor file");
    }
  };

  // const uploadSingleFile =  async(e)=>{
  //   e.preventDefault()
  //   const formData = new FormData();
  //   formData.append('file', Files);
  //   await singleFileUpload(formData);

  // }
  const UploadMultipleFiles = async (e) => {
    e.preventDefault();
    try {
      setUploading(true);
      await uploadPsFile();
      await uploadSslcFile();
      await uploadPlusTwoFile();
      if (cvFiles.length > 0) {
        uploadCvFile();
      }
      if (degreeFiles.length > 0) {
        uploadDegreeFile();
      }
      if (ieltsFiles.length > 0) {
        uploadIeltsFile();
      }
      if (experienceFiles.length > 0) {
        uploadExperienceFile();
      }
      if (sopFiles.length > 0) {
        uploadSopFile();
      }
      if (lorFiles.length > 0) {
        uploadLorFile();
      }
      setUploading(false);
      toast.success("Upload Success, Continue To payment");
      history.push("/payments");
    } catch (error) {
      setUploading(false);
      toast.error("Upload failed, Please Try Again");
    }
  };
  // const getSingleFileslist = async () => {
  //   try {
  //     const fileslist = await getSingleFiles();
  //     setSingleFiles(fileslist);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getMultipleFileslist = async () => {

  //   try {
  //       const fileslist = await getMultipleFiles();
  //       setMultipleFiles(fileslist);
  //       console.log(fileslist)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  return (
    <div className="container">
      <div className="row">
        {uploading ? (
          <Uploader />
        ) : (
          <div className="col-md-6 m-auto upload__top">
            <h1 className="text-center display-4 my-3 form__h1">
              File Uploads
            </h1>

            <small className="form__small mb-3">
              Documents should be less than 1MB!
            </small>

            <form
              onSubmit={(e) => UploadMultipleFiles(e)}
              className="upload__form"
            >
              <div className="mb-2 fileInput__item">
                <label>1. Updated curriculum vitae ( CV )</label>
                <input
                  type="file"
                  className="uploadFile__button"
                  onChange={(e) => onCvFileUpload(e)}
                  accept=".pdf"
                />
                {/* <label className="label" htmlFor="customFile">
                {cvFileName}
              </label> */}
              </div>
              <div className="mb-2 fileInput__item">
                <label>2. Front and back page of passport copy *</label>
                <input
                  type="file"
                  required
                  className="uploadFile__button"
                  onChange={(e) => onPsFileUpload(e)}
                  accept=".pdf"
                />
                {/* <label className="label" htmlFor="customFile">
                {passportFileName}
              </label> */}
              </div>
              <div className="mb-2 fileInput__item">
                <label>3. SSLC Certificate *</label>

                <input
                  type="file"
                  required
                  className="uploadFile__button"
                  onChange={(e) => onSslcFileUpload(e)}
                  accept=".pdf"
                />
                {/* <label className="label" htmlFor="customFile">
                {sslcFileName}
              </label> */}
              </div>
              <div className="mb-2 fileInput__item">
                <label>4. Plus two Certificate *</label>

                <input
                  type="file"
                  required
                  className="uploadFile__button"
                  onChange={(e) => onPlusTwoFileUpload(e)}
                  accept=".pdf"
                />
                {/* <label className="label" htmlFor="customFile">
                {plustwoFileName}
              </label> */}
              </div>
              <div className="mb-2 fileInput__item">
                <label>
                  5. Degree certificate with consolidated mark sheet and
                  semester certificates
                </label>

                <input
                  type="file"
                  className="uploadFile__button"
                  onChange={(e) => onDegreeFileUpload(e)}
                  accept=".pdf"
                />
                {/* <label className="label" htmlFor="customFile">
                {degreeFileName}
              </label> */}
              </div>
              <div className="mb-2 fileInput__item">
                <label>6. English language test result -IELTS ( If any )</label>

                <input
                  type="file"
                  className="uploadFile__button"
                  onChange={(e) => onIeltsFileUpload(e)}
                  accept=".pdf"
                />
                {/* <label className="label" htmlFor="customFile">
                {ietlsFileName}
              </label> */}
              </div>
              <div className="mb-2 fileInput__item">
                <label>7. Experience letter ( If any )</label>

                <input
                  type="file"
                  className="uploadFile__button"
                  onChange={(e) => onExperienceFileUpload(e)}
                  accept=".pdf"
                />
                {/* <label className="label" htmlFor="customFile">
                {experienceFileName}
              </label> */}
              </div>
              <div className="mb-2 fileInput__item">
                <label>
                  8. Statement of purpose - SOP for your selected programmes
                </label>

                <input
                  type="file"
                  className="uploadFile__button"
                  onChange={(e) => onSopFileUpload(e)}
                  accept=".pdf"
                />
                {/* <label className="label" htmlFor="customFile">
                {sopFileName}
              </label> */}
              </div>
              <div className="mb-2 fileInput__item">
                <label>9. Letter of reccomendation</label>

                <input
                  type="file"
                  className="uploadFile__button"
                  onChange={(e) => onLorFileUpload(e)}
                  accept=".pdf"
                />
                {/* <label className="label" htmlFor="customFile">
                {lorFileName}
              </label> */}
              </div>
              <input
                type="submit"
                value="Submit"
                className="register__button w-100"
              />
            </form>
            <hr />
            {/* {singleFiles.map((file)=>{
           return(
             <div>
            <h4>{file.fileName}</h4>
            <embed src={`${api}${file.filePath}`} type="application/pdf" width="100%" height="300px" />
            </div>
           )
     })} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
