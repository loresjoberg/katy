import HeaderLogo from '@/Components/HeaderLogo';
import MappedNav from '@/Components/MappedNav';

export default function FixedHeadMobile() {
    return (
        <div className="fixedHead-mobile bg-card shadow-lg">
            <div className="fixedHead-mobile-top">
                <div className="fixedHead-curtain fixedHead-curtain-left"></div>
                <div className="fixedHead-top-center">
                    <HeaderLogo />
                </div>
                <div className="fixedHead-curtain fixedHead-curtain-right"></div>
            </div>
            <div className="fixedHead-mobile-bottom">
                <MappedNav />
            </div>
        </div>
    );
}
