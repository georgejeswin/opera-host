import React from "react";
import "./ServicesPage.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
  media: {
    height: 240,
  },
});

const ServicesPage = () => {
  return (
    <div className="servicesPage">
      <div className="servicesPage__top">
        <h3 className="top__h3">Our Services</h3>
      </div>
      <div className="services__items container-fluid">
        <ServicesCard
          img="https://cdn.statically.io/img/866821.smushcdn.com/1939086/wp-content/uploads/student-counselling-advice.jpg?lossy=1&strip=1&webp=1&quality=100&f=auto"
          title="Admission Counseling"
          content=" We access your qualification, interest and aptitude and suggest you
            the best course and institute around. Once you decide for the course
            and institute, application forms are filled and sendto institute
            along with fee."
        />
        <ServicesCard
          img="https://flyonacademy.com/wp-content/uploads/2019/01/confidential-assistance-home.jpg"
          title="Placement Assistance"
          content=" By our network of high quality academicians and professionals
            worldwide, we arrange various job opportunities for the students to
            be an excellent professional. We help the students to connect with
            the local community"
        />

        <ServicesCard
          img="https://www.tomorrowmakers.com/sites/default/files/2020-02/financial%20planning%20dummies%20updated.jpg"
          title="Financial Guidelines"
          content=" To find the finance required for the desired study package and
            ensure its stability, we assist the students and parents to avail
            various educational loans from concerned banks, help the
            students who are eligible to get received scholarships or
            sponsorships."
        />
        <ServicesCard
          img="https://www.chetanyacareers.com/wp-content/uploads/2020/12/image-international-student-population-2.jpg"
          title="Career Guidance"
          content=" We help students to plan their career according to the rapidly
            changing needs of the complex global economy & We assist in all the
            legal actions if required for a student during the academic period
            in completion of their courses"
        />
      </div>
    </div>
  );
};

// const ServiceCard = ({ img, title, content }) => {
//   return (
//     <div className="serviceCard">
//       <img src={img} alt="" className="serviceCard__img" />
//       <h3>{title}</h3>
//       <p>{content}</p>
//       <Link to="/" className="serviceCard__link">
//         Learn More &nbsp;
//         <i className="fas fa-angle-right"></i>
//       </Link>
//     </div>
//   );
// };

const ServicesCard = ({ img, title, content }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} className="servicesCard__card">
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServicesPage;
