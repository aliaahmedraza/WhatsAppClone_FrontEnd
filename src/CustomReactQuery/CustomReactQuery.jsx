import React from "react";
import { useEffect } from "react";

const CustomReactQuery = ({ urlPath }) => {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  useEffect(() => {
    try {
      setIsLoading(true);
      const response = fetch(`http://localhost:4005${urlPath}`);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, []);
  return [data, isLoading, error];
};

export default CustomReactQuery;
