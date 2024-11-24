import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { downloadQRCodes } from '../utils/downloadQRCodes'

interface QRCodeDisplayProps {
  qrCodes: Array<{ id: string; dataUrl: string }>
}

export default function QRCodeDisplay({ qrCodes }: QRCodeDisplayProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Generated QR Codes</h2>
        {qrCodes.length > 0 && (
          <Button onClick={() => downloadQRCodes(qrCodes)} className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download All
          </Button>
        )}
      </div>
      <ScrollArea className="h-[400px] w-full rounded-md border p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {qrCodes.map((qrCode, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <Image src={qrCode.dataUrl} alt={`QR Code ${index + 1}`} width={200} height={200} />
              <p className="text-center mt-2 text-sm">Product ID: {qrCode.id}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

