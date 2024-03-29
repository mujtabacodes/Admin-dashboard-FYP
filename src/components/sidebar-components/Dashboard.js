import React, { useEffect, useRef } from "react";
import "./../../assets/css/myTailwind.css";
import { Box, Paper, Grid } from "@material-ui/core";
import "../../assets/css/myTailwind.css";
import "../../assets/css/Dashboard.css";
import LineGraph from "./Graphs/LineGraph";
import DonuteGraph from "./Graphs/DonuteGraph";
import BarGraph from "./Graphs/BarGraph";
import HelloAnimation from './lotties/MyLottie'

export default function Dashboard() {
  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = "";
  const clrGreeting = {};
  if (curDate >= 1 && curDate <= 12) {
    greeting = "Good Morning!";
    clrGreeting.color = "green";
  } else if (curDate >= 13 && curDate <= 17) {
    greeting = "Good Afternoon!";
    clrGreeting.color = "orange";
  } else if (curDate >= 18 && curDate <= 19) {
    greeting = "Good Evening!";
    clrGreeting.color = "purple";
  } else {
    clrGreeting.color = "linear-gradient(to top right, #009900 0%, #66ff99 100%)";
    greeting = "Good Night!";
  }

  // Day with date scene shuro
  const d = new Date();
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = weekDay[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();



  return (
    <>
      <Box>
        {/* Line 1 */}
        <Paper>
          <Grid container spacing={2}>
            <Grid className="head m-5" item xs={6}>
              <div className=" ml-5 text-xs">
                <span>{day} </span>
                <span>{month}</span>
                <span> {date}, </span>
                <span>{year}</span>
              </div>

              <h1 className="greeting">
                Hello Sir, <span></span> <span style={clrGreeting}>{greeting}</span>{" "}
              </h1>
            </Grid>
            <Grid item className="head m-5" xs={6}>
              <div className="container">
               <HelloAnimation/>
              </div>
            </Grid>
          </Grid>
        </Paper>

        {/* Line 2 */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper>
              <div className=" m-5">
                <DonuteGraph />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <div className=" m-5">
                <BarGraph />
              </div>
            </Paper>
          </Grid>
        </Grid>

        {/* Line 3 */}
        <Paper>
          <div className=" m-5">
            <LineGraph />
          </div>
        </Paper>
      </Box>
    </>
  );
}
