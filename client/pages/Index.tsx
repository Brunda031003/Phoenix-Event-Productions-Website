import AboutSection from "@/components/sections/AboutSection";
import SimpleGallery from "@/components/sections/SimpleGallery";
import EquipmentsSection from "@/components/sections/EquipmentsSection";
import ContactSection from "@/components/sections/ContactSection";
import Landing_logo from '../images/Landing_logo.png';


export default function Index() {
  return (
    <div className="bg-background text-foreground">
      {/* Landing */}
      <section className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: "url('/images/Landing-background.png')" }}>
        <div className="container py-20 md:py-55">
          <div className="max-w-4xl pt-1">
            <img
              src="/images/Landing_logo.png"
              alt="Moments Designed. Stories Told."
              className="w-[230px] md:w-[330px]"
            />

            <p className="mt-6 text-lg md:text-xl opacity-80 max-w-2xl text-[#FFF3F3]">
              A PREMIER EVENT PRODUCTION COMPANY TRUSTED BY COUNTLESS CORPORATES AND BRANDS SINCE 2018. 
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm shadow shadow-primary/30 hover:bg-primary/90 transition-colors text-[#FFF3F3]">
                Start planning
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm hover:text-primary text-[#FFF3F3]">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <SimpleGallery />

      <EquipmentsSection />

      <ContactSection />
    </div>
  );
}
