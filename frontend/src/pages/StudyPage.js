import React, { useEffect, useState } from "react";
import "./StudyPage.css";
import Armenia from "../components/images/Armenia.jpg";
import Australia from "../components/images/australia.jpg";
import China from "../components/images/china.jpg";
import Dubai from "../components/images/duabai.jpg";
import France from "../components/images/france.jpg";
import Georgia from "../components/images/georgia.jpg";
import Germany from "../components/images/germany.jpg";
import Ireland from "../components/images/ireland.jpg";
import Italy from "../components/images/italy.jpg";
import Latvia from "../components/images/latvia.jpg";
import Malta from "../components/images/malta.jpg";
import Norway from "../components/images/norway.jpg";
import NZ from "../components/images/nz.jpg";
import Poland from "../components/images/poland.jpg";
import Russia from "../components/images/russia.jpg";
import Singapore from "../components/images/Singapore.jpg";
import Sweden from "../components/images/swedan.jpg";
import UK from "../components/images/uk.jpg";
import Ukraine from "../components/images/ukraine.jpg";
import USA from "../components/images/usa.jpg";
import SL from "../components/images/switzerland.jpg";
import Canada from "../components/images/canada.jpg";

import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const StudyPage = () => {
  return (
    <div className="studyPage">
      <div className="studyPage__top">
        <h3 className="top__h3">Study In</h3>
      </div>
      <div className="studyPage__items container-fluid my-5">
        <StudyPageCard
          bg={UK}
          country="UK"
          content="British qualifications are recognised and respected around the world. The UK enjoys a reputation for unsurpassed quality throughout the world. It encourages skills that are relevant, marketable and much sought-after by today’s top companies which means students can look forward to better career prospects and higher potential earnings."
        />
        <StudyPageCard
          bg={Germany}
          country="Germany"
          content="German education offers the possibility to study with students across the globe and hence establish international contacts. Known for some of the best intellectual and creative minds in history, Germany offers an affordable first rate education landscape set in the heart of Europe with endless possibilities for career growth, travel and cultural exploration."
        />
        <StudyPageCard
          bg={Canada}
          country="Canada"
          content="Canada is a hugely popular choice as an overseas study destination for a host of reasons. From secure environment to first-rate education system, abundant opportunities to buzzling city life and picturesque locations, Canada offers everything you could possibly want from life."
        />
        <StudyPageCard
          bg={NZ}
          country="New Zealand"
          content="The eight institutions that make up the New Zealand university system are located in cities across the country’s two main islands, the North and the South. This distribution gives students the chance to pursue a wide range of opportunities in the study, work, recreation and culture."
        />
        <StudyPageCard
          bg={France}
          country="France"
          content="Each year, almost 130,000 young people from all over the world come to France to study because of its high level of cultural and technological development, its modernity and also because of the quality of life France offers, the richness of its heritage, the French language and, especially, Frances reputation in the field of higher education."
        />
        <StudyPageCard
          bg={Australia}
          country="Australia"
          content="The Australian education system has a strong international reputation and is known for its effective structure and innovative policy developments. Many other countries, eager to improve their own education systems, turn to Australia for advice."
        />
        <StudyPageCard
          bg={Singapore}
          country="Singapore"
          content="Singapore is the premier education hub of Asia where tradition and modernity tastefully unite offering students a truly global educational experience. Singapore education is based on a broad base curriculum and global perspective that equips them to excel in the competitive job market."
        />
        <StudyPageCard
          bg={SL}
          country="Switzerland"
          content="Switzerland is a mountainous nation renowned for its outstanding universities, research institutions and high quality of life with plenty of opportunities to explore natural beauty and of courses enjoy some of the best chocolates and fondue in the world."
        />
        <StudyPageCard
          bg={USA}
          country="USA"
          content="American universities are widely known for the quality of their teaching and research. The United States is the number one and largest destination for international students seeking higher education overseas or study abroad."
        />
        <StudyPageCard
          bg={Ireland}
          country="Ireland"
          content="Ireland is one of the best-educated countries in the European Union and continues to be a destination of choice for international businesses from around the globe, based largely on the quality of Ireland’s education system.
It represent a practical and proven gateway to a wide range of university and career choices."
        />
        <StudyPageCard
          bg={Italy}
          country="Italy"
          content="Italy is counted as eight most industrialized countries in the world with a strong manufacturing industry and robust net work of scientific parks, offering ample scope for cutting edge research and job opportunities in diverse fields. Its world heritage sites, varied land and seascapes, easy going people, fashion and fabulous food makes Italy truly irresistible for international students."
        />
        <StudyPageCard
          bg={Ukraine}
          country="Ukraine"
          content="Quality education at an affordable cost has made Ukraine the most popular student abroad study destinations. Ukraine offers Medical degree programs recognized by WHO, UNESCO, PLAB (UK), USMLE (USA), throughout the EU and Various International Organizations."
        />
        <StudyPageCard
          bg={Russia}
          country="Russia"
          content="Russia is a hospitable and inviting country. Geographically the biggest country on the planet, Russia has in store something for everyone Beyond Bears, vodka, ballet and Easter eggs, this erstwhile part of now defunct Soviet Union is a mighty power in the international political order."
        />
        <StudyPageCard
          bg={Sweden}
          country="Sweden"
          content="Sweden is a Continental country with myriad opportunities to get involved in Sweden’s cultural activities via the, plays, exhibitions and concert held all the year. Sweden pays Students US$187 per month to attend the High School. Sweden is the good destination as there are tuition free universities in Sweden with careers in English for global students."
        />
        <StudyPageCard
          bg={Armenia}
          country="Armenia"
          content="Armenia is an interesting country rich with the heritage of the past, beautiful landscapes, high mountaintops, and unique formations. The number of higher education opportunities is somewhat limited when compared with other countries. The heavy focus on Medicine, Law, or Business make it a great place to go if you wish to make one of these areas your life's career."
        />
        <StudyPageCard
          bg={China}
          country="China"
          content="China is one of the most sought after study destinations by international students, thanks to its world class universities with futuristic curriculum that make one stand out in a competitive job market. Study in China and experience its rich culture, breathtaking beauty and high end life."
        />
        <StudyPageCard
          bg={Dubai}
          country="Dubai"
          content="The latest addition to the list of best abroad studies destination. Dubai is a country with the fastest-growing economy that offers international students wide career opportunities. For international students, Dubai is the right place to study for a number of reasons, it is safe, cheaper, hospitable, an international business centre, a cosmopolitan city, etc."
        />
        <StudyPageCard
          bg={Georgia}
          country="Georgia"
          content="Located in the Caucasus, Georgia is a small country that’s rich in history and culture and is also home to 10000+ international students. Georgia is an extremely affordable country with great universities and great career opportunities."
        />
        <StudyPageCard
          bg={Latvia}
          country="Latvia"
          content="Latvia is a country with varied landscapes, sprawling cities and age-old cultural traditions. Latvia offers students, the best in world class education, both in terms of streams and diversity of study programs."
        />
        <StudyPageCard
          bg={Malta}
          country="Malta"
          content="Even though the country is small in size, Malta has some truly unique features that draw students to the island destination. Malta follows the British education system and it helps international students to avail themselves the complete benefit of studying in the UK without even going to the UK."
        />
        <StudyPageCard
          bg={Norway}
          country="Norway"
          content="Norway is famous for its outdoor culture and rightly so, given the abundance of natural beauty afforded by the country’s many fjords and mountains.  Norway has seven universities, nine specialized university institutions, 22 university colleges, two national colleges of the arts and a number of private higher education institutions."
        />
        <StudyPageCard
          bg={Poland}
          country="Poland"
          content="Polish university education system has a history of 650 years of educating high profile professionals. The quality of the system is guaranteed by the State Accreditation Committee, which monitors all Polish higher education institutions. According to its control results, over 80% of the Polish universities have outstanding and good rankings."
        />
      </div>
    </div>
  );
};

