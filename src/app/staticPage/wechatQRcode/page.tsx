import { img } from '@/lib/assets';
import { QrPage } from '../QrPage';

export default function WechatQRcodePage() {
    return (
        <QrPage
            src={img.wechatQRcode}
            alt="WeChat QR code"
            caption="Scan to add me on WeChat"
        />
    );
}
