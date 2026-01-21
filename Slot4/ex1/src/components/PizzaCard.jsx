import { useState } from "react";
import "../pizzaCard.css";

export default function PizzaCard({ item }) {
  const [showModal, setShowModal] = useState(false);

  if (!item) return null;

  const { image, name, price, oldPrice, description, tags } = item;

  const formatUSD = (v) => `$${Number(v).toFixed(2)}`;

  // 🔥 xác định pizza có sale hay không
  const isSale = Array.isArray(tags) && tags.includes("Sale");

  return (
    <>
      <div className="pcard">
        <div className="pcard-imgWrap">
          {Array.isArray(tags) && (
            <div className="pcard-tags">
              {tags.map((t) => (
                <span
                  key={t}
                  className={`pcard-tag ${t === "Sale" ? "is-sale" : "is-new"}`}
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <img className="pcard-img" src={image} alt={name} />
        </div>

        <div className="pcard-body">
          <h5 className="pcard-title">{name}</h5>

          <p className="pcard-desc">{description}</p>

          <div className="pcard-price">
            {/* 👉 chỉ hiện giá cũ khi có SALE */}
            {isSale && oldPrice && (
              <span className="pcard-old">{formatUSD(oldPrice)}</span>
            )}

            {/* 👉 màu giá mới phụ thuộc sale */}
            <span
              className={`pcard-new ${isSale ? "price-sale" : "price-normal"}`}
            >
              {formatUSD(price)}
            </span>
          </div>

          <div className="pcard-buttons">
            <button className="pcard-btn pcard-btn-buy">Buy</button>
            <button 
              className="pcard-btn pcard-btn-detail"
              onClick={() => setShowModal(true)}
            >
              View Detail
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="pcard-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="pcard-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="pcard-modal-close"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <div className="pcard-modal-content">
              <img className="pcard-modal-img" src={image} alt={name} />

              <div className="pcard-modal-info">
                <h3 className="pcard-modal-title">{name}</h3>

                {Array.isArray(tags) && tags.length > 0 && (
                  <div className="pcard-modal-tags">
                    {tags.map((t) => (
                      <span key={t} className={`pcard-tag ${t === "Sale" ? "is-sale" : "is-new"}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <p className="pcard-modal-desc">{description}</p>

                <div className="pcard-modal-price">
                  {isSale && oldPrice && (
                    <span className="pcard-old">{formatUSD(oldPrice)}</span>
                  )}
                  <span className={`pcard-new ${isSale ? "price-sale" : "price-normal"}`}>
                    {formatUSD(price)}
                  </span>
                </div>

                <button className="pcard-btn pcard-btn-buy">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

