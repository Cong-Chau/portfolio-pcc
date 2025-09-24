import Header from "@/components/sessions/Header";
import Landing from "@/components/sessions/Landing";
import About from "@/components/sessions/About";
export default function Home() {
  return (
    <div className="select-none">
      <Header />
      <Landing />
      <About />
    </div>
  );
}
