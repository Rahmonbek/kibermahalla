import React, { Component } from 'react'
import "../css/Dashnews.css"
import xalq from "../img/d.jpg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import YouTube from "@u-wave/react-youtube";
export default class Dashnews extends Component {
    render() {
        const responsive2 = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 1,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          };
        return (
            <div className="dashnew">
<main>
	<ul id="cards">
    <li className="card" id="card_1">
			<div className="card__content">
				<div className="gh">
                <h1>Kiber sport va yoshlar </h1>
					<h2>Buxoro viloyati Qorovulbozor tumani Imom-Buxoriy mahalla fuqarolar yig'ini</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. vLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
					{/* <p><a href="#top" className="btn btn--accent">Read more</a></p> */}
				</div>
				<figure>
					<div className="imgs">
                    <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive2}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={100}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                <div className="imgdiv">
                    <img src={xalq}/>
                </div>
                
                <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                </Carousel>
                    </div>
<div className="you">
<YouTube
                      onEnd={this._onEnd}
                      opts={{
                        playerVars: {
                          rel: 0,
                        },
                      }}
                      video="xDZzmhaiZfE"
                      className="vid"
                      autoplay={true}
                      muted={true}
                    />
</div>
				</figure>
			</div>
		</li>
        <li className="card" id="card_1">
			<div className="card__content">
				<div className="gh">
                <h1>Kiber sport va yoshlar </h1>
					<h2>Buxoro viloyati Qorovulbozor tumani Imom-Buxoriy mahalla fuqarolar yig'ini</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. vLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
					{/* <p><a href="#top" className="btn btn--accent">Read more</a></p> */}
				</div>
				<figure>
					<div className="imgs">
                    <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive2}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={100}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                <div className="imgdiv">
                    <img src={xalq}/>
                </div>
                
                <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                </Carousel>
                    </div>
<div className="you">
<YouTube
                      onEnd={this._onEnd}
                      opts={{
                        playerVars: {
                          rel: 0,
                        },
                      }}
                      video="xDZzmhaiZfE"
                      className="vid"
                      autoplay={true}
                      muted={true}
                    />
</div>
				</figure>
			</div>
		</li>
        <li className="card" id="card_1">
			<div className="card__content">
				<div className="gh">
                <h1>Kiber sport va yoshlar </h1>
					<h2>Buxoro viloyati Qorovulbozor tumani Imom-Buxoriy mahalla fuqarolar yig'ini</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. vLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
					{/* <p><a href="#top" className="btn btn--accent">Read more</a></p> */}
				</div>
				<figure>
					<div className="imgs">
                    <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive2}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={100}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                <div className="imgdiv">
                    <img src={xalq}/>
                </div>
                
                <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                </Carousel>
                    </div>
<div className="you">
<YouTube
                      onEnd={this._onEnd}
                      opts={{
                        playerVars: {
                          rel: 0,
                        },
                      }}
                      video="xDZzmhaiZfE"
                      className="vid"
                      autoplay={true}
                      muted={true}
                    />
</div>
				</figure>
			</div>
		</li>
        <li className="card" id="card_1">
			<div className="card__content">
				<div className="gh">
                <h1>Kiber sport va yoshlar </h1>
					<h2>Buxoro viloyati Qorovulbozor tumani Imom-Buxoriy mahalla fuqarolar yig'ini</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. vLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
					{/* <p><a href="#top" className="btn btn--accent">Read more</a></p> */}
				</div>
				<figure>
					<div className="imgs">
                    <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive2}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={100}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                <div className="imgdiv">
                    <img src={xalq}/>
                </div>
                
                <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                </Carousel>
                    </div>
<div className="you">
<YouTube
                      onEnd={this._onEnd}
                      opts={{
                        playerVars: {
                          rel: 0,
                        },
                      }}
                      video="xDZzmhaiZfE"
                      className="vid"
                      autoplay={true}
                      muted={true}
                    />
</div>
				</figure>
			</div>
		</li>
        <li className="card" id="card_1">
			<div className="card__content">
				<div className="gh">
                <h1>Kiber sport va yoshlar </h1>
					<h2>Buxoro viloyati Qorovulbozor tumani Imom-Buxoriy mahalla fuqarolar yig'ini</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. vLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
					{/* <p><a href="#top" className="btn btn--accent">Read more</a></p> */}
				</div>
				<figure>
					<div className="imgs">
                    <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive2}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={100}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                <div className="imgdiv">
                    <img src={xalq}/>
                </div>
                
                <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                </Carousel>
                    </div>
<div className="you">
<YouTube
                      onEnd={this._onEnd}
                      opts={{
                        playerVars: {
                          rel: 0,
                        },
                      }}
                      video="xDZzmhaiZfE"
                      className="vid"
                      autoplay={true}
                      muted={true}
                    />
