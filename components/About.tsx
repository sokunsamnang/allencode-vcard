const about =
  "I'm really good at using Flutter, React Native, and React. I love making apps and websites that are easy to use. I also enjoy discovering new ways to make a positive impact. I love coming up with creative solutions that bring about meaningful change." as string;

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
