import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const AboutMyJourney = () => {
  return (
    <div className="aboutMyStory">
      <VerticalTimeline
        lineColor="#3e1454"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e1454", color: "#fff" }}
          icon={<i className="fa-solid fa-building-columns about-icon"></i>}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Technology in ECE
          </h3>
          <br />
          <h3 className="vertical-timeline-element-title">Score: 8.2 CGPA</h3>
          <p> P.V.P Siddhartha Institute of Technology</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2018"
          iconStyle={{ background: "#3e1454", color: "#fff" }}
          icon={<i className="fa-solid fa-graduation-cap about-icon"></i>}
        >
          <h3 className="vertical-timeline-element-title">
            Electronics & Communications Engineering
          </h3>
          <br />
          <h3 className="vertical-timeline-element-title"> Score: 89.4 %</h3>
          <p> Govt Polytechnique</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2015"
          iconStyle={{ background: "#3e1454", color: "#fff" }}
          icon={<i className="fa-solid fa-building-columns about-icon"></i>}
        >
          <h3 className="vertical-timeline-element-title">
            Secondary Education
          </h3>
          <br />
          <h3 className="vertical-timeline-element-title">Score: 9.5 CGPA</h3>

          <p>Z.P High School</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default AboutMyJourney;
