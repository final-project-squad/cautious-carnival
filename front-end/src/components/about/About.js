import React from "react";
import Header from "../header/header";
/* import {Link} from "react-router-dom" */
import "./About.css";

function About() {
  return (
    <div className={"aboutheader"}>
      <Header />

      <p>
        We want to see the major cities turn green, whether that be on balconies,
        rooftops or windowsils.
      </p>
      <p>
        Through our extensive database and sophisticated search functionality,
        we can help you to find the perfect plant for your pot!
      </p>
      <h2>What are you looking for?</h2>
      <div className={"titles"}>
          <h3>Pet Friendly?</h3>
          <h3>Low Maintenance?</h3>
          <h3>Sun Lovers?</h3>
      </div>
      <div className={"icons"}>
        <div className={"peticon"}>
          <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 407 258">
            <path
              className="st0"
              d="M182.58,98.5c11.76-0.69,18.61-8.86,17.24-20.22c-2.86-23.83-17.05-37.63-37.53-41.56
                    c-10.83-2.08-22.39-0.31-33.62-0.38c-9.26-0.06-17.89,2.2-25.42,7.56C89.68,53.53,82.86,66.7,83.76,83.52
                    c0.51,9.49,6.51,14.65,17.21,14.98"
            />
            <path
              className="st0"
              d="M173.59,120.96c5.48,4.78,6.46,11.54,6.59,17.97c0.41,20.46,0.26,40.93,0.09,61.39
                    c-0.06,7.28-3.66,13.53-10.5,15.43c-7.37,2.05-15.48,2.68-22.38-2.7c-2.38-1.85-3.71-4.88-6.74-5.99"
            />
            <path
              className="st0"
              d="M328.58,192.09c10.08-2.46,16.9-11.41,17.24-22.46c0.11-3.5-0.18-7.21,0.9-10.42c1.18-3.5,1.58-8.53,7.31-8.28
                    c5.26,0.22,7.97,4.15,8.82,8.26c3.74,18.09-1.7,36.7-16.28,47.17c-8.57,6.15-18.32,8.19-28.48,8.89
                    c-5.22,0.36-10.51-0.32-15.71,0.16c-6.5,0.61-10.54-3.38-14.98-6.84"
            />
            <path
              className="st0"
              d="M226,125.45c-4.56,4.56-6.09,10.11-6.04,16.47c0.15,18.97,0.29,37.94-0.05,56.9c-0.15,8.65,5,14.52,12.1,16.41
                    c7.21,1.92,18.86-3,21.6-8.96c0.66-1.44,0.1-3.45,0.1-5.2c0-11.98,0-23.96,0-35.94"
            />
            <path
              className="st0"
              d="M234.24,61.06c-4.74-3.49-9.43-7.07-14.24-10.46c-4.03-2.84-8.11-1.7-8,2.96c0.43,17.98-3.34,36.43,2.93,53.86
                    c10.4,28.9,47.23,30.41,65.68,17.19c10.26-7.35,15.1-17.89,15.05-30.61c-0.06-12.48-0.08-24.96,0.03-37.44
                    c0.03-3.03-0.02-6.13-3.09-7.37c-2.71-1.1-4.73,1.18-6.7,2.86c-3.65,3.11-7.38,6.13-11,9.13c-13.45-5.36-26.67-5.97-39.9-0.13"
            />
            <path
              className="st0"
              d="M288.15,120.21c26.29,16.09,35.13,41.98,39.2,70.4c0.66,4.63-0.14,9.47-0.26,14.21"
            />
            <path
              className="st0"
              d="M106.21,114.22c-21.02,10.3-31.83,28.71-40.67,49.32c-5.21,12.17-4,24.41-4.26,36.79"
            />
            <path
              className="st0"
              d="M102.46,62.56c-0.25,10.23,0.03,20.52-0.93,30.68c-0.67,7.13,1.44,14.47,4.46,19.13
                    c7.21,11.12,17.8,19.24,32.4,19.89c12.57,0.55,24.37-2.52,32.62-11.59c6.34-6.98,11.12-15.84,10.24-26.68
                    c-0.84-10.41-0.18-20.95-0.18-31.43"
            />
            <path
              className="st0"
              d="M102.46,155.4c0,14.73,0,29.45,0,44.18c0,11.39,6.59,17.22,19.47,17.22c12.37,0,19.46-6.27,19.47-17.22
                    c0.01-10.73,0-21.46,0-32.2"
            />
            <path
              className="st0"
              d="M287.4,159.9c0.41,13.97-0.72,27.96,0.67,41.94c0.61,6.17-6.5,12.49-14.15,13.5
                    c-8.17,1.07-14.28-2.45-19.47-8.26"
            />
            <path
              className="st0"
              d="M59.78,176.37c-4-3.36-6.23-7.65-7.59-12.7c-0.7-2.6-1.65-5.16-3.03-7.5c-1.23-2.07-4.09-2.38-5.69-0.59
                    l-0.31,0.34c-0.22,0.25-0.41,0.52-0.56,0.82c-4.4,8.81-2.83,18.58-0.68,27.84c2.52,10.83,6.21,21.07,16.26,27.89
                    c4.34,2.94,8.8,3.76,13.59,4.3c1.97,0.22,4-0.11,5.98,0.06c9.66,0.82,18.8,0.12,25.46-8.26"
            />
            <path
              className="st0"
              d="M124.92,162.14c10.98,4.82,21.96,4.82,32.94,0"
            />
            <path
              className="st0"
              d="M242.47,158.4c3.59,3.94,9.85,5.88,14.23,4.51c2.71-0.85,5.49-1.52,8.23-2.26"
            />
          </svg>
        </div>
        <div className={"easyicon"}>
          <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 407 258">
            <circle class="st0" cx="203" cy="129" r="83" />
            <polyline
              class="st0"
              points="149.77,129.9 187.66,169.6 258.03,96.52 "
            />
          </svg>
        </div>
        <div className={"sunicon"}>
          <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 407 258">
            <circle class="st0" cx="203.5" cy="129.5" r="60.29" />
            <line class="st0" x1="202.79" y1="56.44" x2="202.79" y2="40.84" />
            <line class="st0" x1="202.79" y1="218.16" x2="202.79" y2="202.56" />
            <line class="st0" x1="137.69" y1="194.6" x2="148.73" y2="183.56" />
            <line class="st0" x1="259.69" y1="184.98" x2="270.73" y2="196.02" />
            <line class="st0" x1="139.11" y1="64.4" x2="150.14" y2="75.44" />
            <line class="st0" x1="257.56" y1="74.73" x2="268.6" y2="63.69" />
            <line class="st0" x1="112" y1="130.21" x2="127.6" y2="130.21" />
            <line class="st0" x1="279.4" y1="130.21" x2="295" y2="130.21" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default About;
