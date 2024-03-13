const name = "Sam Allen" as string;
const description = "Mobile Developer | Web Developer" as string;
const githubUrl = "https://github.com/sokunsamnang" as string;

/* houses some info after the hero */
export default function Info(): JSX.Element {
  return (
    <div className="px-6 py-4">
      <div className="my-2 text-xl font-bold text-black text-center capitalize">
        {name}
      </div>
      <p className="my-1 font-semibold text-center text-gray-900 capitalize xl:text-lg">
        {description}
      </p>
      <a
        href={githubUrl}
        aria-label={`Sam Allen's GitHub profile: ${githubUrl}`}
      >
        <span className="flex justify-center mx-auto my-1 text-gray-600 font-semibold hover:font-bold">
          {githubUrl}
        </span>
      </a>
    </div>
  );
}
