Traditional web will send HTML, JS and CSS file
And browser is responsible for rendering all
Each page will be one request to server to get the static files
and render it.
1. Most rendering is done on browser
2. Constraints user's browser for complex websites 
3. Increases bandwith usage
4. Longer initial load time

<React>
Comopnents
Virtual DOM
Client server mechanism

Minimal HTML - entryfile for entire application
Virtual DOM keeps track of changes and only apply the necessary change to actual DOM.

Client side routing library - React Router
Change route without full server request

Complexity - 
Processing - Heavily relies on client side rendering => delay rendering and interactivity
SEO - Not SEO optimized as everything is fully rendered by JS

<Next>
NextJS allows us to choose where to render the content.
CSR - Client Side Rendering
SSR - Server Side Rendering

Full HTML file and minial JS.
Client side hydration is done
Hydration - attaching event handlers and interactivity to the pre rendered HTML.
If the place holders don't match the elements in the client side, it will raise error
