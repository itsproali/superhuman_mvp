import ProductDetails from "@/components/Product/ProductDetails";
import SupplementProfile from "@/components/Product/SupplementProfile";
import productData from "@/static/product";

export default function Home() {
  return (
    <div className="pb-20">
      <ProductDetails product={productData} />

      <SupplementProfile
        capsules={60}
        supply={1}
        servingSizePerDay={2}
        ingredients={[
          { name: "Nicotinamide Mononucleotide (NMN)", amount: "500 mg" },
        ]}
      />
    </div>
  );
}
