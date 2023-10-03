import PromoMessage from "./PromoMessage";

function Promo() {
    const data = {
        headlineMessage: "Don't miss this deal!",
        bodyMessage: "Subscribe to my newsletter and get all the shop items at 50% off!"
    }
    return (
        <div className="promo-section">
            <PromoMessage
                heading={data.headlineMessage}
                message={data.bodyMessage}
            />
        </div>
    );
};

export default Promo;