import JSZip from 'jszip'

export async function downloadQRCodes(qrCodes: Array<{ id: string; dataUrl: string }>) {
  const zip = new JSZip();

  qrCodes.forEach((qrCode, index) => {
    const fileName = `qr_code_${qrCode.id}.png`;
    const imageData = qrCode.dataUrl.split(',')[1];
    zip.file(fileName, imageData, { base64: true });
  });

  const content = await zip.generateAsync({ type: "blob" });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(content);
  link.download = 'qr_codes.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

