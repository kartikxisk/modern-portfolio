import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Cover } from "@/components/ui/cover";
import { ContactMe } from "@base/components/ContactMe";
import FloatingDocker from "@base/components/FloatingDocker";
import SparklesPreview from "@base/components/SparklesPreview";
import MeImage from "@public/me1.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
      <div className="relative">
            <Image src={MeImage} alt="Kartik Kumar" />
          </div>
      </section>
      <section className="h-screen">
        <div className="container">
        <SparklesPreview title="Skills" />
        </div>
      </section>
      <section className="h-screen">
        <div className="container">
        <SparklesPreview title="Work Experience" />
        </div>
      </section>
      <section className="h-screen">
        <div className="container">
          <SparklesPreview title="Work Highlights" />
        </div>
      </section>
      <section className="h-screen">
        <div className="container">
          <SparklesPreview title="Let’s Connect" />
        </div>
      </section>
      {/* <section>
        <ContactMe />
      </section> */}
      {/* <FloatingDocker /> */}
    </>
  );
}
