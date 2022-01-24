import React, { useState, useEffect } from "react";
import {
  YMaps,
  Map,
  Clusterer,
  Placemark,
  TypeSelector,
  ZoomControl,
  GeolocationControl,
  RouteButton,
  TrafficControl,
  GeoObject,
} from "react-yandex-maps";
import person from "../img/person.png";

import pin from "../img/boy.png";
import Dialog from "./Dialog";
import Select from "./Select";
import axios from "axios";
import { url } from "../host/Host";
import { message } from "antd";

function Xarita() {
 
  const [forclick, setforclick] = useState(false);
  const [village, setVillage] = useState("");
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [coor, setCoor] = useState(null);
  const [Points, setPoints] = useState([]);

  const [zoom, setZoom] = useState(6);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
      setPoints(res.data);
      navigator.geolocation.getCurrentPosition(function (position) {
        setUser([position.coords.latitude, position.coords.longitude]);
      });
      var coord = [];
      res.data.map((item) =>
        item.coor !== null ? coord.push(item.coor) : coord.push([])
      );
      setCoor(coord);
     
    });
  }, []);

  const handleUnnecessary = (e) => {
    setZoom(e);
  };

  const Information = (data) => {
    setforclick(true);
    setVillage(data);
  };
  // const handleParam = () => {
  //   let param = localStorage.getItem("param");
  //   setParam(JSON.parse(param).param);
  // };
  const handleClose = () => {
    setforclick(false);
  };
  const handleData = () => {
    setData(JSON.parse(localStorage.getItem("data")));
    var g = [];
    for (let i = 0; i < JSON.parse(localStorage.getItem("data")).length; i++) {
      g.push(JSON.parse(localStorage.getItem("data"))[i].coor);
    }
    setCoor(g);
    //console.log(JSON.parse(localStorage.getItem("data")));
  };
  return (
    <>
    {coor!==null? <>{forclick ? (
            <Dialog open={forclick} onClose={handleClose} village={village} />
          ) : (
            ""
          )}
          {/* <Select
            data={Points}
            //   onParam={handleParam}
            onData={handleData}
            onUnnecessary={handleUnnecessary}
          /> */}
          <YMaps key={"uz_UZ"} query={{ lang: "uz_UZ" }}>
            <Map
              width="100vw"
              height="95vh"
              state={{
                center: data[0].param,
                zoom,
              }}
            >
              <Clusterer
                options={{
                  groupByCoordinates: false,
                }}
              >
                {data.map((info, index) => {
                  return (
                    <Placemark
                      key={index}
                      className="placeMark"
                      geometry={
                        info.param !== null
                          ? info.param
                          : message.info("Param mavjuda emas")
                      }
                      onClick={() => Information(info)}
                      options={{
                        preset: "islands#greenDotIconWithCaption",
                        iconColor: "#aeca3b",
                        iconLayout: "default#image",
                      }}
                      properties={{
                        hintContent: `<h6><b className="personStyle">${info.nomi}</b></h6>`,
                      }}
                      modules={["geoObject.addon.hint"]}
                    />
                  );
                })}
              </Clusterer>
              {isNaN(user[0]) || isNaN(user[1]) ? (
                ""
              ) : (
                <Clusterer
                  options={{
                    groupByCoordinates: false,
                  }}
                >
                  <Placemark
                    key={-1}
                    geometry={user !== null ? user : []}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: person,
                      iconImageSize: [40, 60],
                      iconImageOffset: [-1, -28],
                    }}
                    properties={{
                      hintContent: `<h6><b className="personStyle">Siz</b></h6>`,
                    }}
                    modules={["geoObject.addon.hint"]}
                  />
                </Clusterer>
              )}
              <GeoObject
                geometry={{
                  type: "Polygon",
                  coordinates: coor,
                  fillRule: 1,
                }}
                options={{
                  fillColor: `rgba(255,255,0,0.4)`,
                  strokeColor: "#0000FF",
                  opacity: 0.5,
                  strokeWidth: 5,
                  strokeStyle: "shortdash",
                  iconLayout: "default#image",
                  iconImageHref: pin,
                  iconImageSize: [40, 40],
                  hideIconOnBalloonOpen: false,
                  balloonOffset: [3, -40],
                }}
              />
              <GeolocationControl options={{ float: "left" }} />
              <TypeSelector options={{ float: "right" }} />
              <TrafficControl options={{ float: "right" }} />
              <RouteButton options={{ float: "right" }} />
              <ZoomControl options={{ float: "left" }} />
            </Map>
          </YMaps></>:''}
          
        </>
      )}
      

export default Xarita;
