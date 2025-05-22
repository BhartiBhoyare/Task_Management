import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import axios from "axios";

const Incompleted = () => {
  const [Data, setData] = useState();
  const [change, setchange] = useState(false);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v2/get-incomp-tasks",
        {
          headers,
        }
      );
      setData(response.data.data);
      setchange((change) => !change);
    };
    fetch();
  }, [change]);
  return (
    <div>
      <Cards home={false} data={Data} />
    </div>
  );
};

export default Incompleted;
