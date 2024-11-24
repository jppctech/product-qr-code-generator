import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface ProductDetails {
  productId: string
  productName: string
  weight: string
  price: string
  manufacturingDate: string
  contactNumber: string
  address: string
  email: string
  companyName: string
  category?: string
}

export default function ProductPage({ params }: { params: { data: string } }) {
  const productDetails: ProductDetails = JSON.parse(decodeURIComponent(params.data))

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">{productDetails.productName}</CardTitle>
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
                  <TableCell className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

