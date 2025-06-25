import React from 'react'
import './homeBanner.css'
import homeBannerItemProduct from '../../../homeProduct.json';
const HomeBanner = () => {
    return (
        <div className="homeBanner">
            <img className='homeBannerimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/Baby/Homepage_DesktopHeroTemplate_3000x1200_1._CB580021402_.jpg' />
            <div className="grayBackgroundHomeBanner"></div>

            <div className="homeBannerItemDiv">

                {
                    homeBannerItemProduct.product.map((item, ind) => {
                        return (
                            <div className="homeBannerItemDivCard">
                                <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                                <div className="imgHomeBannerItemDivCard">
                                    {
                                        item.imgs.map((it, ind )=> {
                                            return (
                                                <div className="imgBannerHomeDiv">
                                                    <img className='imgBannerHomeDivImg' src={it} />
                                                    <div className="imgBannerImgName">boAt Stone 1800 Bluet</div>
                                                </div>
                                            );

                                        })
                                    }




                                </div>

                                <div className="seeMoreHomeBanner">See More</div>
                            </div>
                        );
                    })
                }






            </div>

        </div>
    )
}

export default HomeBanner