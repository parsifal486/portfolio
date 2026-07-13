import { img } from '@/lib/assets';
import { QrPage } from '../QrPage';

export default function YjyjQRcodePage() {
    return (
        <QrPage
            src={img.yjyjQRcode}
            alt="YueJian reading club mini app QR code"
            caption="Scan to try"
        />
    );
}
