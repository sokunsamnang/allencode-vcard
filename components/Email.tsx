import { AtSign } from "lucide-react";

/* send me an email */
export default function Email(): JSX.Element {
  return (
    <button
      aria-label="send me an email"
      type="button"
      className="p-3 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600"
    >
      <a aria-label="link to email" href="mailto:sokunsamnang45@gmail.com">
        <AtSign />
      </a>
    </button>
  );
}
