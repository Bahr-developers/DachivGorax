import Bell from "../assets/images/bell.svg";
import MiniBell from "../assets/images/mini-bell.svg";
import "./modal.css";
import { ALL_DATA } from "../Query/get_all";

function Natification() {
  const user = JSON.parse(localStorage.getItem("user")) || undefined;

  const notification = ALL_DATA.useNotificationUser(user?.id);

  console.log(notification?.data);

  return (
    <>
      <button
        className="btn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <div className="bell">
          <img
            className="minibell-img"
            src={MiniBell}
            width="14.77"
            height="16.88"
            alt="bell"
          />
          <img
            className="bell-img"
            src={Bell}
            width="26.25"
            height="30"
            alt="bell"
          />
        </div>
      </button>

      <div
        className="modal modal-notification fade modal-natif"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-natif-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Notifications
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {notification?.data?.length &&
                notification.data.map((mes) => {
                  const time = mes?.createdAt.split("T");
                  return (
                    <div
                      className="d-flex justify-content-between  align-items-center"
                      key={mes.id}
                    >
                      <div className="w-100">
                        <p>{mes.message}</p>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-1">
                            <p className="NotificationTime">{time["0"]}</p>
                            <p className="NotificationTime">
                              {time["1"].slice(0, 5)}
                            </p>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            <button className="notifBtn">Read</button>
                            {mes.type === "personal" ? (
                              <span className="pesonal-notif btn text-white d-block btn-sm btn-success">
                                {mes.type}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <hr />
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-notif btn btn-primary"
                data-bs-dismiss="modal"
              >
                Read All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Natification;
