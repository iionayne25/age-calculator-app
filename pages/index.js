import Head from "next/head";
import InputBox from "@/components/InputBox";
export default function Home({ data }) {
  console.log("data", data);
  return (
    <>
      <Head>
        <title>Age Calculator App</title>
        <link rel="icon" href="favicon.png" />
      </Head>
      <main className="min-h-screen mx-4 pt-20 xl:pt-0 xl:flex xl:justify-center xl:items-center  ">
        <div
          className=" py-6 w-full h-[500px] bg-white 
      rounded-t-3xl rounded-bl-3xl rounded-br-[110px] xl:w-1/2 xl:justify-center xl:self-center 
      xl:rounded-t-2xl xl:rounded-bl-2xl xl:rounded-br-[150px]
      "
        >
          <InputBox />
        </div>
      </main>
    </>
  );
}
