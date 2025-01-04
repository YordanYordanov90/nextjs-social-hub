import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="py-24 h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl py-32 text-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative inline-block rounded-full px-4 py-2 text-sm leading-6 bg-gray-700 text-gray-300 shadow-md ring-1 ring-gray-600 hover:ring-gray-500">
              Join the ultimate social experience.{" "}
              <Link
                href="/sign-up"
                className="font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Sign up now <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl text-gray-100">
            Welcome to <span className="text-emerald-400">Social Hub</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Discover, connect, and share moments with a vibrant community.
            Create posts, follow interesting people, and engage in meaningful
            conversations. Social Hub is your gateway to a smarter social
            experience.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
            <Link
              href="/sign-in"
              className="inline-block rounded-lg bg-emerald-500 px-5 py-3 text-base font-semibold text-gray-900 shadow-lg hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
