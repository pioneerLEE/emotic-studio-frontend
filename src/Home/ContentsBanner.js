import React from "react";

import ContentsBannerItem from "./ContentsBannerItem";

function ContentsBanner({ data: { title, subTitle, contentsData } }) {
    return (
        <div className="contents-banner">
            <div className="contents-banner__column">
                <h2>{title}</h2>
                <h4>{subTitle}</h4>
            </div>
            <div className="contents-banner__column">
                {contentsData.map((data, idx) => {
                    return (
                        <ContentsBannerItem
                            key={idx}
                            title={data.title}
                            picture={data.image}
                        />
                    );
                })}
            </div>
            <div className="contents-banner__column">
                <button className="contents-banner__view-more-btn">
                    더 보기
                </button>
            </div>
        </div>
    );
}

export default ContentsBanner;