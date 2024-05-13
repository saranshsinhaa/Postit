/* eslint-disable @next/next/no-img-element */
import {
  type RegenerateInterface,
  type ResponseInterface,
} from "@task/utils/schema";
import { regenerateImage } from "@task/utils/services/rest";
import { useState } from "react";
import Spinner from "../shared/spinner";

const Content = ({ data }: { data: ResponseInterface }) => {
  console.log(data);

  const [image, setImage] = useState<string>(data.url);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerate = async (): Promise<void> => {
    try {
      setLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const response: RegenerateInterface = await regenerateImage(
        data.description
      );
      setImage(response.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="text-center">
        <div className="py-5 text-3xl font-bold">Inspiration Design</div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-full max-w-[600px]"
            src={image}
            alt="image description"
          />
          <button
            className="my-5 mb-2 mr-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={handleGenerate}
          >
            {loading ? <Spinner /> : "Regenerate"}
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2 xl my-4 text-center text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl xl:text-6xl">
          {data.title}
        </h1>
        <p className="text-md my-10 font-medium text-gray-900 sm:px-16 lg:text-xl">
          <span className="font-bold">Description : </span>
          {data.description}
        </p>
        <p className="text-md my-10 font-medium text-gray-900 sm:px-16 lg:text-xl">
          <span className="font-bold">Caption : </span>
          {data.caption}
        </p>

        <div className="flex flex-wrap justify-evenly gap-5">
          <div>
            <h2 className="mb-2 text-lg font-semibold text-gray-900 ">
              # Hash Tags:
            </h2>
            <ol className="max-w-md list-inside list-decimal space-y-1 font-semibold text-gray-700">
              {data.hashtags.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-gray-900 ">
              # Tags
            </h2>
            <ol className="max-w-md list-inside list-decimal space-y-1 font-semibold text-gray-700">
              {data.tags.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
