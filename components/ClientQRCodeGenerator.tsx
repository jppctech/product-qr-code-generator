'use client'

import dynamic from 'next/dynamic'

const QRCodeGenerator = dynamic(() => import('./QRCodeGenerator'), { ssr: false })

export default function ClientQRCodeGenerator() {
  return <QRCodeGenerator />
}

