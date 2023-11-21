import Image from "next/image";
import Link from "next/link";

export default function Example() {
  return (
    <div className="bg-white flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-xl"
              src="/screen.png"
              alt="Screen shot"
              width={620}
              height={37}
              priority
            />
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg ">
              {/* <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#17181c] sm:text-4xl">
                Partykit Multi Document Collaborative Text Editor{" "}
              </h1> */}
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-red-400">
                Partykit Multi Document Collaborative Text Editor
              </h1>

              <div className="max-w-xl">
                <p className="mt-6">
                  To create a new collaborative document (which will create a
                  new partykit room), simply add a path segment to the base URL.
                  For example
                  <Link href="http://localhost:3000/myDocument" target="_blank">
                    <code className="bg-gray-200 text-purple-800 rounded ml-1 px-1 py-1 font-mono text-sm">
                      http://localhost:3000/myDocument
                    </code>
                  </Link>
                </p>
                <p className="mt-8">
                  Accessing the same URL in a different tab will take you to the
                  same collaborative document.
                </p>
                <p className="mt-8">Enjoy your collaboration! 🎈🎉</p>
              </div>
            </div>

            <div className="mt-10 flex">
              <Link
                href="https://docs.partykit.io/"
                target="_blank"
                className="text-base font-semibold leading-7 text-[#17181c]"
              >
                Read the docs <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
