import { FC } from "react";
import { useDataWithLoading } from "../../../../services/api/common";
import Marquee from "react-fast-marquee";
import './Partner.css';

interface Partner {
    name: string;
    media: string;
}

const HomePartner: FC = () => {
    const { data, isLoading } = useDataWithLoading("home/partner");
    const partner: Partner[] = data ?? [];

    if(isLoading) return null;

    return (
        <div className="home-partner flex column justifyCenter center">
            <div className="home-actor-title flex column center justifyCenter">
                <h2>Nos partenaires</h2>
                <hr />
            </div>
            <div className="partner-holder flex row justifyCenter center">
                <Marquee gradient={false}>
                    {partner.map((partner, i: number) => {
                        return (
                            <img
                                key={`${partner.name}_${i}`}
                                className="partner-card"
                                src={partner.media}
                                alt={partner.name}
                            />
                        )
                    })}
                </Marquee>
            </div>
        </div>
    )
}

export default HomePartner;