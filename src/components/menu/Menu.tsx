import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import CategorySection from "./CategorySection";

/* ================== Types ================== */

export interface Category {
  id: string;
  name: string;
  createdAt?: number;
}

export interface Item {
  id: string;
  name: string;
  price: number;
  priceTw?: number;
  categoryId: string;
  visible?: boolean;
  createdAt?: number;
}

/* ================== Component ================== */

export default function Menu() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let catsLoaded = false;
    let itemsLoaded = false;

    /* -------- Categories -------- */
    const catRef = ref(db, "categories");
    const unsubCats = onValue(catRef, (snap) => {
      const data = snap.val();

      if (!data) {
        setCategories([]);
      } else {
        const cats: Category[] = Object.entries(data)
          .map(([id, value]: any) => ({
            id,
            name: value.name,
            createdAt: value.createdAt || 0,
          }))
          .sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));

        setCategories(cats);
      }

      catsLoaded = true;
      if (itemsLoaded) setLoading(false);
    });

    /* -------- Items -------- */
    const itemRef = ref(db, "items");
    const unsubItems = onValue(itemRef, (snap) => {
      const data = snap.val();

      if (!data) {
        setItems([]);
      } else {
        const its: Item[] = Object.entries(data)
          .map(([id, value]: any) => ({
            id,
            ...value,
            createdAt: value.createdAt || 0,
          }))
          .sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));

        setItems(its);
      }

      itemsLoaded = true;
      if (catsLoaded) setLoading(false);
    });

    return () => {
      unsubCats();
      unsubItems();
    };
  }, []);

  /* ================== Loader ================== */

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-md">
        <div className="flex flex-col items-center gap-6">
          <img
            src="/logo-meras.png"
            alt="Logo"
            className="w-28 h-auto animate-pulse"
          />

          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-4 border-slate-300" />
            <div className="absolute inset-0 rounded-full border-4 border-slate-500 border-t-transparent animate-spin" />
          </div>

          <p className="text-gray-700 text-sm tracking-widest animate-pulse">
            يتم تحضير القائمة...
          </p>
        </div>
      </div>
    );
  }

  /* ================== Empty State ================== */

  if (items.length === 0) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center gap-6 text-center py-20">
        

        <p className="text-[#596188] text-lg font-semibold tracking-wide">
          لا يوجد أصناف حالياً
        </p>

        <p className="text-sm text-[#A0A5B2]">
          نعمل على تجهيز القائمة، تابعونا قريباً
        </p>
      </main>
    );
  }

  /* ================== UI ================== */

  return (
    <main className="flex-1 max-w-6xl mx-auto w-full px-5 py-10 space-y-14">
      {categories.map((category) => {
        const categoryItems = items.filter(
          (item) => item.categoryId === category.id
        );

        if (!categoryItems.length) return null;

        return (
          <CategorySection
            key={category.id}
            category={category}
            items={categoryItems}
          />
        );
      })}
    </main>
  );
}
