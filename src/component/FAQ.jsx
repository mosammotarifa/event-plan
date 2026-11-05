import { faqDatas } from "@/lib/data";
import FAQAccordion from "./FAQAccordion";

const FAQ = async () => {
  const faqData = await faqDatas();

  return <FAQAccordion faqData={faqData} />;
};

export default FAQ;