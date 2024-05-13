/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Hero from "@task/components/home/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="flex h-full flex-col items-center md:flex-row">
        <Hero />
      </div>
    </main>
  );
}
