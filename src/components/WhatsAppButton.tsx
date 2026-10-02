"use client";

import Link from "next/link";

export default function WhatsAppButton() {
  const phoneNumber = "917019639489";

  const message =
    "Hello Bio-Pest Control Industries, I would like to enquire about your agricultural biological products.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Bio-Pest Control Industries on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,0,0,0.22)] sm:bottom-7 sm:right-7"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16 2.667C8.648 2.667 2.667 8.648 2.667 16c0 2.352.616 4.56 1.692 6.478L2.4 29.6l7.292-1.91A13.27 13.27 0 0 0 16 29.333C23.352 29.333 29.333 23.352 29.333 16S23.352 2.667 16 2.667Zm0 24.25c-2.123 0-4.096-.62-5.76-1.688l-.412-.263-4.328 1.134 1.155-4.218-.27-.423A10.57 10.57 0 0 1 5.43 16C5.43 10.17 10.17 5.43 16 5.43S26.57 10.17 26.57 16 21.83 26.917 16 26.917Z"
        />
        <path
          fill="currentColor"
          d="M21.26 18.515c-.29-.145-1.714-.846-1.98-.942-.266-.097-.46-.145-.653.145-.194.29-.75.942-.92 1.135-.17.194-.339.218-.629.073-.29-.145-1.223-.45-2.33-1.437-.861-.768-1.442-1.716-1.612-2.006-.17-.29-.018-.446.128-.59.13-.13.29-.339.435-.508.145-.17.194-.29.29-.484.097-.193.049-.363-.024-.508-.073-.145-.653-1.571-.895-2.151-.236-.565-.475-.488-.653-.497-.17-.009-.363-.011-.557-.011-.193 0-.508.073-.774.363-.266.29-1.016.994-1.016 2.424 0 1.43 1.04 2.812 1.185 3.005.145.194 2.047 3.125 4.958 4.382.693.299 1.234.477 1.655.611.696.221 1.329.19 1.83.115.558-.083 1.714-.701 1.956-1.378.242-.677.242-1.257.17-1.378-.073-.12-.266-.193-.556-.338Z"
        />
      </svg>
    </Link>
  );
}