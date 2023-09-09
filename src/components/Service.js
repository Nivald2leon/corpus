import React, { useState, useEffect } from "react";
//import axios from "axios";
//import { API_URL } from "../config";

const Service = ({ selectedService, novisible, onDurationChange }) => {
  const [data, setData] = useState([]);

  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${API_URL}/service/${selectedService}`);
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (selectedService) {
      fetchData();
    }
  }, [selectedService]); */

  useEffect(() => {
    if (
      data.duration &&
      onDurationChange &&
      typeof onDurationChange === "function"
    ) {
      onDurationChange(data.duration);
    }
  }, [data, onDurationChange]);

  return (
    <>
      {!novisible ? (
        <div className="card card-body" style={{ height: "40px" }}>
          {data.id ? (
            <h6 >{`${data.description} : $ ${data.price}`}</h6>
          ) : (
            <h6 style={{ color: "red" }}>Seleccione el Servicio</h6>
          )}
        </div>
      ) : null}
    </>
  );
};

export default Service;
