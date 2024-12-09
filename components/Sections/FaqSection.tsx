import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqData } from "@/constants/homePageData" 

export default function FAQSection() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container m-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-gray-900 dark:text-gray-100">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300">
                {faq.answer.split('\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-2">
                    {paragraph}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

