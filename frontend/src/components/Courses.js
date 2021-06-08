import React from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
});
const Courses = () => {
  return (
    <div className="courses">
      <h1 className="heading__h1">Study Abroad Courses</h1>
      <div className="courses__items container-fluid">
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://asiasociety.org/sites/default/files/styles/1200w/public/B/blog-australianstudents.png" />
        <CoursesComp bg="https://www.cicnews.com/wp-content/uploads/2020/02/20200220_InternationalStudentsRecordNumbers.jpg" />
        <CoursesComp bg="https://www.cicnews.com/wp-content/uploads/2020/02/20200220_InternationalStudentsRecordNumbers.jpg" />
        <CoursesComp bg="https://www.cicnews.com/wp-content/uploads/2020/02/20200220_InternationalStudentsRecordNumbers.jpg" />
        <CoursesComp bg="https://www.cicnews.com/wp-content/uploads/2020/02/20200220_InternationalStudentsRecordNumbers.jpg" />
        <CoursesComp bg="https://www.cicnews.com/wp-content/uploads/2020/02/20200220_InternationalStudentsRecordNumbers.jpg" />
      </div>
      <button className="register__button">View All</button>
    </div>
  );
};

const CoursesComp = ({ bg, page }) => {
  const classes = useStyles();

  return (
    <div className="coursesCard" style={{ backgroundImage: `url(${bg})` }}>
      <h4 className="coursesCard__h4">Course</h4>
      {/* <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, maxime.
        Nulla aperiam dolor....
      </p> */}
      <Link to={page}>
        <p className="coursesCard__button">
          Read More &nbsp; <i class="fas fa-chevron-right"></i>
        </p>
      </Link>
    </div>
    // <Card className={classes.root} className="coursesCard">
    //   <CardActionArea>
    //     <CardMedia
    //       className={classes.media}
    //       image="https://www.cicnews.com/wp-content/uploads/2020/02/20200220_InternationalStudentsRecordNumbers.jpg"
    //       title="Contemplative Reptile"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         Course
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button size="small" color="primary">
    //       Learn More
    //     </Button>
    //   </CardActions>
    // </Card>
  );
};

export default Courses;
