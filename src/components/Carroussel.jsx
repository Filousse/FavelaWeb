import React, { Component } from "react";
import TouchCarousel from "react-touch-carousel";
import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC";


const cardSize = 310;

function CarouselContainer(props) {
  const { cursor, ...rest } = props;
  console.log("render");
  const translateX = cursor.toFixed(5) * cardSize;
  return (
    <div className={"carousel-container"}>
      <div
        className="carousel-track"
        style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
        {...rest}
      />
    </div>
  );
}

const data = [
    {
      title: "Card 0",
      background: "#0072bb"
    },
    {
      title: "Card 1",
      background: "#ff4c3b"
    },
    {
      title: "Card a2",
      background: "#ffca18"
    },
    {
      title: "Card 3",
      background: "#44c1c1"
    },
    {
      title: "Card 4",
      background: "#29c53c"
    },
    {
        title: "Card 4",
        background: "#29c53c"
      }
  ];

const Container = touchWithMouseHOC(CarouselContainer);

export default class Carroussel extends Component {

    
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  

  renderCard(index, modIndex) {
    const item = data[modIndex]
    return (
      <div
        key={index}
        className="carousel-card"
        onClick={() => console.log(`clicked card ${modIndex}`)}
      >
        <div>{item.title}</div>
      </div>
    );
  }

  render() {
    return (
      <>
        <br></br>
        <h1 className="text-center blueText "><strong className="text-light underlined">Une équipe exceptionnelle</strong></h1>
        <br></br><br></br>
        <TouchCarousel
          ref={this.myRef}
          component={Container}
          cardSize={cardSize}
          cardCount={data.length}
          loop={false}
          renderCard={this.renderCard}
          onRest={(index) => console.log(`rest at index ${index}`)}
        />
        
        <div class="container">
            <div class="row justify-content-md-center m-4 mb-0 pb-4">
                <div className="col col-lg-2">
                <img
                    className="btnCarroussel"
                    src="./img/home/btnPrevious.png"
                    onClick={() => {
                        this.myRef.current.prev();
                    }}
                    />
                </div>
                <div className="col col-lg-2">
                    <img
                    className="btnCarroussel"
                    src="./img/home/btnNext.png"
                    onClick={() => {
                        this.myRef.current.next();
                    }}
                    />
                    
                </div>
            </div>
        </div>

      </>
    );
  }
}


