import { Github as GithubIcon } from "lucide-react";
export const githubUrl = "https://github.com/sokunsamnang" as string;

/* button to link to my repos */
export default function Github(): JSX.Element {
  return (
    <button
      aria-label="find me on github"
      type="button"
      className="p-3 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600"
    >
      <a
        aria-label="link to github"
        href="https://github.com/sokunsamnang"
        rel="noreferrer"
        target="_blank"
      >
        <GithubIcon />
      </a>
    </button>
  );
}
