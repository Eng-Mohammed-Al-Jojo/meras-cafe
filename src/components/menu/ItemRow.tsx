import { type Item } from "./Menu";

interface Props {
  item: Item;
  showTw?: boolean;
}

export default function ItemRow({ item, showTw }: Props) {
  const prices = String(item.price).split(",");
  const isUnavailable = item.visible === false;

  return (
    <div
      className={`flex items-center justify-between px-6 py-4 transition rounded-xl ${
        !isUnavailable ? "hover:bg-[#F6F9FF]" : ""
      }`}
    >
      {/* Name */}
      <div className="flex flex-col">
        <span
          className={`text-[17px] font-semibold text-[#596188] ${
            isUnavailable ? "line-through opacity-70" : ""
          }`}
        >
          {item.name}
        </span>
      </div>

      {/* Prices */}
      <div className="flex items-center gap-6 font-bold text-[#596188]">
        {prices.map((p) => (
          <span
            key={p}
            className={`${isUnavailable ? "line-through opacity-70" : ""}`}
          >
            {p}₪
          </span>
        ))}

        {showTw && (
          <span
            className={`min-w-10 text-center ${
              isUnavailable ? "line-through opacity-70" : ""
            }`}
          >
            {item.priceTw ? `${item.priceTw}₪` : "-"}
          </span>
        )}
      </div>
    </div>
  );
}
