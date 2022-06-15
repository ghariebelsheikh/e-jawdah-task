import { FormattedMessage } from "react-intl";
import "./CardHeader.scss";

const CardHeader = (props) => {
  return (
    <section className="commercial-info row mt-25">
      <div className="col-3">
        <div className="commercial-info__type">
          <div>
            <i className="bi bi-building fs-4 text-info mx-5"></i>
          </div>
          <div>
            <p className="commercial-info--name mb-5">
              <FormattedMessage
                id="instituteType.name"
                defaultMessage="نوع الكيان التجارى"
              />
            </p>
            <p className="commercial-info--info">{props.info.type}</p>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="commercial-info__date">
          <div>
            <i className="bi bi-calendar2-date fs-4 text-primary mx-5"></i>
          </div>
          <div>
            <p className="commercial-info--name mb-5">
              <FormattedMessage
                id="recordExpirationDate.name"
                defaultMessage="تاريخ الانتهاء"
              />
            </p>
            <p className="commercial-info--info">{props.info.expirationDate}</p>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="commercial-info__uniform-number">
          <div>
            <i className="bi bi-bricks fs-4 text-primary mx-5"></i>
          </div>
          <div>
            <p className="commercial-info--name mb-5">
              <FormattedMessage
                id="recordUniformNumber.name"
                defaultMessage="الرقم الموحد للمنشأة"
              />
            </p>
            <p className="commercial-info--info">{props.info.uniformNumber}</p>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="commercial-info__commercial-number">
          <div>
            <i className="bi bi-boxes fs-4 text-info mx-5"></i>
          </div>
          <div>
            <p className="commercial-info--name mb-5">
              <FormattedMessage
                id="recordCommercialNumber.name"
                defaultMessage="رقم السجل التجارى"
              />
            </p>
            <p className="commercial-info--info">
              {props.info.commercialNumber}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardHeader;
