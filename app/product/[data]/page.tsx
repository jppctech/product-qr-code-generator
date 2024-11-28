import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

interface ProductDetails {
  productId: string;
  productName: string;
  weight: string;
  price: string;
  manufacturingDate: string;
  contactNumber: string;
  address: string;
  email: string;
  companyName: string;
  category?: string;
  lotNo: string;
  bestBefore: string;
  market: string
}

export default async function ProductPage({ params }: { params: any }) {
  const productDetails: ProductDetails = JSON.parse(decodeURIComponent(params.data));

  // Helper function to format keys to the desired display format
  const formatKey = (key: string) => {
    switch (key) {
      case "price":
        return "MRP";
      case "weight":
        return "Net Weight";
      case "lotNo":
        return "LOT No";
      case "companyName":
        return "Commodity";
      case "contactNumber":
        return "Customer Care No.";
      case "market":
        return "Packed & Maketed by.";
      default:
        return key
          .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space before uppercase letters
          .replace(/(^|\s)(\w)/g, (match) => match.toUpperCase()); // Capitalize the first letter of each word
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex justify-between w-full">
            <Image
              src={"/logo1.png"}
              height={100}
              width={100}
              alt="logo"
              className=" object-contain"
            />
            <Image
              src={"/logo2.png"}
              height={100}
              width={100}
              alt="logo"
              className=" object-contain"
            />
            <Image
              src={"/logo3.png"}
              height={100}
              width={100}
              alt="logo"
              className=" object-contain"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            {productDetails.productName}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Field</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(productDetails).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell className="font-medium">{formatKey(key)}</TableCell>
                  <TableCell>
                    {key === "bestBefore"
                      ? `${value} Months`
                      : key === "price"
                      ? `₹${value}`
                      : value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
