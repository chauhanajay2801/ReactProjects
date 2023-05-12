import axios from "axios";
import Loader from "./Loader";
import { server } from "../index";
import { useParams } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";
import { React, useState, useEffect } from "react";

const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const params = useParams()


  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/${params.id}`
        );
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  return;
  <Container maxW={"container.xl"}>
    {loading ? (
      <Loader />
    ) : (
      <>
        <Box width={"full"} borderWidth={"1"}>
          heyttttt
        </Box>
      </>
    )}
  </Container>;
};

export default CoinDetails;
