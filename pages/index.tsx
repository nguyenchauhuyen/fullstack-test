import Head from "next/head";
import React, { useRef } from "react";
import styles from "../styles/Home.module.css";
import DynamicText from "../components/DynamicText";
import { Link, Box, Container, Input } from "@chakra-ui/react";

const Home = () => {
  const textInput = useRef(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    textInput.current.changeValue(e.target.value);
  };

  return (
    <Container maxW="xl" centerContent>
      <Head>
        <title>Coding Test</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <Box padding="20" marginTop="60" bg="gray.100" maxW="3xl">
        <DynamicText ref={textInput} />
        <Input onChange={onChange} variant="outline" bg="white"/>
      </Box>
    </Container>
  );
};

export default Home;
