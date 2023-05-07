import Image from "next/image";
import Head from "next/head";
import InputBox from "@/components/InputBox";

import Result from "@/components/Result";
import { stringify } from "postcss";
export default function Home() {

  return (
    <>
      <Head>
        <title>Age Calculator App</title>
        <link rel="icon" href="favicon.png" />
      </Head>
      <main className="min-h-screen mx-4 pt-20  ">
      <div className="flex flex-col justify-between items-center gap-5 py-10 w-full h-[500px] bg-white rounded-t-3xl rounded-bl-3xl rounded-br-[110px] ">
      <InputBox />
      <Result/>
      
      
      </div>
        
        
      </main>
    </>
  );
}

