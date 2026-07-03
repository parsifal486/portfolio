import Image from 'next/image';
import { img } from '@/lib/assets';

export default function QmtjQRcodePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <div className="rounded-xl p-4">
                <Image
                    src={img.qmtjQRcode}
                    alt="WeChat QR Code"
                    width={300}
                    height={300}
                    className="rounded-xl"
                />
            </div>
            <div className="text-font-emphasize font-inter text-xl">Scan to try</div>
        </div>
    );
}
