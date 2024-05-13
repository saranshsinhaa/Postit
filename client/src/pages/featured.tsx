/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Hero from "@task/components/home/hero";
import InputModule from "@task/components/home/inputModule";
import Footer from "@task/components/shared/footer";
import Navbar from "@task/components/shared/navbar";
import { type ResponseInterface } from "@task/utils/schema";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState<ResponseInterface | null>(null);
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="flex h-full flex-col items-center md:flex-row">
        {/* {content !== null && content !== undefined ? ( */}
        <InputModule content={content} setContent={setContent} />
        {/* ) : (
          <>
            <InputModule content={content} setContent={setContent} />
          </>
        )} */}
      </div>
    </main>
  );
}
