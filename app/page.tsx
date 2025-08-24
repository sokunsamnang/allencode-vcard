import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gray-950 relative">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 -z-10"></div>
      <div 
        className="fixed inset-0 bg-[url('/LooperGroup2.png')] bg-no-repeat bg-center opacity-5 -z-10"
        style={{ backgroundSize: '80%' }}
      ></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Banner />
        
        <section className="space-y-0">
          <About />
          <Experience />
          <Projects />
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
