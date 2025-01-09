import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  category: string;
}

const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2">
            <span className="bg-white/90 px-3 py-1 rounded-full text-sm text-pink-400">
              {category}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-pink-400 font-medium mt-2">{price}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;