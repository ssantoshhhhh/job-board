import React, { useEffect, useState } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/jobs")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Available Jobs</h1>
      {jobs.length === 0 ? (
        <p>No jobs found. Please check back later!</p>
      ) : (
        <ul style={listStyle}>
          {jobs.map((job) => (
            <li key={job._id} style={itemStyle}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>Location: {job.location}</p>
              <p>Salary: ${job.salary}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const listStyle = { listStyle: "none", padding: 0 };
const itemStyle = {
  marginBottom: "20px",
  padding: "15px",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

export default JobList;
