import { useState } from "react";
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
  universityUpload,
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
  const [university, setUniversity] = useState("");
  const [ifUploaded, setIfUploaded] = useState({
    cv: false,
    degree: false,
    ielts: false,
    experience: false,
    sop: false,
    lor: false,
  });

  const userInfo = useSelector((state) => state.user);

  function onCvFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 4042678) {
      toast.error("File size greater than 4 MB, Please compress and upload");
      // console.log("cv size>>>>", e.target?.files[0].size); 4042678
      e.target.value = "";
      setCvFiles("");
    } else {
      setCvFiles(e.target?.files[0]);
      // setCvFileName(e.target?.files[0]?.name);
      setIfUploaded({ ...ifUploaded, cv: true });
    }
  }
  function onPsFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 4042678) {
      toast.error("File size greater than 4 MB, Please compress and upload");
      e.target.value = "";
      setPsFiles("");
    } else {
      setPsFiles(e.target?.files[0]);
      // setPassportFileName(e.target?.files[0]?.name);
      // console.log(e.target?.files[0]);
    }
  }
  function onSslcFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 4042678) {
      toast.error("File size greater than 4 MB, Please compress and upload");

      e.target.value = "";

      setSslcFiles("");
    } else {
      setSslcFiles(e.target?.files[0]);
      // setSslcFileName(e.target?.files[0]?.name);
    }
  }
  function onPlusTwoFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 4042678) {
      toast.error("File size greater than 4 MB, Please compress and upload");
      e.target.value = "";

      setPlusTwoFiles("");
    } else {
      setPlusTwoFiles(e.target?.files[0]);
      // setPlustwoFileName(e.target?.files[0]?.name);
    }
  }
  function onDegreeFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 4042678) {
      toast.error("File size greater than 4 MB, Please compress and upload");
      e.target.value = "";
      setDegreeFiles("");
    } else {
      setDegreeFiles(e.target?.files[0]);
      // setDegreeFileName(e.target?.files[0]?.name);
      setIfUploaded({ ...ifUploaded, degree: true });
    }
  }
  function onIeltsFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 4042678) {
      toast.error("File size greater than 4 MB, Please compress and upload");
      e.target.value = "";

      setIeltsFiles("");
    } else {
      setIeltsFiles(e.target?.files[0]);
      // setIeltsFileName(e.target?.files[0]?.name);
      setIfUploaded({ ...ifUploaded, ielts: true });
    }
  }
  function onExperienceFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 4042678) {
      toast.error("File size greater than 4 MB, Please compress and upload");
      e.target.value = "";

      setExperienceFiles("");
    } else {
      setExperienceFiles(e.target?.files[0]);
      // setExperienceFileName(e.target?.files[0]?.name);
      setIfUploaded({ ...ifUploaded, experience: true });
    }
  }
  function onSopFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 4042678) {
      toast.error("File size greater than 4 MB, Please compress and upload");
      e.target.value = "";

      setSopFiles("");
    } else {
      setSopFiles(e.target?.files[0]);
      // setSopFileName(e.target?.files[0].name);
      setIfUploaded({ ...ifUploaded, sop: true });
    }
  }
  function onLorFileUpload(e) {
    e.preventDefault();
    if (e.target?.files[0]?.size > 4042678) {
      toast.error("File size greater than 4 MB, Please compress and upload");
      e.target.value = "";

      setLorFiles("");
    } else {
      setLorFiles(e.target?.files[0]);
      // setLorFileName(e.target?.files[0]?.name);
      setIfUploaded({ ...ifUploaded, lor: true });
    }
  }

  const onUniversityUpload = (e) => {
    e.preventDefault();
    setUniversity(e.target.value);
  };
  const uploadCvFile = async () => {
    if (cvFiles) {
      const formData = new FormData();
      formData.append("cvfile", cvFiles);
      await cvFileUpload(formData, userInfo);
      // console.log("uploaded");
    } else {
      console.log("no cv file");
    }
  };
  const uploadPsFile = async () => {
    const formData = new FormData();
    formData.append("psfile", psFiles);
    await psFileUpload(formData, userInfo);
    // console.log("uploaded");
  };
  const uploadSslcFile = async () => {
    const formData = new FormData();
    formData.append("sslcfile", sslcFiles);
    await SslcFileUpload(formData, userInfo);
    // console.log("uploaded");
  };
  const uploadPlusTwoFile = async () => {
    const formData = new FormData();
    formData.append("plustwofile", plusTwoFiles);
    await PlusTwoFileUpload(formData, userInfo);
    // console.log("uploaded");
  };
  const uploadDegreeFile = async () => {
    if (degreeFiles) {
      const formData = new FormData();
      formData.append("degreefile", degreeFiles);
      await DegreeFileUpload(formData, userInfo);
      // console.log("uploaded");
    } else {
      console.log("no degree file");
    }
  };
  const uploadIeltsFile = async () => {
    if (ieltsFiles) {
      const formData = new FormData();
      formData.append("ieltsfile", ieltsFiles);
      await IeltsFileUpload(formData, userInfo);
      // console.log("uploaded");
    } else {
      console.log("no ielts file");
    }
  };
  const uploadExperienceFile = async () => {
    if (experienceFiles) {
      const formData = new FormData();
      formData.append("experiencefile", experienceFiles);
      await ExperienceFileUpload(formData, userInfo);
      // console.log("uploaded");
    } else {
      console.log("no experience file");
    }
  };
  const uploadSopFile = async () => {
    if (sopFiles) {
      const formData = new FormData();
      formData.append("sopfile", sopFiles);
      await SopFileUpload(formData, userInfo);
      // console.log("uploaded");
    } else {
      console.log("no sop file");
    }
  };
  const uploadLorFile = async () => {
    if (lorFiles) {
      const formData = new FormData();
      formData.append("lorfile", lorFiles);
      await LorFileUpload(formData, userInfo);
      // console.log("uploaded");
    } else {
      console.log("no lor file");
    }
  };
  const uploadUniversity = async () => {
    if (university) {
      await universityUpload(university, userInfo);
      setUniversity("");
      // console.log("uploaded");
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
      if (ifUploaded.cv) {
        await uploadCvFile();
      }
      if (ifUploaded.degree) {
        await uploadDegreeFile();
      }
      if (ifUploaded.ielts) {
        await uploadIeltsFile();
      }
      if (ifUploaded.experience) {
        await uploadExperienceFile();
      }
      if (ifUploaded.sop) {
        await uploadSopFile();
      }
      if (ifUploaded.lor) {
        await uploadLorFile();
      }
      uploadUniversity();
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

            {/* <small className="form__small mb-3">
              Documents should be less than 1MB!
            </small> */}

            <form
              onSubmit={(e) => UploadMultipleFiles(e)}
              className="upload__form"
            >
              <div className="mb-2 fileInput__item">
                <label>1. Choose University</label>
                <select
                  required
                  value={university}
                  placeholder="Select University"
                  onChange={onUniversityUpload}
                  className="uploadFile__button"
                >
                  <option value="">No University Selected</option>
                  <option value="ANGLIA RUSKIN UNIVERSITY">
                    ANGLIA RUSKIN UNIVERSITY
                  </option>
                  <option value="BOURNEMOUTH UNIVERSITY">
                    BOURNEMOUTH UNIVERSITY
                  </option>
                  <option value="BPP UNIVERSITY">BPP UNIVERSITY</option>
                  <option value="CARDIFF UNIVERSITY">CARDIFF UNIVERSITY</option>
                  <option value="CHESTER UNIVERSITY">CHESTER UNIVERSITY</option>
                  <option value="COVENTRY UNIVERSITY">
                    COVENTRY UNIVERSITY
                  </option>
                  <option value="DE MONTFORT UNIVERSITY">
                    DE MONTFORT UNIVERSITY
                  </option>
                  <option value="EDINBURGH NAPIER UNIVERSITY">
                    EDINBURGH NAPIER UNIVERSITY
                  </option>
                  <option value="EDINBURGH UNIVERSITY">
                    EDINBURGH UNIVERSITY
                  </option>
                  <option value="HARIOT WATT UNIVERSITY">
                    HARIOT WATT UNIVERSITY
                  </option>
                  <option value="IMPERIAL COLLEGE LONDON">
                    IMPERIAL COLLEGE LONDON
                  </option>
                  <option value="KING'S COLLEGE LONDON">
                    KING'S COLLEGE LONDON
                  </option>
                  <option value="LEEDS BECKETT UNIVERSITY">
                    LEEDS BECKETT UNIVERSITY
                  </option>
                  <option value="LONDON METROPOLITAN UNIVERSITY">
                    LONDON METROPOLITAN UNIVERSITY
                  </option>
                  <option value="MANCHESTER METROPOLITAN UNIVERSITY">
                    MANCHESTER METROPOLITAN UNIVERSITY
                  </option>
                  <option value="MIDDLESEX UNIVERSITY">
                    MIDDLESEX UNIVERSITY
                  </option>
                  <option value="NORTHOMPTON UNIVERSITY">
                    NORTHOMPTON UNIVERSITY
                  </option>
                  <option value="NORTHUMBRIA UNIVERSITY">
                    NORTHUMBRIA UNIVERSITY
                  </option>
                  <option value="NOTTINGHAM UNIVERSITY">
                    NOTTINGHAM UNIVERSITY
                  </option>
                  <option value="OXFORD UNIVERSITY">OXFORD UNIVERSITY</option>
                  <option value="SHAFFIELD HALLAM UNIVERSITY">
                    SHAFFIELD HALLAM UNIVERSITY
                  </option>
                  <option value="SOLENT UNIVERSITY">SOLENT UNIVERSITY</option>
                  <option value="STAFFORDSHIRE UNIVERSITY">
                    STAFFORDSHIRE UNIVERSITY
                  </option>
                  <option value="TEESSIDE UNIVERSITY">
                    TEESSIDE UNIVERSITY
                  </option>
                  <option value="THE UNIVERSITY OF LIVERPOOL">
                    THE UNIVERSITY OF LIVERPOOL
                  </option>
                  <option value="ULSTER UNIVERSITY ">ULSTER UNIVERSITY</option>
                  <option value="UNI OF WALES">UNI OF WALES</option>
                  <option value="UNIVERSITY OF ROEHAMPTON">
                    UNIVERSITY OF ROEHAMPTON
                  </option>
                  <option value="UNIVERSITY COLLEGE LONDON">
                    UNIVERSITY COLLEGE LONDON
                  </option>
                  <option value="UNIVERSITY OF  CENTRAL LENKASHIRE">
                    UNIVERSITY OF CENTRAL LENKASHIRE
                  </option>
                  <option value="UNIVERSITY OF BOLTON ">
                    UNIVERSITY OF BOLTON
                  </option>
                  <option value="UNIVERSITY OF BRISTOL ">
                    UNIVERSITY OF BRISTOL
                  </option>
                  <option value="UNIVERSITY OF CAMBRIDGE">
                    UNIVERSITY OF CAMBRIDGE
                  </option>
                  <option value="UNIVERSITY OF EAST LONDON">
                    UNIVERSITY OF EAST LONDON
                  </option>
                  <option value="UNIVERSITY OF EDINBURGH">
                    UNIVERSITY OF EDINBURGH
                  </option>
                  <option value="UNIVERSITY OF EDINBURGH">
                    UNIVERSITY OF EDINBURGH
                  </option>
                  <option value="UNIVERSITY OF GREENWICH">
                    UNIVERSITY OF GREENWICH
                  </option>
                  <option value="UNIVERSITY OF HERTFORDSHIRE">
                    UNIVERSITY OF HERTFORDSHIRE
                  </option>
                  <option value="UNIVERSITY OF HUDDERSFIELD">
                    UNIVERSITY OF HUDDERSFIELD
                  </option>
                  <option value="UNIVERSITY OF LEEDS">
                    UNIVERSITY OF LEEDS
                  </option>
                  <option value="UNIVERSITY OF LEICESTER">
                    UNIVERSITY OF LEICESTER
                  </option>
                  <option value="UNIVERSITY OF MANCHESTER">
                    UNIVERSITY OF MANCHESTER
                  </option>
                  <option value="UNIVERSITY OF NOTTINGHAM">
                    UNIVERSITY OF NOTTINGHAM
                  </option>
                  <option value="UNIVERSITY OF SALFORD">
                    UNIVERSITY OF SALFORD
                  </option>
                  <option value="UNIVERSITY OF SOUTH WALES">
                    UNIVERSITY OF SOUTH WALES
                  </option>
                  <option value="UNIVERSITY OF SOUTHOMPTON">
                    UNIVERSITY OF SOUTHOMPTON
                  </option>
                  <option value="UNIVERSITY OF WEST LONDON">
                    UNIVERSITY OF WEST LONDON
                  </option>
                </select>

                {/* <input
                  type="text"
                  value={university}
                  placeholder="Enter University"
                  className="uploadFile__button"
                  onChange={onUniversityUpload}
                /> */}
              </div>
              <div className="mb-2 fileInput__item">
                <label>2. Updated curriculum vitae ( CV )</label>
                <input
                  type="file"
                  placeholder="choose file"
                  className="uploadFile__button"
                  onChange={(e) => onCvFileUpload(e)}
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
                />
                {/* <label className="label" htmlFor="customFile">
                {passportFileName}
              </label> */}
              </div>
              <div className="mb-2 fileInput__item">
                <label>4. SSLC Certificate *</label>

                <input
                  type="file"
                  required
                  className="uploadFile__button"
                  onChange={(e) => onSslcFileUpload(e)}
                />
                {/* <label className="label" htmlFor="customFile">
                {sslcFileName}
              </label> */}
              </div>
              <div className="mb-2 fileInput__item">
                <label>5. Plus two Certificate *</label>

                <input
                  type="file"
                  required
                  className="uploadFile__button"
                  onChange={(e) => onPlusTwoFileUpload(e)}
                />
                {/* <label className="label" htmlFor="customFile">
                {plustwoFileName}
              </label> */}
              </div>
              <div className="mb-2 fileInput__item">
                <label>
                  6. Degree certificate with consolidated mark sheet and
                  semester certificates
                </label>

                <input
                  type="file"
                  className="uploadFile__button"
                  onChange={(e) => onDegreeFileUpload(e)}
                />
                {/* <label className="label" htmlFor="customFile">
                {degreeFileName}
              </label> */}
              </div>
              <div className="mb-2 fileInput__item">
                <label>7. English language test result -IELTS ( If any )</label>

                <input
                  type="file"
                  className="uploadFile__button"
                  onChange={(e) => onIeltsFileUpload(e)}
                />
                {/* <label className="label" htmlFor="customFile">
                {ietlsFileName}
              </label> */}
              </div>
              <div className="mb-2 fileInput__item">
                <label>8. Experience letter ( If any )</label>

                <input
                  type="file"
                  className="uploadFile__button"
                  onChange={(e) => onExperienceFileUpload(e)}
                />
                {/* <label className="label" htmlFor="customFile">
                {experienceFileName}
              </label> */}
              </div>
              <div className="mb-2 fileInput__item">
                <label>
                  9. Statement of purpose - SOP for your selected programmes
                </label>

                <input
                  type="file"
                  className="uploadFile__button"
                  onChange={(e) => onSopFileUpload(e)}
                />
                {/* <label className="label" htmlFor="customFile">
                {sopFileName}
              </label> */}
              </div>
              <div className="mb-2 fileInput__item">
                <label>10. Letter of reccomendation</label>

                <input
                  type="file"
                  className="uploadFile__button"
                  onChange={(e) => onLorFileUpload(e)}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
