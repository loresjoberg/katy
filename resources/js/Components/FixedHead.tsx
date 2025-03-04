import HeaderLogo from '@/Components/HeaderLogo';
import MappedNav from '@/Components/MappedNav';

export default function FixedHead() {
    return (
        <div className="fixedHead-desktop bg-card shadow-lg">
            <div className="fixedHead-curtain fixedHead-curtain-left"></div>
            <HeaderLogo />
            <MappedNav />
            <div className="fixedHead-curtain fixedHead-curtain-right"></div>
        </div>
    );
}
