import About from "@/components/About";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import Info from "@/components/Info";
import Interest from "@/components/Interest";
import Portrait from "@/components/Portrait";

export default function Home() {
  return (
    <div className="flex justify-center m-0 p-0">
      <div className="max-w-sm overflow-x-hidden shadow-lg rounded-3xl bg-zinc-200">
        <Portrait />
        <Info />
        <Contact />
        <Divider />
        <About />
        <Interest />
        <Divider />
      </div>
    </div>
  );
}
