import React,{useState} from "react";

export default function About(props) {
    // // const [{
    //           backgroundColor: props.mode === "light" ? "white" : "grey",
    //           color: props.mode === "light" ? "black" : "white",
    //         }, setDarkModeStyle] = useState({
    // //     color: 'black',
    //     backgroundColor : 'white'
    // })

    // const [btn, setBtn] = useState('Activate Dark Mode')
    // const handelDarkMode = (e)=>{
    //     if(darkModeStyle.color == 'white'){
    //         setDarkModeStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         });
    //         setBtn('Activate Dark Mode');
    //     }else{
    //         setDarkModeStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         });
    //             setBtn('Activate Light Mode');
    //     }
    // }



  return (
    <>
      <div className="container my-4" style={{
              backgroundColor: props.mode === "light" ? "white" : "rgb(30, 39, 49)",
              color: props.mode === "light" ? "black" : "white",
            }}>
        <h1 className="my-3">About Us!</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample" style={{
              backgroundColor: props.mode === "light" ? "white" : "#2a2a33",
              color: props.mode === "light" ? "black" : "white",
            }} >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
                style={{
              backgroundColor: props.mode === "light" ? "white" : "#332e2e",
              color: props.mode === "light" ? "black" : "white",
            }}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body" style={{
              backgroundColor: props.mode === "light" ? "white" : "#2a2a33",
              color: props.mode === "light" ? "black" : "white",
            }}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
                style={{
              backgroundColor: props.mode === "light" ? "white" : "#332e2e",
              color: props.mode === "light" ? "black" : "white",
            }}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body" style={{
              backgroundColor: props.mode === "light" ? "white" : "#2a2a33",
              color: props.mode === "light" ? "black" : "white",
            }}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
                style={{
              backgroundColor: props.mode === "light" ? "white" : "#332e2e",
              color: props.mode === "light" ? "black" : "white",
            }}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body" style={{
              backgroundColor: props.mode === "light" ? "white" : "#2a2a33",
              color: props.mode === "light" ? "black" : "white",
            }}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