const StudyPageCard = ({ bg, content, country }) => {
  const user = useSelector((state) => ({ ...state.user }));
  const files = useSelector((state) => state.files);
  const history = useHistory();
  const [fileUploaded, setFileUploaded] = useState(false);
  const filesUploaded = (currentuser) => {
    if (files.user === currentuser._id) {
      setFileUploaded(true);
  }
    // files.filter((file) => {
    //   if (file.user === currentuser._id) {
    //     setFileUploaded(true);
    //   }
    // });
  };
  useEffect(() => {
    filesUploaded(user);
  }, [user]);

  const handleClick = (currentuser) => {
    if (files.length === 0) {
      history.push("/upload");
    }
    if (fileUploaded) {
      history.push("/user/status");
    } else {
      history.push("/upload");
    }
  };
  return (
    <div className="coursePageCard">
      <div className="studyPageCard__left">
        <img src={bg} alt="" />
      </div>
      <div className="coursePageCard__right">
        <h3>{country}</h3>
        <hr className="coursePageCard__divider" />
        <p className="coursePageCard__p">{content}</p>
        <button
          className="register__button"
          onClick={() => {
            !user.email ? history.push("/login") : handleClick(user);
          }}
        >
          Apply Now!!
        </button>
      </div>
    </div>
  );
};

export default StudyPage;
