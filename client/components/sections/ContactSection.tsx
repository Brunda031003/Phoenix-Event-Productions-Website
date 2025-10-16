import { Card, CardContent } from "../ui/card";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="container max-w-3xl">
        <h3 className="text-3xl md:text-4xl text-center">Get in touch</h3>
        <p className="mt-3 text-center opacity-80">Tell us about your event and we'll be in touch to plan the perfect experience.</p>

        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span className="font-medium">Mobile:</span>
                <a href="tel:+11234567890" className="text-primary hover:underline">+91 1234567899</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <a href="mailto:info@pheonix.com" className="text-primary hover:underline">info@phoeni_events.com</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Instagram:</span>
                <a href="https://instagram.com/pheoni_events" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@phoeni_events</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Location:</span>
                <a href="https://maps.google.com/?q=Zenith+Den+Location" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View on Map</a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
