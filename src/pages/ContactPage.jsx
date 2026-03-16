import PageHero from '../components/shared/PageHero'
import ContactInfo from '../components/contact/ContactInfo'
import BookingForm from '../components/contact/BookingForm'

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Book an Appointment"
        subtitle="Choose a time that works for you and we'll take care of the rest."
      />
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="fade-in">
              <ContactInfo />
            </div>
            <div className="fade-in fade-in-delay-2">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
