import Footer from "../components/menu/footer";
import Menu from "../components/menu/Menu";

export default function MenuPage() {
  return (
    <div
      dir="rtl"
      className="min-h-screen flex flex-col font-sans bg-[#F6F9FF] text-[#596188]"
    >
      {/* Header */}
      <header className="pt-12 pb-6 text-center">
        <img
          src="/logo-meras.png"
          alt="Logo"
          className="w-40 mx-auto mb-4 drop-shadow-lg"
        />
       
      </header>

      <Menu />

      <Footer />
    </div>
  );
}

