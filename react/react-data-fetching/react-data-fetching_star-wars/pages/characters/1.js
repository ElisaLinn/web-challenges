import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

const url = `https://swapi.py4e.com/api/people/${id}`

async function fetcher(url) {
  const response = await fetch(url);
  return await response.json();
}

export default function Character() {
  const router = useRouter();
  const id = 1;

 const {
    data: character,
    isLoading,
    error,
  } = useSWR(url, fetcher);

 if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;


  return (
    <Layout>
      <Card
        id={id}
        name={"Luke Skywalker"}
        height={172}
        eyeColor={"blue"}
        birthYear={"19BBY"}
      />
    </Layout>
  );
}
