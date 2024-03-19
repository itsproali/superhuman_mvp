interface SupplementFactsProps {
  capsules: number;
  supply: number;
  servingSizePerDay: number;
  ingredients: Ingredient[];
}

interface Ingredient {
  name: string;
  amount: string;
}

export default function SupplementProfile({
  capsules,
  supply,
  servingSizePerDay,
  ingredients,
}: SupplementFactsProps) {
  const options = {
    capsules: [30, 60, 90, 120],
    supply: [1, 2, 3, 4],
    servingSize: [1, 2, 3],
  };

  const titles = {
    capsules: "No. of capsules:",
    supply: "Supply:",
    servingSize: "Daily Serving size:",
  };

  const isSelected = (value: number, type: keyof typeof options) => {
    switch (type) {
      case "capsules":
        return value === capsules;
      case "supply":
        return value === supply;
      case "servingSize":
        return value === servingSizePerDay;
      default:
        return false;
    }
  };

  const renderSection = (type: keyof typeof options) => (
    <div className="mb-6 grid grid-cols-5 gap-4">
      <div className="items-left flex flex-col justify-center">
        <span className="uppercase">{titles[type]}</span>
      </div>
      {options[type].map((value) => (
        <button
          key={value}
          className={`h-12 w-32 cursor-default rounded-lg ${
            isSelected(value, type)
              ? "bg-[#ffeb3b] text-black"
              : "bg-gray-100 text-gray-300"
          }`}
        >
          {type === "supply"
            ? `${value} ${value === 1 ? "month" : "months"}`
            : type === "servingSize"
            ? "💊".repeat(value)
            : value}
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col p-2 lg:flex-row lg:gap-8 container mx-auto">
      <div className="basis-full lg:basis-4/12"></div>
      <div className="basis-full lg:basis-8/12">
        <h1 className="mb-4 text-3xl md:text-7xl">
          Supplement
          <br />
          Facts
        </h1>
        <div className="rounded-3xl bg-white px-14 py-8">
          <div className="">
            {renderSection("capsules")}
            {renderSection("supply")}
            {renderSection("servingSize")}
          </div>

          <div className="border-t-2 border-gray-300 py-4">
            <div className="flex justify-between py-2 font-bold">
              <span className="">NAME</span>
              <span className="">AMOUNT</span>
            </div>
            {/* Dynamically render ingredients */}
            {ingredients.map((ingredient, index) => (
              <div key={index} className="mt-2 flex justify-between">
                <span>{ingredient.name}</span>
                <span>{ingredient.amount}</span>
              </div>
            ))}
          </div>
          <div className="flex border-t-2 border-gray-300 py-4 text-sm">
            <p className="mr-2 font-bold">INGREDIENT OF CAPSULES:</p>
            <p>Pullulan USP, Locust Bean Gum, Xanthan Gum, Purified Water</p>
          </div>
        </div>
      </div>
    </div>
  );
}
