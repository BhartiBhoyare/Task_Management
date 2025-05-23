import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import axios from "axios";

const Important = () => {
  const [Data, setData] = useState();
  const [change, setchange] = useState(false);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://task-managementbackend.vercel.app/api/v2/get-imp-tasks",
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

export default Important;
