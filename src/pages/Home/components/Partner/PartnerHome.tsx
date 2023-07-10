import { FC } from "react";
import Marquee from "react-fast-marquee";
import { useDataWithLoading } from "../../../../services/api/fetch";
import { PartnerType } from "../../../../interfaces/Interface";
import './PartnerHome.css';

export const PartnerHome: FC = () => {
    const { data, isLoading } = useDataWithLoading("partner");
    const partner: PartnerType[] = data ?? [];

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
                                src={partner.s3_image_key}
                                alt={partner.name}
                            />
                        )
                    })}
                </Marquee>
            </div>
        </div>
    )
}