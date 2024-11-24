import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ProductFormProps {
  productDetails: {
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
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function ProductForm({ productDetails, handleInputChange }: ProductFormProps) {
  return (
    <form className="space-y-4">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="productName">Product Name</Label>
        <Input
          id="productName"
          name="productName"
          value={productDetails.productName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="weight">Weight</Label>
        <Input
          id="weight"
          name="weight"
          value={productDetails.weight}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          name="price"
          value={productDetails.price}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="manufacturingDate">Manufacturing Date</Label>
        <Input
          id="manufacturingDate"
          name="manufacturingDate"
          type="date"
          value={productDetails.manufacturingDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="contactNumber">Contact Number</Label>
        <Input
          id="contactNumber"
          name="contactNumber"
          value={productDetails.contactNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          value={productDetails.address}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={productDetails.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="companyName">Company Name</Label>
        <Input
          id="companyName"
          name="companyName"
          value={productDetails.companyName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="category">Category (Optional)</Label>
        <Input
          id="category"
          name="category"
          value={productDetails.category}
          onChange={handleInputChange}
        />
      </div>
    </form>
  )
}

