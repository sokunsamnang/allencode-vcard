const interest =
  "I have strong skills in creating apps for phones and websites using Flutter, React Native, and React. I enjoy mastering every aspect of app and website development, ensuring smooth updates and deliveries. Outside of work, I dedicate time to learning new techniques and staying current with software advancements. This continual learning enhances my creativity and problem-solving abilities, allowing me to consistently provide optimal solutions for each project." as string;

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
