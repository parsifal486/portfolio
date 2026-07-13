import { img } from '@/lib/assets';
import { QrPage } from '../QrPage';

export default function QmtjQRcodePage() {
    return (
        <QrPage
            src={img.qmtjQRcode}
            alt="QDU Cat mini app QR code"
            caption="Scan to try"
        />
    );
}
