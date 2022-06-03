import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function StudentList() {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, sethasMore] = useState(false);

  const apiCall = (newPageNumber) => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/student?_page=${newPageNumber}&_limit=5`)
      .then((res) => {
        setLoading(false);
        setData([...data, ...res.data]);
      });
  };

  useEffect(() => {
    apiCall(pageNumber);
  }, []);

  console.log(pageNumber);

  return (
    <div>
      <InfiniteScroll
        dataLength={data.length}
        next={() => {
          apiCall(pageNumber + 1);
          setPageNumber(pageNumber + 1);
        }}
        hasMore={true}
      >
        {loading && "Loading"}
        {data.map((e, index) => {
          return (
            <div className="dataDiv" key={e.id}>
              {e.name}
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}
