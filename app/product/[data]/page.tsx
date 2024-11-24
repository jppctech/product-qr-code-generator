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
}

export default async function ProductPage({ params }: { params: any }) {
  const productDetails: ProductDetails = JSON.parse(decodeURIComponent(params.data));

  // Helper function to format camelCase to readable text
  const formatKey = (key: string) => {
    return key
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space before uppercase letters
      .replace(/([A-Z])/g, (match) => match.toLowerCase()) // Convert to lowercase
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
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
                    {key === "bestBefore" ? `${value} months` : value}
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