</div>
				</figure>
			</div>
		</li>
        <li className="card" id="card_1">
			<div className="card__content">
				<div className="gh">
                <h1>Kiber sport va yoshlar </h1>
					<h2>Buxoro viloyati Qorovulbozor tumani Imom-Buxoriy mahalla fuqarolar yig'ini</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. vLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
					{/* <p><a href="#top" className="btn btn--accent">Read more</a></p> */}
				</div>
				<figure>
					<div className="imgs">
                    <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive2}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={100}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                <div className="imgdiv">
                    <img src={xalq}/>
                </div>
                
                <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                </Carousel>
                    </div>
<div className="you">
<YouTube
                      onEnd={this._onEnd}
                      opts={{
                        playerVars: {
                          rel: 0,
                        },
                      }}
                      video="xDZzmhaiZfE"
                      className="vid"
                      autoplay={true}
                      muted={true}
                    />
</div>
				</figure>
			</div>
		</li>
        <li className="card" id="card_1">
			<div className="card__content">
				<div className="gh">
                <h1>Kiber sport va yoshlar </h1>
					<h2>Buxoro viloyati Qorovulbozor tumani Imom-Buxoriy mahalla fuqarolar yig'ini</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. vLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
					{/* <p><a href="#top" className="btn btn--accent">Read more</a></p> */}
				</div>
				<figure>
					<div className="imgs">
                    <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive2}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={100}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                <div className="imgdiv">
                    <img src={xalq}/>
                </div>
                
                <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                </Carousel>
                    </div>
<div className="you">
<YouTube
                      onEnd={this._onEnd}
                      opts={{
                        playerVars: {
                          rel: 0,
                        },
                      }}
                      video="xDZzmhaiZfE"
                      className="vid"
                      autoplay={true}
                      muted={true}
                    />
</div>
				</figure>
			</div>
		</li>
        <li className="card" id="card_1">
			<div className="card__content">
				<div className="gh">
                <h1>Kiber sport va yoshlar </h1>
					<h2>Buxoro viloyati Qorovulbozor tumani Imom-Buxoriy mahalla fuqarolar yig'ini</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. vLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
					{/* <p><a href="#top" className="btn btn--accent">Read more</a></p> */}
				</div>
				<figure>
					<div className="imgs">
                    <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive2}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={100}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                <div className="imgdiv">
                    <img src={xalq}/>
                </div>
                
                <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                </Carousel>
                    </div>
<div className="you">
<YouTube
                      onEnd={this._onEnd}
                      opts={{
                        playerVars: {
                          rel: 0,
                        },
                      }}
                      video="xDZzmhaiZfE"
                      className="vid"
                      autoplay={true}
                      muted={true}
                    />
</div>
				</figure>
			</div>
		</li>	<li className="card" id="card_1">
			<div className="card__content">
				<div className="gh">
                <h1>Kiber sport va yoshlar </h1>
					<h2>Buxoro viloyati Qorovulbozor tumani Imom-Buxoriy mahalla fuqarolar yig'ini</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. vLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
					{/* <p><a href="#top" className="btn btn--accent">Read more</a></p> */}
				</div>
				<figure>
					<div className="imgs">
                    <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive2}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={100}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                <div className="imgdiv">
                    <img src={xalq}/>
                </div>
                
                <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                </Carousel>
                    </div>
<div className="you">
<YouTube
                      onEnd={this._onEnd}
                      opts={{
                        playerVars: {
                          rel: 0,
                        },
                      }}
                      video="xDZzmhaiZfE"
                      className="vid"
                      autoplay={true}
                      muted={true}
                    />
</div>
				</figure>
			</div>
		</li>
        <li className="card" id="card_1">
			<div className="card__content">
				<div className="gh">
                <h1>Kiber sport va yoshlar </h1>
					<h2>Buxoro viloyati Qorovulbozor tumani Imom-Buxoriy mahalla fuqarolar yig'ini</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Loresit amet consectetur adipisicing elit .Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. vLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
					{/* <p><a href="#top" className="btn btn--accent">Read more</a></p> */}
				</div>
				<figure>
					<div className="imgs">
                    <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive2}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={100}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                <div className="imgdiv">
                    <img src={xalq}/>
                </div>
                
                <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                 
                 <div className="imgdiv">
                     <img src={xalq}/>
                 </div>
                </Carousel>
                    </div>
<div className="you">
<YouTube
                      onEnd={this._onEnd}
                      opts={{
                        playerVars: {
                          rel: 0,
                        },
                      }}
                      video="xDZzmhaiZfE"
                      className="vid"
                      autoplay={true}
                      muted={true}
                    />
</div>
				</figure>
			</div>
		</li>

	</ul>
</main>
            </div>
        )
    }
}
