import ItemRow from "./ItemRow";
import { type Category, type Item } from "./Menu";

interface Props {
  category: Category;
  items: Item[];
}

export default function CategorySection({ category, items }: Props) {
  const hasTw = items.some(
    (item) => item.priceTw && Number(item.priceTw) > 0
  );

  return (
    <section className="space-y-4">
      {/* Section Title */}
      <div className="flex items-center justify-center gap-4">
        <div className="flex-1 h-px bg-linear-to-l from-[#596188] to-transparent" />
        <h2 className="text-2xl font-bold text-[#596188] font-[Lemonada] tracking-wide whitespace-nowrap">
          {category.name}
        </h2>
        <div className="flex-1 h-px bg-linear-to-r from-[#596188] to-transparent" />
      </div>

      {/* Items Card */}
      <div className="bg-[#F6F9FF] rounded-xl">
        <div className="divide-y divide-[#E9ECF5]">
          {items.map((item) => (
            <ItemRow key={item.id} item={item} showTw={hasTw} />
          ))}
        </div>
      </div>
    </section>
  );
}
