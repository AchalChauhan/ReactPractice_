// Getting the root element from HTML;
const root = document.getElementById('root');

// Rendering function;
// parameters are 1- the element you want to inject and the 2- container you want the element to be injected in;
function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);           // creating HTML element
    domElement.innerHTML = reactElement.children;                           // adding text to HTML child
    for(const attributes in reactElement.props){                            // Setting attributes to HTML child 
        domElement.setAttribute( attributes, reactElement.props[attributes]);       // Looping through attributes
    }
    container.appendChild(domElement);
}

// creating Object that React returns;
const reactElement = {
    type : 'a',                                              // type of HTML tag
    props : {                                                // attributes of that tag
        href : "https://google.com",
        target : "_blank",
    },
    children : 'Click me to visit google'                    // text to be added in HTML element
}


//  Render element | inject element inside the root element in HTML;
customRender(reactElement, root);                           //calling function to element