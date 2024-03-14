const interest =
  "In addition to my expertise in mobile and web development with Flutter, React Native, and Next.js, I'm passionate about mastering Full-Stack development alongside Continuous Deployment and Delivery practices. During my free time, I enjoy exploring new technologies and methodologies to stay ahead in the ever-evolving field of software development. This drive for continuous learning fuels my creativity and problem-solving skills, ensuring I deliver top-notch solutions to every project I undertake." as string;

/* short paragraph of myself */
export default function Interest(): JSX.Element {
  return (
    <div className="px-6 pt-4 pb-2">
      <span className="block px-3 py-1 my-2 mb-2 text-xl text-black font-bold capitalize">
        Interest
      </span>
      <p className="block px-3 py-1 my-2 mb-2 text-gray-600 text-sm">
        {interest}
      </p>
    </div>
  );
}
