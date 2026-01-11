import {
  FaLaptopCode,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#596188] text-white rounded-t-3xl">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

        {/* Info */}
        <div className="space-y-2 text-center md:text-right">
          <div className="flex items-center gap-2 justify-center md:justify-end">
            <FaMapMarkerAlt />
            النصيرات - جنوب سوق الإثنين - كافي المختار سابقاً
          </div>

          {/* Work Hours */}
          <div className="mt-2 text-center md:text-right">
            <span className="font-semibold">مواعيد العمل:</span>
            <ul className="mt-1 space-y-0.5 text-xs text-[#F6F9FF]">
              <li>السبت - الخميس: 09:00 صباحاً - 12:00 مساءً</li>
              <li>الجمعة: 03:30 مساءً - 12:00 مساءً</li>
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="flex gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/972598700396"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#25D366] text-white hover:scale-110 transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/meras.space/?igsh=MTI1Y2o5Z3l0ZGNvbw%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-linear-to-tr from-[#F58529] via-[#DD2A7B] to-[#515BD4]
                      hover:scale-110 transition text-white shadow-lg"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Signature */}
        <div className="flex flex-col md:flex-row items-center gap-2 text-xs opacity-80 mt-4 md:mt-0">
          <a
            href="https://engmohammedaljojo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Developer Portfolio"
            className="text-white hover:text-[#A0A5B2] transition flex items-center gap-1"
          >
            <FaLaptopCode className="text-lg md:text-xl" />
            <span>Eng. Mohammed Eljoujo</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
