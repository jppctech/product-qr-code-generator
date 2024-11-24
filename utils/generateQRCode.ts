import QRCode from 'qrcode'

export async function generateQRCode(data: object): Promise<string> {
  try {
    const encodedData = encodeURIComponent(JSON.stringify(data))
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/product/${encodedData}`
    return await QRCode.toDataURL(url)
  } catch (error) {
    console.error('Error generating QR code:', error)
    return ''
  }
}

