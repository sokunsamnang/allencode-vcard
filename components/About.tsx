const about =
  "Web developer with enthusiasm for React frameworks, Tailwind and NodeJS" as string;

/* house inforrmation about me */
export default function About(): JSX.Element {
  return (
    <div className="px-6 pt-4 pb-2">
      <span className="block px-3 py-1 my-2 mb-2 text-xl text-black font-bold capitalize">
        About
      </span>
      <p className="block px-3 py-1 my-2 mb-2 text-sm text-gray-600">{about}</p>
    </div>
  );
}
