'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import ProductForm from './ProductForm'
import QRCodeDisplay from './QRCodeDisplay'
import { generateQRCode } from '../utils/generateQRCode'
import { generateUniqueId } from '../utils/generateId'

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
  lotNo: string
  bestBefore: string
  market: string
}

export default function QRCodeGenerator() {
  const [productDetails, setProductDetails] = useState<ProductDetails>({
    productId: '',
    productName: '',
    weight: '',
    price: '',
    manufacturingDate: '',
    contactNumber: '',
    address: '',
    email: '',
    companyName: '',
    category: 'India',
    lotNo: '',
    bestBefore: '',
    market: ''
  })
  const [qrCodes, setQRCodes] = useState<Array<{ id: string; dataUrl: string }>>([])
  const [multipleCount, setMultipleCount] = useState<number>(2)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProductDetails((prev) => ({ ...prev, [name]: value }))
  }

  const generateQRCodes = async (count: number = 1) => {
    const newQRCodes = []
    for (let i = 0; i < count; i++) {
      const productId = generateUniqueId()
      const data = { ...productDetails, productId }
      const qrCode = await generateQRCode(data)
      newQRCodes.push({ id: productId, dataUrl: qrCode })
    }
    setQRCodes(newQRCodes)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product QR Code Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <ProductForm
              productDetails={productDetails}
              handleInputChange={handleInputChange}
            />
            <div className="mt-4 space-x-2">
              <Button onClick={() => generateQRCodes(1)}>Generate QR Code</Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Generate Multiple</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Generate Multiple QR Codes</h4>
                      <p className="text-sm text-muted-foreground">
                        Enter the number of QR codes you want to generate.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="count">Count</Label>
                        <Input
                          id="count"
                          type="number"
                          className="col-span-2"
                          value={multipleCount}
                          onChange={(e) => setMultipleCount(parseInt(e.target.value))}
                          min="1"
                        />
                      </div>
                      <Button onClick={() => generateQRCodes(multipleCount)}>Generate</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <QRCodeDisplay qrCodes={qrCodes} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

